const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  // Replace this with your code!
  res.status(501).send("Not implemented");
});

// GET a single task by id

// Patch a task by id

// Delete a task by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    Task.delete(id)
    res.status(204).send();
  } catch {
    res.status(404).json({ message: 'Task missing' });
  }
});

// Create a new task
router.post("/", (req, res) => {
  const { title, description, completed, userId } = req.body;
  const newTask = Task.create({ title, description, completed, userId });
  res.status(201).send(newTask);
});

module.exports = router;
