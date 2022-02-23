var prompt = require('prompt-sync')();

let a1 = +prompt("Digite um número: ");
let b1 = +prompt("Digite um número: ");

const resultado = somar(a1,b1);

console.log();
console.log(resultado);

function somar(a, b) {
    const soma = a + b;
    //console.log(soma);
    return soma; //que consegue mostrar o resultado fora do escopo da minha função
}

