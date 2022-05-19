const express = require ('express')
const app = express()
const session = require("express-session")
const flash = require('express-flash')
var bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  app.use(flash())

  app.get('/', (req, res) => {
     res.render("index")
    })


app.listen("3333", (req, res) =>{
    console.log("Server running at http://localhost:3333");
})