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

app.post("/form", (req, res) => {
    const {email, nome, pontos} = req.body
     let emailError
     let nomeError
     let pontosError

    if(email == undefined || email == ""){
        emailError = "O email não pode ser vazio" 
    }
    if(nome == undefined || nome == "" ){
        nomeError = "O nome não pode ser vazio"
        
    }
    if(pontos == undefined || pontos  < 20){
        pontosError = "Você não pode ter menos de 20 pontos"
    }
    if(nome.length < 4){
        nomeError = "O nome é muito pequeno"
        
    }
    

    if(emailError != undefined || nomeError != undefined || pontosError != undefined){
        res.redirect("/")
    }else{
        res.send("succes, show de bola")
    }

    
})


app.listen("3333", (req, res) =>{
    console.log("Server running at http://localhost:3333");
})