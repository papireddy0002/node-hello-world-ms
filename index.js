const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('I  am Healthy');
});

// Main service endpoint
app.get('/v1', (req, res) => {
  res.send('Hello, World from Microservice is Hello...! - V1');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Microservice is running on port ${PORT}`);
});