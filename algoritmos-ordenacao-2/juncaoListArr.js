const { edFolha, edGalho } = require('./editorasArr');

function juncaoLista(lista1, lista2) {

    let posicaoListaAtual1 = 0;
    let posicaoListaAtual2 = 0;
    let atual = 0;
    let listaFinal = [];

    while (posicaoListaAtual1 < lista1.length && posicaoListaAtual2 < lista2.length) {
        
        let produtoListaAtual1 = lista1[posicaoListaAtual1];
        let produtoListaAtual2 = lista2[posicaoListaAtual2];

        if (produtoListaAtual1.preco < produtoListaAtual2.preco) {

            listaFinal[atual] = produtoListaAtual1;
            posicaoListaAtual1++;
        } else {

            listaFinal[atual] = produtoListaAtual2;
            posicaoListaAtual2++;
        }

        atual++;
    } 

    while (posicaoListaAtual1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoListaAtual1];
        posicaoListaAtual1++;
    }

    while (posicaoListaAtual2 < lista2.length) {
        listaFina2[atual] = lista2[posicaoListaAtual2];
        posicaoListaAtual2++;
    }
    
    return listaFinal;
}

console.log(juncaoLista(edFolha, edGalho));