var TodoItem = require('./TodoItem.model');

class TodoList {
    _todos = [];

    constructor() {
        this._todos = [];
    }

    get todos() {
        return this._todos;
    }

    set todos(todos) {
        this._todos = todos;
    }

    addTodo(todo) {
        this._todos.push(todo);
    }

    removeTodo(todo) {
        this._todos = this._todos.filter((t) => !t.equals(todo));
    }

    getTodoById(todoId) {
        return this._todos.find((t) => t.todo === todoId);
    }
}

module.exports = TodoList;
