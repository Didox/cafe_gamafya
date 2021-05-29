const Contato = require("../models/contatos")

module.exports = {
  index: function(req, res, next) {
    res.render('contatos/index', {erro: undefined, sucesso: undefined});
    // res.status(200).send({mensagem: "fale conosco"});
  },
  cadastrar: function(req, res, next) {
    const {nome, email, comentario} = req.body
    let erro = undefined
    let sucesso = undefined

    try{
      new Contato({
        nome: nome,
        email: email,
        comentario: comentario
      }).salvar();

      sucesso = "Contato cadastrado com sucesso"
    }
    catch(e){
      erro = JSON.stringify(e);
    }
    
    res.render('contatos/index', {erro: erro, sucesso: sucesso});
  }
};
