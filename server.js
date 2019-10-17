// require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
    //const bodyParser = require('body-parser')
const app = express()


//Body Parser Middleware
//app.use(bodyParser.urlencoded({ extended: false }))


mongoose.connect('mongodb://127.0.0.1:27017/playlist_api', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.use(express.json())

const playlistRouter = require("./routes/playlist")
app.use('/playlist', playlistRouter)

app.listen(3090, console.log('server connectd'))