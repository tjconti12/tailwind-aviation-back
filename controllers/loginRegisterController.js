const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { hash, auth } = require('./authController');
const SECRET = process.env.SECRET_KEY;
const User = require('../models/User');

// root is /account

// Login Route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = hash(password);
    User.findOne({ username }, (err, foundUser) => {
        if(err) {
            res.status(400).json({ msg: err.message })
        } else {
            if(foundUser && bcrypt.compareSync(hashedPassword, foundUser.password)) {
                const token = jwt.sign({
                    id: foundUser._id,
                    username: foundUser.username
                }, SECRET)
                res.status(200).json({
                    token,
                    username: foundUser.username
                })
            } else {
                res.status(500).json({
                    problem: 'The comparison did not work'
                })
            }
        }
    })
})

// Register Route
router.post('/register', (req, res) => {
    const passwordHash = hash(req.body.password)
    req.body.password = bcrypt.hashSync(passwordHash, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        if(err){
            console.log(err)
            res.status(400).json({
                msg: err.message
            })
        } else {
            const token = jwt.sign({
                id: createdUser._id,
                username: createdUser.username
            }, SECRET)
            res.status(200).json({
                token
            })
        }
    })
})

router.get('/test', (req, res) => {
    res.json({
        "hi": "it worked"
    })
})

module.exports = router