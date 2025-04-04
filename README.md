<!-- @format -->

# 🐶 Petshop API

API desenvolvida para gerenciamento de um petshop, permitindo o cadastro, atualização, remoção e listagem de **animais** e seus respectivos **proprietários**. Este projeto foi criado como parte do desafio/trabalho prático do curso de Node.js do **IGTI**.

---

## 🚀 Tecnologias Utilizadas

A aplicação foi construída com as seguintes tecnologias:

- [Node.js](https://nodejs.org/) – v20.17.0
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Express](https://expressjs.com/) – ^4.17.1
- [MySQL2](https://github.com/sidorares/node-mysql2) – ^3.14.0
- [dotenv](https://github.com/motdotla/dotenv) – ^16.4.7

---

## ⚙️ Instalação e Execução

1. **Clone o repositório**

   ```bash
   git clone https://github.com/IMoisasZ/petshop.git
   cd petshop
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   - Renomeie o arquivo `.env_exemplo` para `.env`
   - Atualize os dados de acordo com o seu ambiente local:
     ```env
     HOST=localhost
     USER=seu usuário mysql
     PASSWORD=sua senha mysql
     DATABASE=petshop
     WAITFORCONNECTIONS=true
     CONNECTION_LIMIT=10
     QUEUELIMIT=0
     PORT=3000
     PORT_SECONDARY=3333
     ```

4. **Execute a aplicação**
   ```bash
   npm start
   ```

---

## 📚 Endpoints da API

### 🐾 Animais

| Ação          | Método | Rota          |
| ------------- | ------ | ------------- |
| Criar         | POST   | `/animal`     |
| Atualizar     | PUT    | `/animal`     |
| Remover       | DELETE | `/animal/:id` |
| Listar todos  | GET    | `/animal`     |
| Buscar por ID | GET    | `/animal/:id` |

### 👤 Proprietários

| Ação          | Método | Rota                |
| ------------- | ------ | ------------------- |
| Criar         | POST   | `/proprietario`     |
| Atualizar     | PUT    | `/proprietario`     |
| Remover       | DELETE | `/proprietario/:id` |
| Listar todos  | GET    | `/proprietario`     |
| Buscar por ID | GET    | `/proprietario/:id` |

---

## 📥 Exemplos de Uso

### 🔹 Criar um Proprietário

**Requisição**

```json
{
	"nome": "João da Silva",
	"telefone": "11 95856-8596"
}
```

**Resposta**

```json
{
	"id": 16,
	"nome": "João da Silva",
	"telefone": "11 95856-8596",
	"created_at": "2025-04-04T19:10:25.000Z",
	"updated_at": "2025-04-04T19:10:25.000Z"
}
```

---

### 🔹 Criar um Animal

**Requisição**

```json
{
	"nome": "xuxu",
	"tipo": "cachorro",
	"proprietario_id": 16
}
```

**Resposta**

```json
{
	"id": 6,
	"nome": "xuxu",
	"tipo": "cachorro",
	"proprietario": "João da Silva"
}
```

---

## 📌 Observações

- O banco de dados e suas tabelas estão descritos no arquivo `tables.sql`, localizado na pasta `sql`.  
  **Importe esse arquivo no seu MySQL antes de iniciar a aplicação.**
- Os testes das rotas estão disponíveis na pasta `insomnia`.  
  Para utilizá-los, importe o arquivo no [Insomnia](https://insomnia.rest/) e execute as requisições com facilidade.

- O arquivo `.env_exemplo` contém os parâmetros necessários de ambiente.  
  **Renomeie-o para `.env` e substitua pelas suas credenciais do MySQL.**

- Para testes manuais, também é possível utilizar o [Postman](https://www.postman.com/).

---

## 🧑‍🎓 Projeto Acadêmico

Este projeto foi desenvolvido como parte da avaliação prática do curso de **Node.js** promovido pelo **IGTI**.

---

## 👨‍💻 Autor

Desenvolvido por **Moisas**.  
🔗 [GitHub - @IMoisasZ](https://github.com/IMoisasZ)
