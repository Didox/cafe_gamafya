const Contato = require("../models/contatos")

module.exports = {
  index: function(req, res, next) {
    return res.status(200).send({mensagem: "API de Contatos"})
  },
  cadastrar: function(req, res, next) {
    const {nome, email, comentario} = req.body
    let erro = undefined
    let sucesso = undefined

    if(nome === "" || !nome){
      erro = "Nome obrigatório"
    }
    else if(email === "" || !email){
      erro = "Email obrigatório"
    }
    else{
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
    }
    
    if(erro) return res.status(400).send({mensagem: erro})
    else return res.status(200).send({mensagem: sucesso})
  }
};
