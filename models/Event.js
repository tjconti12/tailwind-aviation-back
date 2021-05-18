const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    // Group is the plane
    // The Scheduler calls it group
    group: {type: Number, required: true},
    title: {type: String, required: true},
    start: {type: Number, required: true},
    end: {type: Number, required: true}
})

module.exports = model('Event', eventSchema);