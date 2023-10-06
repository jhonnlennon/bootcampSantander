//Vamos separar a complexidade do código.
//Criando um objeto para que ele tenha o método que será pegar os pokemons do .json.


const pokeApi = {} //Vamos criar um objeto.

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.order
    pokemon.types = pokeDetail.map()
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemon) => {

        })
}
//Acima nos estamos criando um método e neste método ele vai retornar um fetch da url do pokemon...
//Aproveitando estamos passando ele para um .json


pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` //Link da API.

    return fetch(url) //Fetch, que vai retornar uma promise.
    
    .then((response) => response.json())  
    //Quando retornar, executa a func response.json() [Que troca o resultado de um objeto ReadableStream para um arquivo .json 
    //Esse .json também retorna uma promise, neste o tratamento dela esta abaixo.
    
    .then((jsonBody) => jsonBody.results)
    //No tratamento acima estamos pedindo que quando ele retornar o arquivo .json pegue desse arquivo os itens da opção .results

    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    //No tratamento acima, estamos com a lista de pokemons (lá do results), agora vamos mapear essa lista pegando as urls de cada pokemon. usando o método pokeApi.getPokemonDetail..... 

    .then((detailRequests) => Promise.all(detailRequests))
    //Agora com a lista na mão, vamos esperar que todas as requisições terminem, com o Promise.all

    .then((pokemonsDetails) => pokemonsDetails)
}
