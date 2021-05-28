const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/home_controller")

router.get('/', HomeController.index);
router.get('/loja', HomeController.loja);
router.get('/produtos', HomeController.produtos);
router.get('/sobre', HomeController.sobre);
router.get('/fale-conosco', HomeController.faleConosco);

module.exports = router;
