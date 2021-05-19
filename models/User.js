const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
})

module.exports = model('User', userSchema);