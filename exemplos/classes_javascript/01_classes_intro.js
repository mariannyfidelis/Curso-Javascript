// Classe é um função construtora
// Fazem exatamente a mesma coisa

/* DECLARAÇÃO DE UMA CLASSE */

class Pessoa{
    constructor(nome, sobrenome){
        this.nome=nome;
        this.sobrenome=sobrenome;
    }
    falar(){console.log(`${this.nome} está falando ...`)}
    comer(){console.log(`${this.nome} está comendo ...`)}
    dormir(){console.log(`${this.nome} está dormindo ...`)}
}

/* CRIANDO UM OBJETO */

const pessoa1 = new Pessoa("Maria", "Sousa");
console.log(pessoa1);
console.log(pessoa1.nome, pessoa1.sobrenome);
pessoa1.falar();
pessoa1.comer();
pessoa1.dormir();

/* CRIANDO UM OBJETO COM O PROTOTYPE - PARA COMPARAÇÃO*/

function Pessoa2(nome, sobrenome){
    this.nome=nome;
    this.sobrenome=sobrenome;
}
Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}