class TodoItem {
    todo: string;
    priority: number;

    constructor(todo: string, priority: number = 2) {
        this.todo = todo;
        this.priority = priority;
    }

    getTodo() {
        return this.todo;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(priority: number) {
        this.priority = priority;
    }

    toString() {
        return "TodoItem [todo=" + this.todo + ", priority=" + this.priority + "]";
    }

    equals(other: TodoItem) {
        return this.todo === other.todo && this.priority === other.priority;
    }
}

export default TodoItem;