//Tipos primitivos

//Bolean
var vOuF = false;
console.log(typeof(vOuF));


//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'jhonn'
console.log(typeof(nome)); 

//function
var funcao = function(){}
console.log(typeof(funcao))

//como declarar uma variavel e como reatribuir valores nela.
var variavel = 'Jhonn'
variavel = 'Isabela'
console.log(variavel)

//let, declaração de escopo local de bloco, pode ser alterado também, mas somente vista dentro do bloco o qual esta trabalhando
let variavel2 = 'variavelLET'
variavel2 = 'Uma variavel com let'
console.log(variavel2)

//contante, não muda valor, tem por obrigação iniciar com um valor
const constante = 'Variável constante'
console.log(constante)


//sobre escopo local e global
//escopo global
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoInterno = 'local'
    console.log(escopoInterno)
}
escopoLocal();

//atribuição
var atribuicao = 'Atribuição'

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica)

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 1 - 3;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2 * 4;
console.log(multiplicacao);

//Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisão inteira ou o resto da divisão
var divisaoInteira = 2 % 2;
console.log(divisaoInteira);

//potencialização
var potencializacao = 2 ** 10;
console.log(potencializacao);


//Operadores relacionais
//Maior Que..
var maiorQue = 5 > 2;
console.log(maiorQue);

//Menor que..
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a..
var maiorIgual = 5 >= 2;
console.log(maiorIgual); 