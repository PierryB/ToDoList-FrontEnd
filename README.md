# ToDoList Frontend

Uma aplicação **React** para gerenciamento de tarefas (To-Do List), que consome a [ToDoList API](https://github.com/PierryB/ToDoList-Api).

## 📝 Descrição

Este projeto é a interface web do gerenciador de tarefas. Ele se comunica com a API RESTful desenvolvida em **Spring Boot**, permitindo que o usuário crie, visualize, atualize e exclua tarefas de forma prática e intuitiva.

## ✨ Funcionalidades

* **Visualizar Tarefas:** Listar todas as tarefas cadastradas na API.  
* **Criar Tarefa:** Adicionar uma nova tarefa informando título, descrição e prazo.  
* **Editar Tarefa:** Atualizar os dados de uma tarefa existente.  
* **Deletar Tarefa:** Remover uma tarefa cadastrada.  
* **Integração com API:** Toda manipulação de dados é feita via [ToDoList API](https://github.com/PierryB/ToDoList-Api).  

## 🛠️ Tecnologias Utilizadas

As principais tecnologias utilizadas neste projeto são:

* **React** – Biblioteca para construção da interface.  
* **Vite / Create React App** (dependendo da sua configuração) – Ferramenta para build e desenvolvimento.  
* **Axios / Fetch API** – Para consumo da API RESTful.  
* **React Router** – Para navegação entre páginas (se aplicável).  
* **TailwindCSS / CSS Modules / Styled Components** – Estilização da interface (ajustar conforme seu projeto).  

## 🚀 Como Executar o Projeto

### Pré-requisitos

* Node.js instalado (versão recomendada: LTS).  
* Gerenciador de pacotes **npm** ou **yarn**.  
* API [ToDoList](https://github.com/PierryB/ToDoList-Api) rodando localmente ou em ambiente configurado.  

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

3. **Configure a URL da API:**
    No arquivo `.env`, configure a variável de ambiente com a URL da API:
    ```env
    VITE_API_URL=http://localhost:8080
    ```

4. **Execute a aplicação em modo de desenvolvimento:**
    ```bash
    # Usando npm
    npm run dev

    # Ou usando yarn
    yarn dev
    ```

5. **Acesse no navegador:**
    ```
    http://localhost:5173
    ```
    (porta padrão do Vite; caso use CRA, será `http://localhost:3000`).

## 📦 Build para Produção

Para gerar os arquivos otimizados para deploy:
```bash
npm run build
