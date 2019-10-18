// require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const Musician = require('./models/musician')
app.use(express.static('./views'));

app.use(bodyParser.urlencoded({ extended: false }))

app.get(express.static(path.join(__dirname, __filename)))

mongoose.connect('mongodb://165.49.66.240:27017/playlistdb', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.use(express.json())

const playlistRouter = require("./routes/playlist")
app.use('/playlist', playlistRouter)

const port = 3091
app.listen(port, console.log(`server connected ${port}`))