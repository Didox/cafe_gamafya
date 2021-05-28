module.exports = class Contato{
  constructor(){
    this.id = 0
    this.nome = ""
    this.email = ""
    this.comentario = ""
  }

  salvar(){
    if(this.id === 0){
      // inserir no banco
    }
    else{
      // update no banco
    }
  }
}