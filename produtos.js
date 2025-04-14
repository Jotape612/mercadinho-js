class Produto {
    constructor(id, nome, preco, quantidade) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    atualizarEstoque(novaQuantidade) {
      this.quantidade = novaQuantidade;
    }
  
    calcularValorTotal() {
      return this.preco * this.quantidade;
    }
  }
  
  module.exports = { Produto }; //Exportar um objeto que contem a classe "Produto"
  
