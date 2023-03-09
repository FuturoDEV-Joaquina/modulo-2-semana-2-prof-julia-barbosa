// //operadores aritmeticos
let soma  = 2 + 2
console.log(soma)

let sub  = 10 - 2
console.log(sub)

let mult  = 10 * 2
console.log(mult)

let pot  = 10 ** 2
console.log(pot)

let div  = 10 / 2
console.log(div)

//operadores relacionais
let maior = 10 > 2
console.log(maior)

let menor = 1 < 2
console.log(menor)

let igualMaior = 10 >= 2
console.log(igualMaior)

let igualMenor = 1 <= 2
console.log(igualMenor)

let igual = 4 == 4
console.log(igual)

let igualDiferente = 4 === 4
console.log(igual)

let a = 2
let b = 2

console.log(a === b)

//operadores logicos

let gol = false;
console.log("gol", gol) //negacao

var naofoigol = !gol
console.log("nao foi gol", naofoigol)

let ingresso = true;
let maiorIdade = false;
let festa = ingresso && maiorIdade //and

console.log('vai pra festa?', festa);

let c = 2 + 2
let d = 3 * 3

console.log(c == 4 || d == 2); //ou

//operadores de atribuição

let idade = 22;
idade = idade + 1

console.log(idade++) //incremento
console.log(idade)

let idadeMenos = 22;
idadeMenos = idadeMenos - 1

console.log(idadeMenos--) //decremento
console.log(idadeMenos)