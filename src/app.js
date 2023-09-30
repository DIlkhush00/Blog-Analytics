const dotenv = require('dotenv')
dotenv.config()

// Require Express to run server and routes
const express = require('express');

// Require router
const router = require('./routes/blogRoutes');

// Start up an instance of app
const app = express();

// Routing setup
app.use('/api', router);


// Setup Server
const PORT =  process.env.PORT || 3000;

app.listen(PORT, listening);

function listening(){
    console.log(`Listening on port: ${PORT}`);
}