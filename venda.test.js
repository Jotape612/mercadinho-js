const Produto = require('../src/produtos');
const Venda = require('../src/venda');

describe('Venda', () => {
  test('Calcular o total de uma venda generica', () => {
    const arroz = new Produto(1, 'Arroz', 20.00, 50);
    const feijao = new Produto(2, 'Feijão', 10.00, 30);
    const venda = new Venda(101);

    venda.adicionarProduto(arroz, 2); // 40 já que é 2x20
    venda.adicionarProduto(feijao, 3); // 30 já que é 3x10

    expect(venda.calcularTotal()).toBe(70.00); // 40 + 30 = 70, obvio né?
  });

  test('Venda registra a data', () => {
    const produto = new Produto(3, 'Macarrão', 5.00, 20);
    const venda = new Venda(102);
    venda.adicionarProduto(produto, 1);

    expect(venda.data).toBeInstanceOf(Date); 
  });

  test('Adiciona produto com a quantidade certa', () => {
    const cafe = new Produto(4, 'Café', 15.00, 10);
    const venda = new Venda(103);
    venda.adicionarProduto(cafe, 4);

    expect(venda.produtos[0].quantidade).toBe(4); 
  });
});


// Aqui vai dar errado
/* 
test('Erro proposital: total incorreto', () => {
  const arroz = new Produto(5, 'Arroz', 10.00, 50);
  const venda = new Venda(104);
  venda.adicionarProduto(arroz, 3); 

  expect(venda.calcularTotal()).toBe(25.00); // Aqui  deveria ser 30
});

test('Erro proposital: quantidade errada no produto', () => {
  const acucar = new Produto(6, 'Açúcar', 5.00, 40);
  const venda = new Venda(105);
  venda.adicionarProduto(acucar, 2); 

  expect(venda.produtos[0].quantidade).toBe(3); // Aqui tá errado era pra ser 2, mas testei 3
});
*/