const { livros } = require('./livros');

function mergeSort(itens) {

    console.log(itens);
    console.log(itens.length);
    if (itens.length > 1) {
        const meio = Math.floor(itens.length / 2);
        const parte1 = mergeSort(itens.slice(0, meio));
        const parte2 = mergeSort(itens.slice(meio, itens.length));

        itens = ordena(parte1, parte2);
    }

    return itens;
}

function ordena(parte1, parte2) {

    let posicaoParte1 = 0;
    let posicaoParte2 = 0;
    const resultado = [];


    while (posicaoParte1 < parte1.length && posicaoParte2 < parte1.length) {
        
        let produtoParte1 = parte1[posicaoParte1];
        let produtoParte2 = parte2[posicaoParte2];

        if (produtoParte1.preco < produtoParte2.preco) {
            resultado.push(produtoParte1);
            posicaoParte1++;
        } else {
            resultado.push(produtoParte2);
            posicaoParte2++;
        }
    }

    return resultado.concat(
        posicaoParte1 < parte1.length 
        ? parte1.slice(posicaoParte1)
        : parte2.slice(posicaoParte2)
    );
}

console.log(mergeSort(livros));