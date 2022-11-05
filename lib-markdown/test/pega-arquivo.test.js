import pegaArquivo from './../pega-arquivo.js';

const arrayResultado = [
    { FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList' }
];

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('deve retornar uma array com um resultado', async () => {
        const resultado = await pegaArquivo('C:\Users\bieel\desenvolvimento\desenvolvimentos-estudos\alura\js-backend\lib-markdown\test\files\text.md');
        expect(resultado).toEqual(arrayResultado);
    });
});