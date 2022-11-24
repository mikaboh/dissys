import express, { Request, Response } from "express";
const router = express.Router();
import TodoItem from "../models/TodoItem.model";
import TodoList from "../models/TodoList.model";

const todoListInstance: TodoList = new TodoList();
todoListInstance.addTodo(new TodoItem("Buy milk", 1));

/* GET: get an array of all todo items */
router.get('/', (req: Request, res: Response, next: any) => {
  const todos: TodoItem[] = todoListInstance.todos;
  res.send(todos);
});

/* POST: create a todo item */
router.post('/', (req: Request, res: Response, next: any) => {
  const todoItem: TodoItem = new TodoItem(req.body.todo, req.body.priority);
  todoListInstance.addTodo(todoItem);
  res.send(todoItem).status(201);
});

/* PUT: update a todo item */
router.put('/', (req: Request, res: Response, next: any) => {
  const todoItem: TodoItem = new TodoItem(req.body.todo, req.body.priority);
  const todoItemToUpdate: TodoItem = todoListInstance.getTodoById(todoItem.todo);
  todoItemToUpdate.setPriority(todoItem.priority);
  res.send(todoItemToUpdate).status(200);
});



/* DELETE: delete a todo item. */
router.delete('/', (req: Request, res: Response, next: any) => {
  const todoItem: TodoItem = new TodoItem(req.body.todo, req.body.priority);
  todoListInstance.removeTodo(todoItem);
  res.send(todoItem).status(204);
});

/* POST: create a todo item with 2 as default priority */
router.post('/:name', (req: Request, res: Response, next: any) => {
  const todoItem: TodoItem = new TodoItem(req.params.name);
  todoListInstance.addTodo(todoItem);
  res.sendStatus(201);
});

/* GET: get a todo item by itemId */
router.get('/:name', (req: Request, res: Response, next: any) => {
  const todoItem: TodoItem = todoListInstance.getTodoById(req.params.name);
  if (todoItem) {
    res.send(todoItem).status(200);
  } else {
    res.sendStatus(404);
  }
});

/* DELETE: delete a todo item by itemId */
router.delete('/:name', (req: Request, res: Response, next: any) => {
  const todoItem: TodoItem = todoListInstance.getTodoById(req.params.name);
  if (todoItem) {
    todoListInstance.removeTodo(todoItem);
    res.send(todoItem).status(204);
  } else {
    res.sendStatus(404);
  }
});

/* PUT: update a todo item by itemId */
router.put('/:name', (req: Request, res: Response, next: any) => {
  const todoItem: TodoItem = todoListInstance.getTodoById(req.params.name);
  if (todoItem) {
    todoItem.setPriority(req.body.priority);
    res.send(todoItem).status(200);
  } else {
    res.sendStatus(404);
  }
});

export default router;
