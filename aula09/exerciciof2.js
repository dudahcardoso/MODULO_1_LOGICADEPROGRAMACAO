// Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso. Use o laço FOR.

const prompt = require('prompt-sync')()
const impares = [];
let numero;

numero = +prompt(`Digite um número: `);
    
for(let i = 1 ; i <= numero ; i += 2){
    impares.push(i)
}
console.log(impares)