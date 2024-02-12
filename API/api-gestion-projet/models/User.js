const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const User = sequelize.define("User", {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return User;
}