// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Project } = require("../config/db");


//Créer un nouveau projet avec liaison à un userId
exports.createProject = async (req, res) => {
    try {
        const { project_name, project_description } = req.body;
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const user_Id = decodedToken.userId;
        const newProject = await Project.create({ project_name, project_description, user_Id });
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout du projet" });
    }
};

//Récupérer et afficher tous les projets
exports.getAllProjects = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const user_Id = decodedToken.userId;
        const projects = await Project.findAll({ where: { user_Id : user_Id}});
        res.json(projects);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la récupération des projets" });
    }
};

//Mettre à jour les informations d'un projet
exports.updateProjectById = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const user_Id = decodedToken.userId;
        await Project.update({ project_name, project_description} = req.body, { where: { projectId: req.params.id, user_Id: user_Id }});
        const projects = await Project.findOne({ where: { projectId: req.params.id, user_Id: user_Id } }); //permet de récupérer les infos complètes du projet modifié
        res.json(projects);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la modification du projet" });
    }
};

//Supprimer un projet par id
exports.deleteProjectById = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const user_Id = decodedToken.userId;
        const deletedProject = await Project.destroy({ where: { projectId: req.params.id, user_Id: user_Id } });

        if (!deletedProject) {
            return res.status(404).json("Projet non trouvé")
        }
        res.status(201).json({ message: "Projet supprimé" });

    } catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la récupération des projets" });
    }
};




//SOLUTION SANS GESTION PAR UTILISATEUR

//Créer un nouveau projet
// exports.createProject = async (req, res) => {
//     try {
//         const { project_name, project_description } = req.body;
//         const newProject = await Project.create({ project_name, project_description });
//         res.status(201).json(newProject);
//     } catch (error) {
//         res.status(500).json({ message: "Erreur lors de l'ajout du projet" });
//     }
// };

//Récupérer et afficher tous les projets
// exports.getAllProjects = async (req, res) => {
//     try {
//         const projects = await Project.findAll();
//         res.json(projects);
//     } catch (error) {
//         res
//             .status(500)
//             .json({ message: "Erreur lors de la récupération des projets" });
//     }
// };


//Récupérer un projet par son id
// exports.getProjectById = async (req, res) => {
//     try {
//         const projects = await Project.findOne({ where: { projectId: req.params.id } });
//         res.json(projects);
//     } catch (error) {
//         res
//             .status(500)
//             .json({ message: "Erreur lors de la récupération des projets" });
//     }
// };


//Supprimer un projet par id
// exports.deleteProjectById = async (req, res) => {
    //     try {
    //         await Project.destroy({ where: { projectId: req.params.id } });
    //         res.status(201).json({ message: "Projet supprimé" });
    //     } catch (error) {
    //         res
    //             .status(500)
    //             .json({ message: "Erreur lors de la récupération des projets" });
    //     }
    // };