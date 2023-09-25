//Aprendendo a utilizar o Fetch API do JavaScript

/*
Primeiramente, como vamos fazer o donwload das informações a grosso modo, vamos definir então nossa URL.
*/
const offset = 0
const limit = 10
const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/*
Entendendo o FETCH.
O Fetch vai nos retornar uma 'promise', o que nada mais é que uma promessa de retorno de alguma coisa, e seu processamento não definitivamente é instantaneo, no seu caso, se faz toda a leitura do código e posterior (ao seu devido tempo de acordo com a quantidade de dados e etc) retorna a resposta. 
*/

/*
Todo fetch tem o método de processamento de sucesso que é o .then()
*/

fetch(url).then(function (response){
    console.log(response);
})

