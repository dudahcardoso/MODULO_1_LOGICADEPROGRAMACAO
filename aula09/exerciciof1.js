//Faça um programa que peça 2 números e crie um array contando todos os números sequenciais do primeiro até o segundo, independente de ser maior ou menor.
const prompt = require("prompt-sync")();
let numero1 = prompt("Digite um número: ");
let numero2 = prompt("Digite outro número: ");

let arrayjunto = [];

//melhor maneira de fazer a validação da ordem
const contador = numero1 - numero2;

let x = 0;

if (contador > 0 ){ //aqui caso a diferença seja um número positivo, x será o maior número e vai decresceendo até o menor;
    x = numero1;
    for (let cont = 0 ; cont < contador - 1 ; cont++){
        x--;
        arrayjunto.push(x);
    }
}else {             //aqui caso a diferença seja um número negativo, x será o menor número e vai crescendo até o maior;
    x = numero1;
    for(let cont = 0 ; cont > contador + 1 ; cont--){ 
        x++;
        arrayjunto.push(x); 
    }
}
console.log(arrayjunto);