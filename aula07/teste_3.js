/*
1. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
mostrando uma mensagem de erro e voltando a pedir as informações.
*/
var prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome: ");
let senha = prompt("Digite sua senha: ");

while (nome == senha) {
    console.log("Digite novamente. Seu usuário e sua senha são iguais : ");
    nome = prompt("Digite seu nome: ");
    console.log("ae 01 " + nome )
    senha = prompt("Digite sua senha: ");
    console.log("ae 02 " + senha )
    //nome!=senha;
}
console.log("Usuario e senha estão corretos.");