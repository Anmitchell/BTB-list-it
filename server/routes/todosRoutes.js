const express = require('express');

const router = express.Router();

// Get Todo
router.get('/todos', (req, res) => {
  res.status(200).json({ message: 'Get Request To /api/todos' });
});

// Post(Create) Todo
router.post('/todos', (req, res) => {
  res.status(201).json({ message: 'Post Request To /api/todos' });
});

// Delete Todo
router.delete('/todos/:id', (req, res) => {
  res.status(200).json({ message: 'Delete Request To /api/todos' });
});

// Put(Edit) Todo
router.put('todos', (req, res) => {
  res.status(200).json({ message: 'Put Request To /api/todos' });
});

module.exports = router;
