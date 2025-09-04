# ToDoList Frontend

Uma aplicação **React** para gerenciamento de tarefas (To-Do List), que consome a [ToDoList API](https://github.com/PierryB/ToDoList-Api), hospedada no **Heroku**.

## 📝 Descrição

Este projeto é a interface web do gerenciador de tarefas. Ele se conecta diretamente à API para permitir que o usuário crie, visualize, edite e exclua tarefas.  
A aplicação inclui feedback visual para cada ação realizada (mensagens de sucesso e erro) e confirmação antes da exclusão de tarefas.

## ✨ Funcionalidades

* **Listar Tarefas:** Exibir todas as tarefas cadastradas.  
* **Criar Tarefa:** Adicionar uma nova tarefa informando título, descrição e prazo.  
* **Editar Tarefa:** Alterar os dados de uma tarefa existente.  
* **Deletar Tarefa:** Remover uma tarefa cadastrada, com confirmação.  
* **Feedback ao Usuário:** Exibição de mensagens de sucesso ou erro para cada operação.  

## 🛠️ Tecnologias Utilizadas

As principais tecnologias utilizadas neste projeto são:

* **React** – Biblioteca para construção da interface.  
* **CSS (App.css)** – Para estilização da aplicação.  
* **Fetch API** – Para comunicação com a API RESTful.  
* **Heroku** – Hospedagem da API consumida pelo frontend.  

## 🔗 Integração com a API

A aplicação está configurada para consumir a API hospedada no Heroku:  

Todas as operações (GET, POST, PATCH, DELETE) são feitas a partir desse endpoint.

## 🚀 Como Executar o Projeto

### Pré-requisitos

* Node.js instalado (versão recomendada: LTS).  
* Gerenciador de pacotes **npm** ou **yarn**.  

### Passos

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/PierryB/ToDoList-Frontend.git
    cd ToDoList-Frontend
    ```

2. **Instale as dependências:**
    ```bash
    # Usando npm
    npm install

    # Ou usando yarn
    yarn install
    ```

3. **Execute a aplicação em modo de desenvolvimento:**
    ```bash
    # Usando npm
    npm start

    # Ou usando yarn
    yarn start
    ```

4. **Acesse no navegador:**
    ```
    http://localhost:3000
    ```

## 📦 Build para Produção

Para gerar os arquivos otimizados para deploy:
```bash
npm run build
