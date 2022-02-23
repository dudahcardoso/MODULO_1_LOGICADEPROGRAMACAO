//Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores

var prompt = require('prompt-sync')();

const numeros = +prompt("Digite 20 números inteiros: ");

const lista = [numeros];


if (lista % 2 == 0) {
const par = []
} else {
const impar = []
}
console.log(par);
console.log(impar);