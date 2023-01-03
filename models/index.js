var Sequelize = require('sequelize');
require('dotenv').config();

var getTodoModel = require('./TodoItem.model');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
    },
);

const models = {
    TodoItem: getTodoModel(sequelize, Sequelize),
};

module.exports = {
    sequelize,
    models,
};