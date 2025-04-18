const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// Get Todo
router.get("/todo", getTodos);

// Post(Create) Todo
router.post("/todo", createTodo);

// Put(Edit) Todo
router.put("/todo:id", updateTodo);

// Delete Todo
router.delete("/todo:id", deleteTodo);

module.exports = router;
