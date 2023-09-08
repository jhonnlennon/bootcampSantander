console.log('==========Aprofundando em Function==========');
console.log('==========▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼==========');

//Funções declarativas..
function functionAny() {
    console.log('Uma função do tipo declarativa..');
}
functionAny()



console.log('==========Expressões de Funções==========');
console.log('==========▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼==========');

//Expressões de Funções
//São funções atribuídas à expressões. A nomeação é opcional.

//Aqui a função esta nomeada com o nome de funcao
var funcao = function funcao() {
    console.log('Sou uma mensagem de função de expressão!');
}
funcao()

//Abaixo é outro exemplo, porém, sem nomeação.
var funcao2 = function() {
    console.log('Sou uma mensagem de função, mas sem estar nomeada hein.');
}
funcao2()


console.log('==========Arrow Function==========');
console.log('==========▼▼▼▼▼▼▼▼▼▼▼▼▼▼==========');
//São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas.
//Exemplo: var funcaoQualquer = () =>{}

var funcao3 = ()=>{
    console.log('Aqui jaz uma Arrow Function. ;D');
}
funcao3()