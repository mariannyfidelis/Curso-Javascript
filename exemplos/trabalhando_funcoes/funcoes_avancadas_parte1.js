// Declaração de função (Function hoisting)
falaOi();

function falaOi(){
    console.log("oi .... :D ");
}

// No Javascript as funções são objetos de Primeira Classe (FIRST-CLASS OBJECT)
// Permite o chamado FUNCTION EXPRESSION
// Isso permite atribuir uma Função a uma variável

const dado = function(){
    console.log("Sou uma variável ....");
}

function executaFuncao(funcao){
    console.log("Vou executar a função !");
    funcao();
    console.log("----------------------------------------");
}

dado();
executaFuncao(dado);

// Trabalhando com Arrow Function
const funcaoArrow = () => {
    console.log("Sou uma arrow function , ok ?!!!");
}

funcaoArrow();

// Função dentro de um objeto

const obj = {
    nome: "Jose",
    falar: function(){
        console.log(`${this.nome} está falando agora ...`);
    }
}

obj.falar();



