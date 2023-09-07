// o que são vetores ou arrays


//como declar um array
let array = ['String', 1, true];
console.log(array);


//podem guardar vários tipos de dados, veja abaixo
let array2 = ['String', 1, true, ['array3'], ['array4'], ['array5']]
console.log(array2);


//como acessar um determinado valor de uma string?
console.log(array2[0]);


//Quais são os tipos de manipulações?

//foreach() - itera um array

//push() - adiciona um item no final do array
//pop() - remove um item do final do array

//shift() - remove item no início do array
//unshift() - adiciona um item no início do array

//indexOf() - retorna índice de um valor

//splice() - remove ou substitui um item pelo índice
//slice() - retorna uma parte de um array existente


//foreach, o foreach abaixo esta retornando uma sequencia de todos os itens e seus respectivos indices para todos contidos no array2.
array2.forEach(function(item, index){console.log(item, index)});

//push, o push abaixo esta adicionando ao final do array uma string.
array2.push('adicionou um novo item no final do array.')
console.log(array2);

//pop, o pop ele remove um item do final do array.
array2.pop();
console.log(array2);

//shift, o shift remove um item do início do array.
array2.shift();
console.log(array2);

//unshift, adiciona um item no início do array
array2.unshift('o que adicionar no inicio?');
console.log(array2);

//indexOf,retorna índice de um valor
console.log(array2.indexOf(true));

//splice, remove ou substitui um item pelo índice
//o primeiro número representa de qual INDICE ele vai começar.
//o segundo número representa a quantidade ou contagem do qual vai retirar ou substituir.
array2.splice(0, 2)
console.log(array2);

//slice, retorna uma parte de um array existente
//o primeiro número representa de qual INDICE ele vai começar.
//o segundo número representa a quantidade ou contagem do qual vai adicionar.
let novoArray = array2.slice(0, 2)
console.log(novoArray);


//=============================================================
//SOBRE OBJETOS
//=============================================================

let object = {
    string: 'string',
    number: 1,
    Boolean: true,
    arrayQualquer: ["UmArrayAqui"],
    objectInterno:{
        objectInterno: 'Um Objeto Interno dentro do objeto.'
    }
};
console.log(object);


//caso queira acessar uma determinada propriedade devemos:
console.log(object.Boolean);

//Destruturação de um objeto:
var stringObjeto = object.string;
console.log(stringObjeto);

//Serve para qualquer propriedade
var numberObjeto = object.number;
console.log(numberObjeto);

//Caso queira buscar por indice um array que esteja dentro de um objeto 
//Esta indefinido porque de fato não temos dados dentro do do indice 1 conforme o arrayQualquer
var arrayObjeto = object.arrayQualquer[1];
console.log(arrayObjeto);

//Pegando uma propriedade interno de outro objeto
var teste = object.objectInterno.objectInterno;
console.log(teste);

//Outra forma de desestruturação de objetos é:
//Declara-se uma variavel e abre um colchetes
//Em seguida, atribui de qual objeto
//dentro do colchetes, adicione as propriedade a qual quer buscar.
var {Boolean, string} = object;
console.log(Boolean, string);
