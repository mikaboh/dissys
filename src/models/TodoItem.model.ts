class TodoItem {
    todo: string;
    priority: number = 2;

    constructor(todo: string, priority: number) {
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
}

export default TodoItem;