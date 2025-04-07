const Produto = require('../src/produtos');

describe('Produto', () => {
  test('Cria um novo produto', () => {
    const produto = new Produto(1, 'Arrosto', 10.00, 5);
    expect(produto.id).toBe(1);
    expect(produto.nome).toBe('Arrosto');
    expect(produto.preco).toBe(10.00);
    expect(produto.quantidade).toBe(5);
  });

  test('Volta o nome', () => {
    const produto = new Produto(2, 'Pé de Feijão', 8.00, 10);
    expect(produto.nome).toBe('Pé de Feijão');
  });

  test('Testa preço maior que zero', () => {
    const produto = new Produto(3, 'Macarraonada', 5.00, 20);
    expect(produto.preco).toBeGreaterThan(0);
  });

  test('Produto = 0, fora de estoque', () => {
    const produto = new Produto(4, 'Farinhaempó', 4.50, 0);
    expect(produto.quantidade).toBe(0);
  });

  test('ID sempre ÚNICO', () => {
    const produto1 = new Produto(5, 'Óleo', 7.00, 15);
    const produto2 = new Produto(6, 'Açúcar', 3.50, 25);
    expect(produto1.id).not.toBe(produto2.id);
  });

  test('Nome do produto deve ser uma string, afinal, é um nome', () => {
    const produto = new Produto(7, 'Sal', 2.00, 30);
    expect(typeof produto.nome).toBe('string');
  });
});

//Erros propositais

test('Erro proposital: nome diferente do esperado', () => {
    const produto = new Produto(8, 'Refrigerante', 6.00, 10);
    expect(produto.nome).toBe('Coca-Cola'); // errado de propósito
  });

  test('Erro proposital: preço igual a zero', () => {
    const produto = new Produto(9, 'Biscoito', 0.00, 50);
    expect(produto.preco).toBeGreaterThan(0); // falha porque o preço é zero
  });

  test('Erro proposital: quantidade negativa', () => {
    const produto = new Produto(10, 'Sabão', 2.50, -5);
    expect(produto.quantidade).toBeGreaterThanOrEqual(0); // falha porque está negativo
  });
  
