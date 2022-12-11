var express = require('express');
var TodoItem = require('../models/TodoItem.model');
var TodoList = require('../models/TodoList.model');
const router = express.Router();

const todoListInstance = new TodoList();
todoListInstance.addTodo(new TodoItem("Buy milk", 1));

/* GET: get an array of all todo items */
router.get('/', (req, res, next) => {
  const todos = todoListInstance.todos;
  res.send(todos);
});

/* POST: create a todo item */
router.post('/', (req, res, next) => {
  const todoItem = new TodoItem(req.body.todo, req.body.priority);
  todoListInstance.addTodo(todoItem);
  res.send(todoItem).status(201);
});

/* PUT: update a todo item */
router.put('/', (req, res, next) => {
  const todoItem = new TodoItem(req.body.todo, req.body.priority);
  const todoItemToUpdate = todoListInstance.getTodoById(todoItem.todo);
  todoItemToUpdate.setPriority(todoItem.priority);
  res.send(todoItemToUpdate).status(200);
});



/* DELETE: delete a todo item. */
router.delete('/', (req, res, next) => {
  const todoItem = new TodoItem(req.body.todo, req.body.priority);
  todoListInstance.removeTodo(todoItem);
  res.send(todoItem).status(204);
});

/* POST: create a todo item with 2 as default priority */
router.post('/:name', (req, res, next) => {
  const todoItem = new TodoItem(req.params.name);
  todoListInstance.addTodo(todoItem);
  res.sendStatus(201);
});

/* GET: get a todo item by itemId */
router.get('/:name', (req, res, next) => {
  const todoItem = todoListInstance.getTodoById(req.params.name);
  if (todoItem) {
    res.send(todoItem).status(200);
  } else {
    res.sendStatus(404);
  }
});

/* DELETE: delete a todo item by itemId */
router.delete('/:name', (req, res, next) => {
  const todoItem = todoListInstance.getTodoById(req.params.name);
  if (todoItem) {
    todoListInstance.removeTodo(todoItem);
    res.send(todoItem).status(204);
  } else {
    res.sendStatus(404);
  }
});

/* PUT: update a todo item by itemId */
router.put('/:name', (req, res, next) => {
  const todoItem = todoListInstance.getTodoById(req.params.name);
  if (todoItem) {
    todoItem.setPriority(req.body.priority);
    res.send(todoItem).status(200);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
