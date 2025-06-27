const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  const tasks = Task.findAll();
  res.json(Task);
});

// GET a single task by id
router.get("/:id", (req, res) => {
  try {
    const id = Number(req.params.id) //by default it will always be a string and we want it to be a number
    const task = Task.findByPk(id); // This probably should use findOne or findByPk
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


// router.get("/:id", async (req, res) => {
//   try {
//     const task = await Task.findAll(); // This probably should use findOne or findByPk
//     res.json(task);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });

//I have to remember that the functon above will be running asynchronously(on it's own) as long as the request is approved
//req is the request
//res is the responce
//

// Patch a task by id
router.patch("/:id"), (req.params.id)
try
{
  const id = Number(req.params.id)
  const Task = Task.findByPk(this.report.params.id)
}
catch(error)
{
  res.status(500).json({message: "Server Error", error: error.message})
}


//---------------------------------------------------------------------------------------------------------------------

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
