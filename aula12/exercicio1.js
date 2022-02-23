//1. Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
var prompt = require('prompt-sync')();
let x = +prompt("Digite um número: ");
let y = +prompt("Digite outro número: ");

function soma(x, y){  
    let somaResultado = x + y;
    return somaResultado;
};
let resultado = soma(x,y);
console.log();
console.log(`O resultado da soma é: ${resultado}`);



