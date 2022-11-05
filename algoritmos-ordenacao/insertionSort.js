const livros = require('./listaLivros');

for (let i = 0; i < livros.length; i++) {
    
    let analisando = i;
    while (analisando > 0 && livros[analisando].preco < livros[analisando - 1].preco) {

        let livroAtual = livros[analisando];
        let livroAnterior = livros[analisando - 1];

        livros[analisando] = livroAnterior;
        livros[analisando - 1] = livroAtual;

        analisando--;
    }
    
}

console.log(livros);