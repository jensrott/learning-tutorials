const Todo = require('../../models/Todo');

const todoResolver = {
    Query: {
        allTodos: () => {
            const todos = Todo.find();
            todos.sort({ created_at: -1 }) // sort descending
            return todos;
        },
    },
    Mutation: {
        createTodo: (_, { title }) => {
            const newTodo = new Todo({
                title: title,
            });
            return newTodo.save();
        },

        viewTodo: (_, { id }) => {
            const todoId = id;
            return Todo.findById(todoId);
        },

        deleteTodo: (_, { id }) => {
            const todoId = id;
            return Todo.findByIdAndDelete({ _id: todoId }).exec();
        },
    }
}

module.exports = todoResolver;
