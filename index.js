const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser("asdfkjaçdl"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
app.use(flash());

app.get("/", (req, res) => {
  let emailError = req.flash("emailError");
  let nomeError = req.flash("nomeError");
  let pontosError = req.flash("pontosError");
  emailError =
    emailError == undefined || emailError.length == 0 ? undefined : emailError;
  res.render("index", { emailError, nomeError, pontosError });
});

app.post("/form", (req, res) => {
  const { email, nome, pontos } = req.body;
  var emailError;
  var nomeError;
  var pontosError;
  if (email == undefined || email == "") {
    emailError = "O email não pode ser vazio";
  }
  if (nome == undefined || nome == "") {
    nomeError = "O nome não pode ser vazio";
  }
  if (pontos == undefined || pontos < 20) {
    pontosError = "Você não pode ter menos de 20 pontos";
  }
  if (nome.length < 4) {
    nomeError = "O nome é muito pequeno";
  }

  if (
    emailError != undefined ||
    nomeError != undefined ||
    pontosError != undefined
  ) {
    req.flash("emailError", emailError);
    req.flash("nomeError", nomeError);
    req.flash("pontosError", pontosError);
    res.redirect("/");
  } else {
    res.send("succes, show de bola");
  }
});

app.listen("3333", (req, res) => {
  console.log("Server running at http://localhost:3333");
});
