const express = require("express");
const app = express(); const porta = 3000;
//CONFIGURAÇÃO DO HANDLEBARS 
const hand = require("express-handlebars");
app.set('view engine', 'html');
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
//ROTAS 
var route = require('./routes/Route');
//CONFIGURANDO A UTILZAÇÃO DOS DADOS JSON 
// CAMINHO DAS ROTAS 
app.use(express.urlencoded({ extended: true }));
app.use('/', route);

//SERVIDOR 
app.listen(3000, () => {
  console.log('Funcionando o servidor');
});