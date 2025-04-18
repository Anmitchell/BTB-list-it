const Todo = require("../models/todoModel");

// Get all todos

exports.getTodos = async function (_, res) {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create/Add a todo
exports.createTodo = async function (req, res) {
  const { title } = req.body; // Retrieve value in title of request body
  const newTodo = new Todo({ title }); // Add todo to

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// Update a todo
exports.updateTodo = async function (req, res) {
  try {
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// Delete a todo
exports.deleteTodo = async function (req, res) {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
