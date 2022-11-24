import TodoItem from "./TodoItem.model";

class TodoList {
    _todos: TodoItem[];

    constructor() {
        this._todos = [];
    }

    get todos() {
        return this._todos;
    }

    set todos(todos: TodoItem[]) {
        this._todos = todos;
    }

    addTodo(todo: TodoItem) {
        this._todos.push(todo);
    }

    removeTodo(todo: TodoItem) {
        this._todos = this._todos.filter((t) => !t.equals(todo));
    }

    getTodoById(todoId: string) {
        return this._todos.find((t) => t.todo === todoId);
    }
}

export default TodoList;