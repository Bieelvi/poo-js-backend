import trataError from './erros.js';
import fs from 'fs';

function extraLinkString(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const matches = [];
    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        matches.push({ [temp[1]]: temp[2] });
    }

    return matches.length === 0 ? 'Não há links' : matches;
}

async function pegaArquivo(path) {
    try {
        const encoding = 'UTF-8';
        const texto = await fs.promises.readFile(path, encoding);
        
        return extraLinkString(texto);      
    } catch (error) {
        trataError(error.code, error.message);
    }
}

export default pegaArquivo;