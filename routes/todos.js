var express = require('express');
const router = express.Router();
var models = require('../models/index').models;

/* POST: create a new todoItem. */
router.post('/:name', (req, res, next) => {
  models.TodoItem.create({ todo: req.params.name, priority: 2 }).then(todoItem => {
    res.status(201).send({
      "todo": todoItem.todo,
      "priority": todoItem.priority,
    });
  });
});

/* GET: get all todoItems. */
router.get('/', (req, res, next) => {
  models.TodoItem.findAll().then(todoItems => {
    todoItems = todoItems.map(todoItem => {
      return {
        "todo": todoItem.todo,
        "priority": todoItem.priority,
      }
    });
    res.send(todoItems).status(200);
  });
});

/* POST: create a new todoItem. */
router.post('/', (req, res, next) => {
  models.TodoItem.create({ todo: req.body.todo, priority: req.body.priority }).then(todoItem => {
    res.status(201).send({
      "todo": todoItem.todo,
      "priority": todoItem.priority,
    });
  }).catch(error => {
    res.status(400).send({
      "error": error.message,
    });
  });
});

/* DELETE: delete a specific todoItem. */
router.delete('/', (req, res, next) => {
  models.TodoItem.destroy({
    where: {
      todo: req.body.todo,
      priority: req.body.priority,
    }
  }).then(() => {
    res.sendStatus(204);
  }).catch(error => {
    res.status(400).send({
      "error": error.message,
    });
  });
});

/* DELETE: delete a specific todoItem with url parameter :id */
router.delete('/:id', (req, res, next) => {
  models.TodoItem.destroy({
    where: {
      todo: req.params.id,
    }
  }).then(() => {
    res.sendStatus(204);
  }).catch(error => {
    res.status(400).send({
      "error": error.message,
    });
  });
});

/* GET: get a specific todoItem */
router.get('/id/:id', (req, res, next) => {
  models.TodoItem.findOne({
    where: {
      todo: req.params.id,
    }
  }).then(todoItem => {
    res.send({
      "todo": todoItem.todo,
      "priority": todoItem.priority,
    }).status(200);
  });
});

/* GET: get a count of todoItems. */
router.get('/count', (req, res, next) => {
  models.TodoItem.count().then(count => {
    res.send(count.toString()).status(200);
  });
});

module.exports = router;
