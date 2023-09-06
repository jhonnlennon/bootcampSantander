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

