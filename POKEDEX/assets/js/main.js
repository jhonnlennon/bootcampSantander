
const offset = 0 //Criando uma constante, offset é 
const limit = 10 //Criando uma constante para limitar a quantidade que aparece na página. 
const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` //Link da API.

function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
//Acima uma função que esta mapeando os tipos dos pokemons e convertendo em html.

function converterPokemonEmHTML(pokemon){
    return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join(' ')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList') //Esta constante esta pegando tudo que esta no html com a ID "pokemonList"

pokeApi.getPokemons().then((pokemons = []) => { 
//O pokeAPI.getPokemons(), é um método do objeto poke-api.js
//Em resumo ele pegou da url as informações e passou para .json
//Também separou somente o resultado com os pokemons e sua url 

//Agora, se funcionar, faça abaixo, senão, faça o .catch((error)). Lembrando que ela retornou um array. 

    pokemonList.innerHTML += pokemons.map(converterPokemonEmHTML).join('')
//Explicando o código acima
//Pega a constante pokemonList, que já esta pegando um elemento HTML pelo ID.
//Transforma em um item html com o innerHTML, e concatena com a lista de pokemons mapeada com o código pokemons.map
//Em seguida converte ele na lista de pokemons em html com o converterPokemonEmHTML e junta todo mundo em uma lista só com o .join, sem separador.
})
.catch((error) => console.error(error))
//No tratamento acima, estamos dizendo que caso de error, execute uma função de error.


//Código antigo que também funcionava.
    //for (let i = 0; i < pokemons.length; i++) {
        //const pokemon = pokemons[i] //Essa variavel pokemons[i], esta pegando as informações array por array. Esta colocando dentro da constante pokemon.
       
        //pokemonList.innerHTML += converterPokemonEmHTML(pokemon)

        //console.log(converterPokemonEmHTML(pokemon)); //E aqui vc esta chamando a função com as informações do array de acordo com sua respectiva numeração. Ela esta retornando um objeto.
        
        //Veja abaixo o que esta nesta constante ( que é o objeto).

        // {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}
        // name: "bulbasaur"
        // url: "https://pokeapi.co/api/v2/pokemon/1/"
        // [[Prototype]]
        // : 
        // Object

   //}



