const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    // Group is the plane
    // The Scheduler calls it group
    id: {type: Number, required: true, unique: true},
    group: {type: Number, required: true},
    title: {type: String, required: true},
    start_time: {type: Number, required: true},
    end_time: {type: Number, required: true}
})

module.exports = model('Event', eventSchema);