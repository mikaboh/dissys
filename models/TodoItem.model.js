class TodoItem {
    todo;
    priority;

    constructor(todo, priority = 2) {
        this.todo = todo;
        this.priority = priority;
    }

    getTodo() {
        return this.todo;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    toString() {
        return "TodoItem [todo=" + this.todo + ", priority=" + this.priority + "]";
    }

    equals(other) {
        return this.todo === other.todo && this.priority === other.priority;
    }
}

module.exports = TodoItem;
