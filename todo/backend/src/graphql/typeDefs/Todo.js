// Create a schema
const { gql } = require('apollo-server-express');

const todoType = gql`
    type Todo {
        id: ID!
        title: String!,
    }

    extend type Query {
        allTodos: [Todo!]!
    }

    extend type Mutation {
        createTodo(title: String!): Todo!,
        viewTodo(id: ID!): Todo!
        updateTodo(id: ID!, title: String): Todo!,
        deleteTodo(id: ID!): Todo!,
    }
`;

module.exports = todoType;