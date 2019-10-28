const express = require("express");
const router = express.Router();
const Musician = require('../models/musician.js')


//Adding a  new musician
router.post('/add', async(req, res) => {
    const musician = new Musician({
        name: req.body.name
    })
    console.log(musician)
    try {
        const newMusician = await musician.save()
        //res.status(201).json(newMusician)
        res.redirect('/')
    } catch (error) {
        res.status(400).json({ message: error.message })   
    }

});

// Editing an existing musician
router.patch('/edit', getMusician, async(req, res) => {
    if (req.body.name != null) {
        res.musician.name = req.body.name

    }
    try {
        const updatedMusician = await res.musician.save()
       //
        res.status(201).json(updatedMusician)
        res.redirect('/')
    } catch (err){
        res.status(400).json({ message: err.message })
    }
})

// Deleting an existing musician 
router.delete('/delete:id', getMusician, async(req, res) => {

    if (req.body.name != null) {
        res.musician.name = req.body.id
    }
    try {
        await res.musician.remove({"_id": ObjectId(req.body.id)}, 1)
        res.json({ message: 'Deleted This musician' })
        res.redirect('/')
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// List all musicians in the playlist
router.get('/all', async(req, res) => {
    try {
        const musician = await Musician.find();
        res.json(musician)
        res.redirect('/')
    } catch (error) {    
        res.status(500).json({ message: err.message })
    }

})

// Sorting musicains list alphabetically
router.get('/sort', async(req, res) => {
    try {
        const musician = await newMusician.find().sort('name')
        res.json(musician)
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ message: err.message })
    }

})

// Middleware function for gettig musician object by ID
async function getMusician(req, res, next) {
    try {
        musician = await Musician.findOneAndDelete(req.body.id)
        if (musician == null) {
            return res.status(404).json({ message: 'Cant find musician' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.musician = musician
    next()
}

module.exports = router