module.exports = {
  index: function(req, res, next) {
    res.status(200).send({mensagem: "API do Gamafya"})
  },
  loja: function(req, res, next) {
    res.status(200).send({mensagem: "Em breve"})
  },
  produtos: function(req, res, next) {
    res.status(200).send([
      {id: 1, nome: "caneta bicolor"},
      {id: 2, nome: "caneta azul"},
      {id: 3, nome: "caneta vermelha"},
      {id: 4, nome: "caneta verde"},
    ])
  },
  sobre: function(req, res, next) {
    res.status(200).send({mensagem: "API do desenvolvida com alunos da academuia Afya"})
  }
};
