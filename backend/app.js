// Import required libraries and modules
import express from "express";     // Import the Express web framework
import dotenv from "dotenv";       // Import the dotenv library for environment variables
import cors from "cors";           // Import the cors library for Cross-Origin Resource Sharing
import dbConnect from "./config/dbConnect.js"; // Import a custom database connection module
import api from "./routes/api.js";   // Import the API routes

const app = express();            // Create an Express application
dotenv.config();                  // Load environment variables from a .env file (if present)
dbConnect();                      // Connect to the database

app.use(cors());                  // Enable Cross-Origin Resource Sharing for API requests
app.use(express.json());           // Enable JSON request parsing

// Define a route for the root URL ("/") that returns a simple JSON message
app.get("/", (req, res) => {
  res.json({ message: "Plotline" });
});

// Mount the API routes under the "/api" path
app.use("/api", api);

// Start the Express server on port 8080
app.listen(8080, function () {
  console.log("Listening on port 8080");
});
