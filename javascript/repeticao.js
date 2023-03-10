//for 

for (let i = 0; i <= 3; i++) {
    console.log('variavel i: ', i)
}

const frutas = ['banana', 'maça', 'pera'];

for(let i = 0; i < frutas.length; i++){
    console.log('frutas: ', frutas[i])
}

//while

var contador = 0;

while (contador < 11) {
    console.log("9 x " + contador + "=" + 9*contador);
    contador++;
}

let sorteados = [5, 78, 93, 23, 45];
let numero = 93;
let i = 0;

while(i < sorteados.length){
    if(sorteados[i] == numero){
        break;
    }

    console.log(sorteados[i]);
    i++;
}

//do while

let index = 0;
do {
    console.log("digitando...", index)
    index++;
} while (index <= 5);

// verificar primeiro e executar depois; while
// executar pelo menos 1 vez e depois verificar; do while




