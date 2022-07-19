require('dotenv').config();
require('./config/database');
const Router = require('./routes/routes');
const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-file-upload');
const passport = require('passport');

const PORT = process.env.PORT || 4000

app.set('port', PORT)

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(passport.initialize());
app.use('/api', Router);


app.get('/', (req, res) => {
    res.send('EL SERVIDOR ESTÁ FUNCIONANDO!')
})
app.listen(PORT, () => {
    console.log('SERVIDOR LISTO EN PUERTO' + app.get('port'))
});