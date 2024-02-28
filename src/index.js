// Library imports
const express = require('express') 
const path = require('path')
const bcrypt = require('bcrypt')

//app variable
const app = express()

//view engine
app.set('view engine', 'ejs')

//set static file path
app.use(express.static('public'))

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