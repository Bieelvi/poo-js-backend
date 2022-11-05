import fetch from "node-fetch";

function trataErro(erro) {
    if (erro.code === 'ENOTFOUND') {
        return 'link não encontrado';
    } else {
        return 'ocorreu algum erro';
    }
}

function geraArrayUrls(urls) {
    return urls.map(url => Object.values(url).join());
}

async function montaObjeto(urls, status) {
    return await urls.map((url, index) => {
        return { ...url, status: status[index] }
    });
}

async function chegaStatus(urls) {
    return await Promise.all(urls.map(async url => {
        try {
            const res = await fetch(url);
            return res.status;
        } catch (error) {
            return trataErro(error);
        }
        
    }));
}

async function validaUrl(urls) {
    const arrayUrls = geraArrayUrls(urls);
    const resultado = await chegaStatus(arrayUrls);
    
    return montaObjeto(urls, resultado);
}

export default validaUrl;