// Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
const prompt = require('prompt-sync')();
let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;

let eleitores = +prompt(`Digite a quantidade de eleitores a votar nesta eleição: `)

for(let i = 0 ; i < eleitores ;){
    console.log(`${i+1}º eleitor, Digite o seu voto:  1- candidato1    2 - candidato2    3 - candidato3`);
    let voto = +prompt(`Digite seu voto conforme o número do candidato escolhido para vota:  `);
    if(voto == 1){
        candidato1++;
    }else if(voto == 2){
        candidato2++;
    }else if(voto == 3){
        candidato3++;
    }else{
        console.log (`Por favor, Digite um número válido`);
        continue;
    }
    i++
}
console.log('*________________________________________________________________*')

if (candidato1 > candidato2 && candidato1 > candidato3){
    console.log (`O candidato 1 venceu a eleição pois foi o mais votado.`)
}else if (candidato2 > candidato1 && candidato2 > candidato3){
    console.log (`O candidato 2 venceu a eleição pois foi o mais votado.`)
}else if (candidato3 > candidato1 && candidato3 > candidato2){
    console.log (`O candidato 3 venceu a eleição pois foi o mais votado.`)
}else{
    console.log (`Os votos entre os candidatos deu empate!!!`);
}
console.log(
    `Tabela de votos:\nCandidato1: ${candidato1}   \nCandidato2: ${candidato2}   \nCandidato3: ${candidato3}`);

   
    