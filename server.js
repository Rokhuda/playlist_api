const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get(express.static(path.join(__dirname, __filename)))
app.use(express.static('./views'))

mongoose.connect('mongodb://127.0.0.1:27017/playlistdb', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const playlistRouter = require("./routes/playlist")
app.use('/playlist', playlistRouter)


const port = 3090
app.listen(port, () => console.log(`server connected ${port}`))