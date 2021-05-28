module.exports = {
  index: function(req, res, next) {
    res.render('contatos/index');
    // res.status(200).send({mensagem: "fale conosco"});
  },
  cadastrar: function(req, res, next) {
    const {nome, email, comentario} = req.body

    res.render('contatos/index');
  }
};
