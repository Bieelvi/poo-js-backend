export default class User 
{
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;

    constructor(nome, email, nascimento, role = 'estudante', ativo = true)
    {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role;
        this.#ativo = ativo;
    }

    get nome() 
    {
        return this.#nome;
    }
    
    get email() 
    {
        return this.#email;
    }

    get nascimento() 
    {
        return this.#nascimento;
    }

    get role() 
    {
        return this.#role;
    }

    get ativo() 
    {
        return this.#ativo;
    }

    set nome (novoNome)
    {
        if (novoNome === '' || novoNome.length > 30) {
            throw new Error('Novo nome inválido');
        }

        this.#nome = novoNome;
    }

    infos() 
    {
        let textoAtivo = this.#ativo ? 'ativo' : 'inativo';
        return `Eu sou ${this.#nome}, nascimento em ${this.#nascimento}, com email: ${this.#email}. Sou ${this.#role} e estou ${textoAtivo}.`;
    }
}