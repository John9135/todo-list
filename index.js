const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = (process.env.PORT || 3000)
app.set('port', port)
app.set('view engine', 'ejs')
app.use(express.static("style"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('server is running on port' + port)
})