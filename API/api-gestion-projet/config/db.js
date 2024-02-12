const Sequelize = require("sequelize");

//Liaison de l'api à la base de données api_projects_bdd
const sequelize = new Sequelize("api_projects_bdd", "root", "password", {
    host: "localhost",
    dialect: "mysql",
});

// Synchronisation des modèles
const User = require("../models/User")(sequelize);
const Project = require("../models/Project")(sequelize);
const Task = require("../models/Task")(sequelize);


sequelize
    .sync({ force: false })
    .then(() => console.log("La base de données a bien été synchronisée"))
    .catch((error) =>
        console.error("Problème lors de la synchronisation :", error.message)
);

module.exports = {
    sequelize,
    User,
    Project,
    Task,
};