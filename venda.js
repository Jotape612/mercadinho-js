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
  
  const db = require('./firebase');
  const { collection, addDoc } = require('firebase/firestore');
  
//Aqui a função é "async" ou seja "NÃO-SINCRONIZADA", a gente usa ela porquê o Firebase demora um pouco para salvar os dados

  async function salvarVendaNoFirebase(venda) {
    try {
      //await, ou então "aguarde", é a confirmação do Firebase antes de continuar
      const docRef = await addDoc(collection(db, 'vendas'), {
        id: venda.id,
        data: venda.data.toISOString(),
        produtos: venda.produtos.map(item => ({
          nome: item.produto.nome,
          preco: item.produto.preco,
          quantidade: item.quantidade
        })),
        total: venda.calcularTotal()
      });
  
      return docRef.id; // Retornar doc referente.id, ou seja, retorna o ID do documento já salvado no Firebase
    } catch (error) {
      console.error('Erro ao salvar venda:', error);
      throw error;
    }
  }
  
  module.exports = { Venda, salvarVendaNoFirebase };
  
  
