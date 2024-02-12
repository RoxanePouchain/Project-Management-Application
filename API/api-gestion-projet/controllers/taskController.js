const jwt = require("jsonwebtoken");
const { Task, Project } = require("../config/db");

//Créer une nouvelle tâche associée à un projet
exports.createTask = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const user_Id = decodedToken.userId;
        const projects = await Project.findOne({ where: { user_Id: user_Id, projectId: req.params.id } });
        if (projects){
            const { task_title, task_description, priority, deadline } = req.body;
            const project_Id = req.params.id;
            await Task.create({ task_title, task_description, priority, deadline, project_Id });
        res.status(201).json({message: "Tâche créée"});
        }
        
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de la tâche" });
    }
};

//Récupérer et afficher toutes les tâches
exports.getAllTasks = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const user_Id = decodedToken.userId;
        const projects = await Project.findAll( {where: {user_Id: user_Id}});
        const tasks = await Task.findAll({ where: { project_Id: req.params.id }});
        res.json(tasks);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la récupération de la tâche" });
    }
};


//----- NE FONCTIONNE PAS/ CONTINUER ----------------
//Mettre à jour les informations d'une tâche
exports.updateTaskById = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const user_Id = decodedToken.userId;
        const projects = await Project.findAll( {where: {user_Id: user_Id}});
        await Task.update({ task_title, task_description, priority, deadline} = req.body, { where: {taskId: req.params.idT }});
        const tasks = await Task.findOne({ where: { project_Id: req.params.id, taskId: req.params.idT } }); //permet de récupérer les infos complètes de la tâche modifiée
        res.json(tasks);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la modification de la tâche" });
    }
};

//----- NE FONCTIONNE PAS/ CONTINUER ----------------
//Supprimer un projet par id
exports.deleteTaskById = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const user_Id = decodedToken.userId;
        const projects = await Project.findAll( {where: {user_Id: user_Id}});
        const deletedTask = await Task.destroy({ where: { project_Id: req.params.id, taskId: req.params.idT } });

        if (!deletedTask) {
            return res.status(404).json("Tâche non trouvée")
        }
        res.status(201).json({ message: "Tâche supprimé" });

    } catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la récupération des tâches" });
    }
};