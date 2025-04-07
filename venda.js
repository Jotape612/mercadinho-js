class Venda {
    constructor(id, produtos = []) {
      this.id = id;
      this.produtos = produtos;
      this.data = new Date();
    }
  
    calcularTotal() {
      return this.produtos.reduce((total, item) => {
        return total + (item.produto.preco * item.quantidade);
      }, 0);
    }
  
    adicionarProduto(produto, quantidade) {
      this.produtos.push({ produto, quantidade });
    }
  }
  
  module.exports = Venda;
  