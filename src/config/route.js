const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/home_controller")
const ContatosController = require("../controllers/contatos_controller")

router.get('/', HomeController.index);
router.get('/loja', HomeController.loja);
router.get('/produtos', HomeController.produtos);
router.get('/sobre', HomeController.sobre);
router.get('/fale-conosco', ContatosController.index);
router.post('/fale-conosco/cadastrar', ContatosController.cadastrar);

module.exports = router;
