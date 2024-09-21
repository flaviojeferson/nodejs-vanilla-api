# 🧑‍💻 API de Usuários - Node.js Puro

Seja bem-vindo(a) à **API de Usuários** criada por **Flávio Jeferson**! 🚀
Este projeto foi desenvolvido com **Node.js puro**, sem o uso de frameworks mágicos 🪄, apenas para fins **educacionais** e de **teste**. Vamos quebrar a ideia de que frameworks fazem milagres: eles são apenas facilitadores, a mágica está na **linguagem**!

## 🎯 Objetivo

O objetivo deste projeto é mostrar que podemos construir uma API funcional com **Node.js puro**, sem depender de frameworks como **Express**. Aqui, recriamos funcionalidades semelhantes, como `.json()` e `.status()`, além de incluir um **middleware de BodyParser** que aceita apenas requisições em **JSON**.

## 🔧 Funcionalidades

- **Listar todos os usuários**:
  Método **GET** no endpoint `/` retorna todos os usuários cadastrados.

- **Consultar um usuário**:
  Método **GET** em `/:id` retorna um usuário específico pelo seu `ID`.

- **Ordenar lista de usuários**:
  Adicione o query param `?order=asc` ou `?order=desc` para ordenar a lista.

- **Criar um novo usuário**:
  Método **POST** no endpoint `/` cria um novo usuário, sendo obrigatório informar o campo `name` no corpo da requisição.

- **Atualizar um usuário**:
  Método **PUT** em `/:id` atualiza os dados de um usuário existente, passando o `ID` na URL.

- **Deletar um usuário**:
  Método **DELETE** em `/:id` remove um usuário da base de dados.

### 🛠️ Lógica adicional

- **BodyParser**: Recebe requisições em JSON e rejeita qualquer outro formato.
- **Parâmetros da URL**: A lógica de extração de parâmetros, especialmente o `ID`, é feita manualmente.
- **Armazenamento**: O array de usuários é armazenado em um arquivo na memória (não persistente).

## 🚀 Como rodar a API localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## 📝 Estrutura do Objeto Usuário

Cada usuário cadastrado possui a seguinte estrutura:

```json
{
  "id": "string",
  "name": "string", // Obrigatório
  "nickname": "string",
  "email": "string",
  "age": "string"
}
```

## 🧰 Dependências

- **ESLint**: Para manter a qualidade do código.
- **Nodemon**: Para reiniciar automaticamente o servidor durante o desenvolvimento.

## 🤔 Por que Node.js puro?

A ideia aqui é entender o que está por trás dos frameworks. Quando usamos algo como o **Express**, estamos utilizando funções que, no fim das contas, são baseadas no próprio **Node.js**. Com este projeto, você verá como essas funções podem ser implementadas do zero e entenderá melhor como elas realmente funcionam.

---

Espero que essa API seja útil para quem quer aprender mais sobre **Node.js puro** e desmistificar o uso de frameworks! 😊

Contribuições e sugestões são super bem-vindas! 🙌
