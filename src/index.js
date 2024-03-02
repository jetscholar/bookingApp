// Load environment vriables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
// Library imports
const express = require('express') 
const mongoose = require('mongoose')
const path = require('path')
const bcrypt = require('bcrypt')

//app variable
const app = express()

//view engine
app.set('view engine', 'ejs')

//set static file path
app.use(express.static('public'))

// Connect to Mongo
mongoose.connect(process.env.SECURE_LOCAL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to the bookingApp DB on Atlas'))

//routes
app.get('/', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

//run the server
const port = 4949
app.listen(port, () => {
    console.log(`Server up on Port: ${port}`)
})