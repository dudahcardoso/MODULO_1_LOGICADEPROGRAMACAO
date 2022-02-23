// Faça um programa que, dado uma lista de N números (o usuário deve determinar a quantidade de números a serem entrados e entrar cada um deles), determine o menor valor, o maior valor e a soma dos valores.
const prompt = require('prompt-sync')()

let numero;
let menor = Infinity;//para não começar do zero
let maior = 0;
let soma = 0;
const lista = [];


let listanum = +prompt(`Digite a quantidade de números desejados: `)
    
for(i = 0 ; i < listanum ; i++){
    console.log()
    numero = +prompt(`Digite o ${i+1}º número da Lista de Números: `)
    lista.push(numero)
}
for(let i = 0 ; i < listanum; i++){
    if(lista[i] > maior){
        maior = lista[i]
    }
    if(lista[i] < menor){
        menor = lista[i]
    }
    soma += lista[i]
}
console.log(`   
    Encontra o menor valor: ${menor}\tO maior Valor:${maior}\tSoma dos valores: ${soma}
    `)