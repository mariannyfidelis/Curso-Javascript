/*   Criando objetos no Javascript 

[  ] - Colchetes permite criar Arrays
{  } - Chaves    permite criar Objetos

*/

const pessoa1 = {
    nome: "Nane",
    sobreNome:"Braga",
    idade: 33
};

const pessoa2 = {
    nome: "Joseph",
    sobreNome:"Braga",
    idade: 28
};

//Imprimindo os dados de um objeto

console.log(pessoa1.nome, " e ",pessoa2.nome);

// Utilizando uma FUNCTION para criar um objeto
// Conhecida como Factory ou Fábrica de Objetos

function criaPessoa(nome, sobrenome, idade) {
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade,

        fala(){console.log("isso é um método");},
        dormir(){
            console.log("Estou dormindo ....");
            console.log(`${this.nome}, ${this.sobrenome}`);
        }
    };
}

//Escrita de maneira resumida
function criaPessoa2(nome, sobrenome, idade) {
    return{
        nome,
        sobrenome,
        idade
    };
}

// Utilizando a FUNCTION para criar uma Pessoa

const pessoa3 = criaPessoa("Otto", "Alencar", 44);
console.log(pessoa3.nome);
pessoa3.dormir();

// Criando comportamentos em objetos
