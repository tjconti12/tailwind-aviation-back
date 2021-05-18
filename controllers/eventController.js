const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Root is /Events

// Get All Events
router.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.find({})
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

// Get All Events by group (plane)
router.get('/ByPlane/:group', async (req, res) => {
    try {
        const foundEvents = await Event.find({group: req.params.group})
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

// Create Event
router.post('/', async (req, res) => {
    try {
        const createdEvent = await Event.create(req.body)
        res.status(200).json(createdEvent)
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

// Show an event by id
router.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findById(req.params.id)
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

// Show event by title 
router.get('/ByTitle/:title', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({title: req.params.title})
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(400).json({
            msg: err.message
        })
    }
})

// Update By Id
router.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(updatedEvent)
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

// Update by title
router.put('/ByTitle/:title', async (req, res) => {
    try {
        const updatedEvent = await Event.findOneAndUpdate({title: {$eq: req.params.title}}, req.body, { new: true})
        res.status(200).json(updatedEvent)
    } catch (error) {
        res.status(400).json({
            msg: err.message
        })
    }
})

// Delete by Id
router.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedEvent);
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})

// Delete by title
router.delete('/ByTitle/:title', async (req, res) => {
    try {
        const deletedEvent = await Event.findOneAndDelete({title: {$eq: req.params.title}})
        res.status(200).json(deletedEvent)
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
})


module.exports = router