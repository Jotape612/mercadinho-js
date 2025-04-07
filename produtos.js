class Produto{
    constructor (id, nome, preco, quantidade){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    //Não temos banco de dados então o atualizarEstoque não vai funcionar como deveria
    atualizarEstoque(novaQuantidade){
        this.quantidade = novaQuantidade;
    }

    calcularValorTotal(){
        return this.preco * this.quantidade;
    }
}

module.exports = Produto;