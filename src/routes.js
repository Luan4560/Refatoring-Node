const { Router } = require("express");

const routes = new Router();

const projects = [];

routes.get("/projects", (req, res) => {
  return res.json(projects);
});

routes.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const newProject = {
    id,
    title,
    tasks: []
  };

  projects.push(newProject);
  return res.json(projects);
});

routes.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const newTitle = projects.find(index => index.id == id);

  newTitle.title = title;

  return res.json(newTitle);
});

module.exports = routes;
