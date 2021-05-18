require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET = process.env.SECRET_KEY;


const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.body)
    next()
})
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.once('connected', () => console.log('Connected To Mongo'));

app.use('/account', require('./controllers/loginRegisterController'))
app.use('/Events', require('./controllers/eventController'))




app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));