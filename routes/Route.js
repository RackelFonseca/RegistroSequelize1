//aula 3
var express = require('express');
var router = express.Router();

var estados = ['São Paulo', 'Rio de Janeiro', 'Rio Grande do Sul '];

router.get('/', function(req, res) {
  res.send("Seja Bem vindo ao nosso Sistema");
});

router.get('/', function(req, res) {
  res.send("inserir registro");
});


router.get('/estados/:id', (req, res) => {
  let id = req.params.id;
  return res.json([estados[id]])
});

router.post('/estados/cadastrar', (req, res) => {
  let nome = req.body.nome;
  estados[(estados.length)] = nome;
  return res.json([estados[(estados.length - 1)]]);
});

// ROTA principal estado 
router.get("/estados", function(req, res) {
  res.render("form");
  //res.send("Seja bem vindo a rota de estados"); 
});

//PARÂMETROS DE URL 
router.get('/par', function(req, res) {
  let nome = req.query['nome'];
  if (nome) {
    res.send('<h1>' + nome + '</h1>');
  }
  else {
    res.send('Não foi localizado nenhum valor no navegador.');
  }
});

module.exports = router;
