const { Produto } = require('../src/produtos');
const { Venda, salvarVendaNoFirebase } = require('../src/venda');

//Por que um teste de integração?
//Bem, ele meio que faz vários testes unitarios dentro do código de uma só vez, assim fazendo um processo só.
//A interação principal é entre o registro das vendas e o salvametnto no Firestore 
describe('Teste de Integração FB', () => {
  test('Criar uma venda e salvar no Foirestore', async () => {
    const produto = new Produto(1, 'Arroz Integral', 18.00, 20);
    const venda = new Venda(999); // ID bem foda-se para o teste KKSKSKS

    venda.adicionarProduto(produto, 2);

    const docId = await salvarVendaNoFirebase(venda);

    //aqui é a verificação, "ele" espera que o valor que o FB nos devolve é uma string (docID), para que a ID da venda seja
    //gerada corretamente
    expect(typeof docId).toBe('string');
    expect(docId.length).toBeGreaterThan(0);
  });
});

describe('Teste de Integração FB', () => {
    test('Criar uma venda e salvar no Foirestore', async () => {
      const produto = new Produto(1, 'Arroz Integral', 18.00, 20);
      const venda = new Venda(69); 
  
      venda.adicionarProduto(produto, 3); 
  
      const docId = await salvarVendaNoFirebase(venda);
  
    
      expect(typeof docId).toBe('string');
      expect(docId.length).toBeGreaterThan(0);
    });
  });

  //Aqui embaixo tem um teste que vai falhar propositalmente


  describe('Teste de Integração FB', () => {
    test('Criar uma venda e salvar no Foirestore', async () => {
      const produto = new Produto(2, 'Feijão Preto', 10.00, 15);
      const venda = new Venda(200); // ID genérico para o teste
  
      venda.adicionarProduto(produto, 5); // Adicionando 5 unidades de Feijão Preto
  
      const docId = await salvarVendaNoFirebase(venda);
  
      expect(docId).toBeNull(); // Isso vai falhar porque docId nunca será null, já que não pode existir
      //um id = 0. Como eu posso fazer uma venda que nunca vendeu?
    });
  });
  
  

//para testar é só usar "npx jest tests/vendaFirebase.test.js". Basicamente é só um comando para
//executar Jest.
