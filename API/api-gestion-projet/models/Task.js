const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Task = sequelize.define("Task", {
        taskId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        task_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        task_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        project_Id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
        },
    });

    return Task;
}