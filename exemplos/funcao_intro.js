/* Declarando FUN;'OES*/

function saudacao(){
    console.log("Executando a fun;'ao em Javascript ...");
    console.log("Ol[a ! Como vai ?!")
}

function saudacao2(nome){
    console.log(` Ol[a ${nome} como vai ?!`);
}

function soma(a,b){
    return a+b;
}

function raiz(numero){
    return numero ** 0.5;
}

/*  CHAMANDO UMA FUN;'AO */

saudacao();
saudacao2("Marianny");
console.log(soma(2,3));
console.log(raiz(4));
let result = raiz(4);
console.log("Raiz de 4 = ", result);

let result2 = (num) => num**0.5;
console.log(result2(49));