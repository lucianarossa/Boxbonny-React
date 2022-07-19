require('dotenv').config();
require('./config/database');
const Router = require('./routes/routes');
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');

const PORT = 4000

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use('/use', Router);


app.listen(PORT, () => {
    console.log('SERVIDOR LISTO EN PUERTO' + PORT)
});