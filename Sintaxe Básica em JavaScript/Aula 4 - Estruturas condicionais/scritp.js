console.log('=====================  Estruturas de condição  ======================');
var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos.');

//Usando o if
    if (jogador1 > 0 && jogador2 == 0){
        console.log('Jogador 1 marcou ponto!');
        placar = jogador1 > jogador2 
    } 
//Usando o else if
    else if (jogador2 > 0 && jogador1 == 0){
        console.log('Jogador 2 marcou ponto!');
        placar = jogador2 > jogador1
    } 
//Usando o else
    else {
    console.log('Ninguém marcou ponto.');
}

switch(placar){
    case placar = jogador1 > jogador2 :
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1 :
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('Ninguém ganhou...');
}

console.log('=========================FOR=========================');
//Sobre o FOR!
//Funciona como uma repetição de instrução até que a condição seja falsa;
//Expressão: for([expressãoInicial]; [condição]; [incremento]){declaração}

//Exemplo:
let somando = 0;
var array = ['Valor1', 'Valor2', 'Valor3', 'Valor4']
for (let i = 0; i < array.length; i++){
    console.log('O número é... ' + i);
    somando = ++somando;
}
console.log('A quantidade de itens dentro do array são: ' + somando);
console.log('Assim também sabemos a quantidade...  Que são: '+ array.length);






//Sobre o FOR/in
//Também utilizado para um laço de repetição, entretando, ele vai retorar o indice de um array.
//No caso de um objeto, o nome de suas propriedades. 
//Expressão: for([indice] in [objeto ou array]){declaracao}

//separador
console.log('=======================FOR IN========================');
console.log('Sobre o FOR/in, Também utilizado para um laço de repetição, entretando, ele vai retorar o indice de um array. No caso de um objeto, o nome de suas propriedades. Expressão: for([indice] in [objeto ou array]){declaracao}');
let objetoQualquer = {item1:'Primeira Propriedade..', item2:'Segunda propriedade..', item3:'Terceira propriedade..'};
for(i in objetoQualquer){
    console.log(i);
}




console.log('=======================FOR OF========================');
console.log('=======================▼▼▼▼▼▼========================');
//Sobre o FOR/OF
//No caso de FOR/OF, ele também é uma estrutura de repetição, porém, retorna o valor de uma propriedade de um array ou objeto.
//Espressão: for([indice] of [array]){declaracao}

for(i of array){
    console.log(i);
}

//Para objetos, como suas propriedades variam diferente de um array
//Não podemos simplesmente mandar imprimir, veja a sintaxe abaixo.

for(i of objetoQualquer.item1){
    console.log(i);
}

//Obviamente foi visualizado que imprime caractere + caractere linha a linha. O For of não é uma boa escolha para os itens em objetos. 


console.log('=======================WHILE========================');
console.log('=======================▼▼▼▼▼▼========================');

//Sobre o While
//While executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita ANTES da execução.
//Exemplo:
var a = 0;
while(a<10){
    a++;
    console.log(a);
}

console.log('=====================DO/WHILE========================');
console.log('=======================▼▼▼▼▼▼========================');

//Sobre o do/while
//do while, executa um instrução "Até que" determinada condição seja falsa. A verificação é feita DEPOIS da execução;
//Exemplo:

var b = 0;
do{
    b++;
    console.log(b);
}while(b<10);