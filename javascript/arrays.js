var frutas  = ['banana', 'maça', 'pera', 'mamao', 'laranja'];

/* comentário */
console.log(frutas)
console.log(frutas[2])
//comentário
console.log(frutas.length)

console.log(frutas.push('melancia')); //adicionar um elemento no final do array
console.log(frutas)
console.log(frutas.pop('melancia')) //remover um elemento no final do array
console.log(frutas)
console.log(frutas.unshift('melao')); //adicionar um elemento no inicio do array
console.log(frutas)

let copyArray = frutas.slice(); // faz uma copia do array
console.log("cópia do array: ", copyArray);