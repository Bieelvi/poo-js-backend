import pegaArquivo from "./pega-arquivo.js";
import validaUrl from "./validacao-url.js";

async function progressaCaminho(command) {
    const resultado = await pegaArquivo(command[2]);
    if (command[3] === 'validar') {
        console.log('Lista de links válidados', await validaUrl(resultado));
    } else {
        console.log('Lista de links não válidados', resultado);
    }
}

progressaCaminho(process.argv);