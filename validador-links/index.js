import fs from 'fs';
import chalk from 'chalk';

function trataErro(error) {
    let message = '';
    switch (error.code) {
        case 'EISDIR':
            message = 'Não há arquivos válidos neste diretório!';
            break;    
        default:
            message = 'Algo de inesperado aconteceu!';
            break;
    }

    throw new Error(chalk.red(`Código: ${error.code}.\n Mensagem: ${message}`));
}

function extraUrls(texto) {
    const matches = [...texto.matchAll(/\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm)];
    const urls = matches.map(match => ({ [match[1]]: match[2] }));  

    return urls.length === 0 ? 'Não há links' : urls;
}

async function pegaArquivo(path) {
    try {
        const encoding = 'utf-8';
        const res = await fs.promises.readFile(path, encoding);
    
        return extraUrls(res);        
    } catch (error) {   
        trataErro(error);
    }
}

export default pegaArquivo;