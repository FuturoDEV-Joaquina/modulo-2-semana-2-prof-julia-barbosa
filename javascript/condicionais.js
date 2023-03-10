let autorizado = false;

if(autorizado){
    console.log("estou autorizado!")
} else{
    console.log("não estou autorizado !")
}

const valor = 1 + 2

if(valor === 2){
    console.log("este valor é 2")
} else if(valor == 3){
    console.log(" este valor é 3")
} else{
    console.log("não é nem 2 nem 3");
}

let a = 2 + 2
let b = 4 + 1

if(a === 4 || b === 8){
    console.log("as variaveis a e b estão ok")
} else{
    console.log("as variaveis a e b não estão ok")
}

//switch case
var permissao = 'teste'

switch(permissao){
    case 'usuario':
        console.log('acesso de usuario')
    break;   
    case 'funcionario':
        console.log('acesso de funcionario') 
    break;
    case 'administrador':
        console.log('acesso de administrador')   
    break; 
    default: 
        console.log('acesso negado')
}
