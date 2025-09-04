import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadLine: ''
  });
  const [editingTaskId, setEditingTaskId] = useState(null);
  
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => {
      setMessage({ type: '', text: '' });
    }, 3000);
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Erro de rede');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      showMessage('error', 'Não foi possível carregar as tarefas.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEditing = !!editingTaskId;
    const method = isEditing ? 'PATCH' : 'POST';
    const url = isEditing ? `${API_URL}/${editingTaskId}` : API_URL;

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          deadLine: formData.deadLine ? new Date(formData.deadLine).toISOString() : null
        }),
      });

      if (response.ok) {
        resetForm();
        fetchTasks();
        showMessage('success', isEditing ? 'Tarefa atualizada com sucesso!' : 'Tarefa criada com sucesso!');
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Erro ao salvar tarefa:", errorData);
        showMessage('error', `Erro ao salvar tarefa: ${errorData.message || 'Verifique os dados'}`);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      showMessage('error', 'Erro de conexão ao salvar a tarefa.');
    }
  };

  const handleDelete = async (taskId) => {
    const isConfirmed = window.confirm("Você tem certeza que deseja excluir esta tarefa?");

    if (isConfirmed) {
      try {
        const response = await fetch(`${API_URL}/${taskId}`, {
          method: 'DELETE',
        });

        if (response.status === 204 || response.ok) {
          fetchTasks();
          showMessage('success', 'Tarefa excluída com sucesso!');
        } else {
          console.error("Erro ao deletar tarefa");
          showMessage('error', 'Não foi possível excluir a tarefa.');
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
        showMessage('error', 'Erro de conexão ao excluir a tarefa.');
      }
    }
  };

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setFormData({
      title: task.title,
      description: task.description,
      deadLine: task.deadLine ? task.deadLine.substring(0, 16) : ''
    });
  };
  
  const resetForm = () => {
    setFormData({ title: '', description: '', deadLine: '' });
    setEditingTaskId(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas</h1>
      </header>
      <main>
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="task-form-container">
          <form onSubmit={handleSubmit}>
            <h2>{editingTaskId ? 'Editar Tarefa' : 'Adicionar Nova Tarefa'}</h2>
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Descrição"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
            <input
              type="datetime-local"
              name="deadLine"
              value={formData.deadLine}
              onChange={handleInputChange}
              required
            />
            <div className="form-buttons">
              <button type="submit">{editingTaskId ? 'Salvar Alterações' : 'Adicionar Tarefa'}</button>
              {editingTaskId && <button type="button" onClick={resetForm}>Cancelar Edição</button>}
            </div>
          </form>
        </div>
        
        <div className="task-list-container">
          <h2>Tarefas Cadastradas</h2>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <div className="task-details">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <small>
                    Prazo: {new Date(task.deadLine).toLocaleString('pt-BR')}
                  </small>
                </div>
                <div className="task-actions">
                  <button onClick={() => handleEdit(task)}>Editar</button>
                  <button className="delete-btn" onClick={() => handleDelete(task.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
