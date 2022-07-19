require('dotenv').config();
require('./config/database');
const Router = require('./routes/routes');
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');

const PORT = process.env.PORT || 4000

app.set('port', PORT)
//middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use('/use', Router);


app.get('/', (req, res) => {
    res.send('EL SERVIDOR ESTÁ FUNCIONANDO!')
})
app.listen(PORT, () => {
    console.log('SERVIDOR LISTO EN PUERTO' + app.get('port'))
});