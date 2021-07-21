/*  Arrays

- Cole;'ao de itens indexados, ou seja acessamos por meio de [indices
- Sempre como boa pr[atica crie Arrays com o mesmo tipo de elementos
*/

const nome = "Fulano da Silva";
console.log(nome[0]);

const estudantes = ["Aluno1", "Aluno2"];
console.log(estudantes);

estudantes[0] = "Joao da Silva";
estudantes[2] = "Josefina Araujo"; // Item ser[a adicionado.
console.log(estudantes);
console.log(estudantes.length);

//Adicionando elementos de um jeito estranho !!!
estudantes[estudantes.length] = "Eduardo Fontes";
estudantes[estudantes.length] = "Fontenelle Mendes";
estudantes[estudantes.length] = "Eduardo Bragan;a";
console.log(estudantes);
console.log(estudantes.length);

//Adicionar ao final
estudantes.push("Zizi");

//Adicionar no in[icio
estudantes.unshift("Ana Furtado")

//Remover no final
const estudanteRemovidoInicio = estudantes.pop();

//Remover no in[icio
const estudanteRemovidoFinal =estudantes.shift();

console.log(estudantes.slice(0,3));
console.log(estudantes.slice(0,-1));

/*   Verificando o tipo do Array*/

console.log(typeof estudantes);
console.log(estudantes instanceof Array);