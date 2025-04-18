require("dotenv").config();
const connectToDatabase = require("./config/database");
const express = require("express");

const app = express(); // Instance of express application
const port = process.env.PORT || 3000; // Port server will be running on
const router = require("./routes/todosRoutes");

// Middleware
app.use(cors()); // Allows server to control which domains can access resources
app.use(express.json()); // Parses incoming requests with JSON payloads

// Routes
app.use("/api", router); // All routes begin with /api

// Connect to database first, then setup express server
(async function () {
  try {
    await connectToDatabase();

    app.listen(port, () => {
      console.log(`🚀 Server is listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error(
      "❌ Failed to start server due to DB connection error:",
      err.message
    );
    process.exit(1);
  }
})();
