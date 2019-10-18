const mongoose = require('mongoose');

const musicianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Musician', musicianSchema);