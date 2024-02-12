const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Project = sequelize.define("Project", {
        projectId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        project_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        project_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_Id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
        },
    });

    return Project;
}