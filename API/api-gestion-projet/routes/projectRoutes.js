const express = require("express");
const projectController = require("../controllers/projectController");

const router = express.Router();

router.get("/", projectController.getAllProjects);
router.post("/create", projectController.createProject);
router.put("/update/:id", projectController.updateProjectById);
router.delete("/delete/:id", projectController.deleteProjectById);

module.exports = router;