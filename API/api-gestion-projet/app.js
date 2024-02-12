const express = require("express");
const DB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const isAuthenticated = require("./middlewares/authentication");

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.json())
    .use("/api/auth", authRoutes)
    .use("/api/project", isAuthenticated, projectRoutes)
    .use("/api/task", isAuthenticated, taskRoutes);

DB.sequelize
    .authenticate()
    .then(() => console.log("Connexion avec la base de données réussie"))
    .then(() => {
        app.listen(port, () => {
            console.log("http://localhost:", port);
        });
    })
    .catch((err) => {
        console.log("Erreur lors de la connexion à la base de données", err.message);
    });