require('dotenv').config();
const connectToDatabase = require('./config/database');
const express = require('express');
const app = express();

const router = require('./routes/todosRoutes');
app.use('/api', router); // All routes begin with /api

const port = process.env.PORT || 3000;

// Connect to database first, then setup express server
(async function () {
  try {
    await connectToDatabase();

    app.listen(port, () => {
      console.log(`🚀 Server is listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(
      '❌ Failed to start server due to DB connection error:',
      err.message
    );
    process.exit(1);
  }
})();
