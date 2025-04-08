const express = require('express');
const app = express();

const router = require('./routes/todosRoutes');
app.use('/api', router); // All routes begin with /api

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});
