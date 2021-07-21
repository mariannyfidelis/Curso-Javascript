/* 
    ESTRUTURAS CONDICIONAIS

- Permite a tomada de decisão em um programa.
- Estrutura de SE ... ENTAO
- Estrutura de SE ... ENTAO ... SENAO
- Utiliza-se IF ... ELSE

- IF pode ser utilizado sozinho
- Sempre que utilizo a palavra ELSE, preciso de um IF antes
- Pode-se ter vários IFs na checagem
- Só pode existir um único ELSE na checagem
- Pode-se usar condições sem 'ELSE IF'. Apenas com IF ou IF .. ELSE
*/

const hora = 13;

if(hora>=0 && hora <=11){
    console.log("Bom dia");
}else if (hora >= 12 && hora <=17){
    console.log("Boa tarde");
}else if(hora>=18 && hora<=23){
    console.log("Boa noite");
}else{
    console.log("Hora desconfigurada !!!");
}







