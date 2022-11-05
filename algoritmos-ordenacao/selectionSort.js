const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let menorValorLivro = livros[menor];

    livros[atual] = menorValorLivro;
    livros[menor] = livroAtual;
}

console.log(livros);