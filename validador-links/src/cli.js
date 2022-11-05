import pegaArquivo from "../index.js";
import fs from 'fs';
import validaUrl from "../validacao-url.js";

function imprimeListaUrls(urls) {
    console.log(urls);
}

async function progressaCaminho(arg) {
    const path = arg[3];
    const valida = arg[2] === '--valida';

    try {
        fs.lstatSync(path);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log('Arquivo ou pasta não existente');
        }
        return;
    }

    if (fs.lstatSync(path).isFile()) {
        const urls = await pegaArquivo(path);

        if (valida) {
            imprimeListaUrls({ file: path, tipo: 'Lista de links válidados', urls: await validaUrl(urls) });
        } else {
            imprimeListaUrls({ file: path, tipo: 'Lista de links não válidados', urls: urls });
        }
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path); 
        files.forEach(async file => {
            const caminhoRelativo = `${path}/${file}`
            const urls = await pegaArquivo(caminhoRelativo);

            if (valida) {
                imprimeListaUrls({ file: caminhoRelativo, tipo: 'Lista de links válidados', urls: await validaUrl(urls) });
            } else {
                imprimeListaUrls({ file: caminhoRelativo, tipo: 'Lista de links não válidados', urls: urls });
            }
        });
    }    
}

progressaCaminho(process.argv);