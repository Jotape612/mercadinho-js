const Produto = require('./produtos');
const Venda = require('./venda');


const arroz = new Produto(1, 'Arroz 5kg', 25.90, 10);
const feijao = new Produto(2, 'Feijão 1kg', 8.50, 20);

const venda = new Venda(1);
venda.adicionarProduto(arroz, 2); 
venda.adicionarProduto(feijao, 1);

console.log('Resumo da Venda:');
console.log(`ID da venda: ${venda.id}`);
console.log(`Data: ${venda.data.toLocaleString()}`);
console.log('Produtos:');

venda.produtos.forEach(item => {
  console.log(`${item.quantidade}x ${item.produto.nome} - R$${item.produto.preco.toFixed(2)} cada`);
});
console.log(`Total: R$${venda.calcularTotal().toFixed(2)}`);
