import trataError from './erros.js';
import fetch from "node-fetch";

function geraArrayUrls(urls) {
    return urls.map(url => Object.values(url).join());
}

async function montaObjeto(urls, status) {
    return await urls.map((url, index) => {
        return { ...url, status: status[index] }
    });
}

async function chegaStatus(urls) {
    try {
        return await Promise.all(urls.map(async url => {
            const res = await fetch(url);
            return res.status;
        }));
    } catch (error) {
        trataError(error.code, error.message);
    }
}

async function validaUrl(urls) {
    const arrayUrls = geraArrayUrls(urls);
    const resultado = await chegaStatus(arrayUrls);
    
    return montaObjeto(urls, resultado);
}

export default validaUrl;