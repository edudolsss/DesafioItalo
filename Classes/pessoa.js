const bdPessoas = []

class Pessoa {
    constructor(nome,idade,cep,estado,cidade,rua){
        this.nome = nome
        this.idade = idade
        this.cep = cep
        this.estado = estado
        this.cidade = cidade
        this.rua = rua

    }

    falar(){
        return "Olá, tudo bem ? Meu nome é " + this.nome
    }

    falarIdade(){
        return "Tenho "+ this.idade + " anos de idade !"
    }
}

function criarPessoa(nome,idade){
    const pessoa1 = new Pessoa(nome,idade,cep,estado,cidade,rua)
    bdPessoas.push(pessoa1)
}



export {Pessoa,criarPessoa,bdPessoas}