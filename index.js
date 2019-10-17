const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
    .connect(
        'mongodb://127.0.0.1:27017/playlist_api', { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

//playlist schema import    
const Musician = require('./models/playlist')

//api routes
app.use("/api/playlist/", require("./routes/playlist"));

//port to connect to on a node server
const PORT = 3090
app.listen(PORT, console.log(`Server running on port: ${PORT}`));