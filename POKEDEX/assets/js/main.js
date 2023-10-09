function convertPokemonToLi(pokemon){
    return `
    
    <li class="pokemon ${pokemon.type}" >
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
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

    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
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


