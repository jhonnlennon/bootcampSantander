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

//fetch(url)

   // .then(function (functionQualquer){ //Nesta linha inicio uma função anonima (para callback) e digo que ela tem como um parametro o response. 
        //Vale lembrar que o response é o retorno (parte do conteúdo) da API.


        //functionQualquer.json() //Nesta linha pegamos o response e dizemos a ele que queremos uma "promise" de json, função reservada. Mas porque? Porque todo o FETCH retorna uma Stream de dados. Esta função retorna uma promise também de any (qualquer), logo a mesma deve ter o seu .then, .catch or .finally
        //.then(function(qualquerNome){
        //    console.log(qualquerNome);
       // })


//})




/*
Para tratamento em casos de fracasos, temos o termo .catch()
 */

//.catch(function(error){
   // console.error(error)
//})






/*
Para que se realizer qualquer operação quando esta requisição terminar, podemos usar o finally()
 */
//.finally(function(){
    //console.log('Requisição concluída.');
//})



/**
 * Devemos entender:
 * Todo o retorno do FETCH vai ser uma stream de dados, no exemplo desta API, sabemos que dentro dela temos os arquivos em JSON, sendo assim, continuaremos nosso tratamento com a função reservada para o mesmo, veja na function .then
 */

//============================================
//Diminuindo a verbosidade.
//============================================

/**
 * Resumo do código comentado.
 * 
 * Lembrando que as constantes ainda estão definidas no início do código. 
 * 
 * Vamos fazer o uso de arrow function
 */

fetch(url)
.then((response) => response.json()) 
.then((jsonBody) => console.log(jsonBody))
.catch((error) => console.error(error))

/**
 * Primeira linha acima:
 *  É uma arrow function, chamada response, que vai executar o response.json()
 *  Esta dizendo que caso tenhamos exito, execute a function (response) e retorne uma função reservada .json para transformar tudo o que há na stream de dados em json
 * 
 * 
 * Segunda linha acima:
 *  Esta dizendo, caso tenhamos exito em chamar tudo o que queremos em json, imprima no console log o seu conteúdo.
 * 
 * 
 * Terceira linha acima:
 *  Esta dizendo, caso de algum erro, nos imprima o mesmo no console.
 * 
 * 
 */


//A título de debugação

fetch(url)
    .then(function (conteudo) { 

        console.log(conteudo);                      //Pegando todo o conteúdo, ou seja, retornando uma stream de dados.
        conteudo.json()                             //Transformando o conteúdo em Json, vai retornar uma outra promise, ou seja, tem que ter outro .then
            .then(function (conteudoEmJson){        //O outro .then
                console.log(conteudoEmJson);        //Imprimindo no console.log() todo o conteúdo o qual fora pego pela promise acima.
            })
    })
    
