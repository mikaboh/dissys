const getTodoModel = (sequelize, { DataTypes }) => {
    const TodoItem = sequelize.define('TodoItem', {
        todo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 1,
            },
        },
    },
        {
        });

    return TodoItem;
};

module.exports = getTodoModel;