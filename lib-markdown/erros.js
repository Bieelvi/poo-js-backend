function trataError(code, message = 'Tá fazendo merda ai, irmão!') {
    throw new Error(code, message);
}

export default trataError;