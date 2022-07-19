require('dotenv').config()
require('./config/database')
var cors = require('cors')
//const passport = require('passport')
const express = require('express')
const Router = require('./routes/routes')
const app = express()
const PORT = process.env.PORT || 4000

app.set('port',PORT)
//middlewares
app.use(cors())
app.use(express.json())
//app.use(passport.initialize())
app.use('/api', Router)

app.get('/', (req, res) => {
	res.send('EL SERVIDOR ESTÁ FUNCIONANDO!')
})


app.listen(PORT, () => {
    console.log('Server is running on: '+app.get('port'))
})