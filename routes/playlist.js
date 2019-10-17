const express = require("express");
//const playlist = require("../playlist");
const router = express.Router();
const Musician = require('./models/playlist')

// async function createPlaylist(req, res) {
//     const musician = new Musician({

//     })
//     const result = await musician.save()
//     console.log(result)
// }

// async function addMusicians() {
//     const result = await Musician.find()
//     console.log(result)
// }

// async function sortMusicians() {
//     const result = await Musician.find()
//         .sort('name')
//     console.log(result)
// }

// async function updatePlaylist(id) {
//     const musician = await Musician.findById(id)
//     if (!musician) return;
//     musician.name = ""
//     musician.songs = []
//     const result = await musician.save()
//     console.log(result)
// }



//add
//post send user generated data to the data base
router.post('/', async(req, res) => {
    const musician = new Musician({
        name: req.body.name
    })
    try {
        const newMusician = await musician.save()
            .then(() => res.redirect('/'));
        //res.status(201).json(newArtist)

    } catch (error) {
        res.status(400).json({ message: err.message })
    }

});

//update, edit
// router.put('/:id', async(req, res) => {
//     const id = req.params.musicianId
//     const newArtist = req.body
//     musician.findOneAndUpdate({ _id: id }, { $set: newArtist })
// })


router.patch('/:id', getMusician, async(req, res) => {
    if (req.body.name != null) {
        res.musician.name = req.body.name

    }
    try {
        const updatedMusician = await res.musician.save()
        res.json(updatedMusician)
    } catch {
        res.status(400).json({ message: err.message })
    }
})

//delete
router.delete('/:id', getMusician, async(req, res) => {
    if (req.body.name != null) {
        res.musician.name = req.body.name
    }
    try {
        await res.musician.remove()
        res.json({ message: 'Deleted This musician' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



// router.get('/', async(req, res) => {
//     try {
//         const musician = await Musician.findById(id)
//             //res.json(musician)
//         res.send(musician)
//     } catch (error) {
//         res.status(500).json({ message: err.message })
//     }

// })

// //sort
// router.get('/', (req, res) => {
//     const sortMusicians = musician.sort('name')
//     res.send(sortMusicians)
// })