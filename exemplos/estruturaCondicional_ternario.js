/*     
     OPERADOR TERNÁRIO UTILIZA O SÍMBOLO ?  */

const pontuacao = 1000;
const nivel = pontuacao >= 1000 ? 'User VIP' : 'User default';

//Código equivalente com IF ... ELSE
if(pontuacao >= 1000){
    console.log("User VIP");
}else{
    console.log("User default");
}
