# Validação de formulários

API para teste de validação de fómulários no front end e back end

O módulo Connect-flash para Node.js permite que os desenvolvedores enviem uma mensagem sempre que um usuário estiver redirecionando para uma página da web especificada. Por exemplo, sempre que um usuário logou com sucesso em sua conta, uma mensagem pisca
Para isso é necessário o uso das bibliotecas:
* express-flash 
* express-session
* cookie-parser


## Instalações das bibliotecas 

```
npm install express-flash --save   

```

```
npm install express-session --save   

```
```
npm install body-parser --save   

```
```
npm install cookie-parser --save   

```

#### configuração  do express-flash



```bash
  var flash = require('express-flash'),
      express = require('express'),
      app = express();
 
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());

```

#### configuração  do cookie parser

```
app.use(cookieParser("<password>"));

```
## Dependências

```
"dependencies": {
    "body-parser": "^1.20.0",
    "cookie-parser": "^1.4.6",
    "ejs": "^3.1.8",
    "express": "^4.18.1",
    "express-flash": "^0.0.2",
    "express-session": "^1.17.3"
  }

  ```

    

## Aluno e Autor

- [Henrique Vieira](https://github.com/henriquecvieira/Guiapress)
- [Victor Lima](https://github.com/techtuxbr)

## Referência

 - [Udemy Formação Node Js](https://www.udemy.com/course/formacao-nodejs)
 

## 🚀 Sobre mim
Desenvolvedor de sistemas, com foco em inovação e visando perspectivas diferentes na criação de produto, sempre propondo padrões modernos de arquitetura de softwares e metodologias ágeis (Scrum), procuro facilitar e acelerar os objetivos de negócio.
Experiência na construção e manutenção de aplicações:
- API’s desenvolvidas em REST integradas ao Gateway WSO2
- Utilização de bancos de dados Relacional (MySQL e MongoDB).
- Desenvolvimento de aplicações utilizando tecnologia adequada de acordo com a necessidade de cada contexto:
- NODE.JS, SCRUM, SQL, MongoDB e JavaScript.

<a href="https://www.linkedin.com/in/henriquecarvalhovieira/">
    
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87788394?s=400&u=7f36505574f0bc15df5b88cc887a51f8e6406310&v=4" width="100px;" alt=""/>
  <br />
  <sub><b>Henrique Vieira</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>
 
 
 Feito com ❤️ por Henrique Vieira 
 
 👋🏽 Entre em contato!
 
 [![Linkedin Badge](https://img.shields.io/badge/-Henrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henriquecarvalhovieira/)](https://www.linkedin.com/in/henriquecarvalhovieira/) 
 [![Live mail Badge](https://img.shields.io/badge/-hnr01@live.com-5186e1?style=flat-square&logo=Outlook&logoColor=white&link=mailto:hnr01@live.com)](mailto:hnr01@live.com)
