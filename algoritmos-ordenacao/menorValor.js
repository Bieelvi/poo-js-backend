const livros = require('./listaLivros');

function menorValur(arrayProdutos, posInicial) {
    let maisBarato = posInicial;
    
    for (let atual = posInicial; atual < arrayProdutos.length; atual++) {
    
        if (arrayProdutos[atual].preco < arrayProdutos[maisBarato].preco) {
            maisBarato = atual;
        }        
    }

    return maisBarato;
}

module.exports = menorValur;