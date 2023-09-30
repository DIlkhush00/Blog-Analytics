// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Routes goes here...

// Setup Server
const PORT = 8081;
app.listen(PORT, listening);
function listening(){
    console.log(`Listening on port: ${PORT}`);
}