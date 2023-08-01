// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

// Import routes
const comments = require('./routes/comments');

// Create app
const app = express();

// Use modules
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/api/comments', comments);

// Start server
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});