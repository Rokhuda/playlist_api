const mongoose = require('mongoose');

//playlist schema
const musicianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: Number,
    songs: Array
});

const Musician = mongoose.model('Musician', musicianSchema);

module.exports = Musician;