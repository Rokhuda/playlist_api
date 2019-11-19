const express = require("express");
const router = express.Router();
const Musician = require('../models/musician.js');
const MongoClient = require("mongodb");
const url = 'mongodb://127.0.0.1:27017/playlistdb'


// List all musicians
router.get('/all', async(req, res) => {
    try {
        const musician = await Musician.find();
        res.json(musician)
        res.redirect("/")
    } catch (error) {

    }
})


// Adding a  new musician
router.post('/add', async(req, res) => {
    const musician = new Musician({
        name: req.body.name
    })
    try {
        const newMusician = await musician.save()
        res.redirect('/')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

});

// Deleting an existing musician 
router.post('/delete', async(req, res) => {
    const id = req.body;
    const objectId = require("mongodb").ObjectID
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, (err, db) => {
        if (err) throw err;
        const dbo = db.db("playlistdb");
        dbo.collection("musicians").deleteOne({
            "_id": objectId(id.id)
        }, (err, result) => {
            if (err) throw err;
            db.close();
            res.redirect('/')
        });
    });
})

// Editing an existing musician
router.post('/edit', async(req, res) => {
    const id = req.body;
    const objectId = require("mongodb").ObjectID

    MongoClient.connect(url, {
        useNewUrlParser: true
    }, (err, db) => {
        if (err) throw err;
        const dbo = db.db("playlistdb");
        dbo.collection('musicians').findAndModify({ "_id": objectId(id.id) }, [
                ['_id', 'asc']
            ], { $set: { name: req.body.name } },
            (err, object) => {
                if (err) throw err;
                db.close();
                res.redirect('/')
            })
    })
})

module.exports = router