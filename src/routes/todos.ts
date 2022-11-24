import express from "express";
const router = express.Router();
import TodoItem from "../models/TodoItem.model";
import TodoList from "../models/TodoList.model";

const todoListInstance: TodoList = new TodoList();
todoListInstance.addTodo(new TodoItem("Buy milk", 1));

/* GET todos listing. */
router.get('/', (req: any, res: any, next: any) => {
  const todos: TodoItem[] = todoListInstance.todos;
  res.send(todos);
});

/* POST todos listing. */
router.post('/', (req: any, res: any, next: any) => {
  console.log(req);
  res.send("asd");
});

export default router;
