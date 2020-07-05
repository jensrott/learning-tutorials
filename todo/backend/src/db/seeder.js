const Todo = require('../models/Todo');
const faker = require('faker');

/** Create an array with fake todo objects
 * @param {number} amountOfTodos
 * @return {Array<Object>} Array of user objects
 */

const createTodos = (amountOfTodos) => {
    let todos = [];
    for (let i = 0; i <= amountOfTodos; i++) {
        let rand = Boolean(Math.round(Math.random())); // true of false
        let todo = {
            title: faker.lorem.sentence(),
        }
        todos.push(todo)
    }
    return todos;
}

exports.seedTodos = (req, res) => {
    const todos = createTodos(10);
    todos.forEach(todo => {
        const newTodo = new Todo({
            title: todo.title,
        });
        newTodo.save()
            .then(response => {
                console.log(`Succesfully added ${newTodo}`)
                return res.status(200).json(response);
            })
            .catch(err => {
                console.log(err)
            });
    })
    return res.send('Todos succesfully seeded!');
}
