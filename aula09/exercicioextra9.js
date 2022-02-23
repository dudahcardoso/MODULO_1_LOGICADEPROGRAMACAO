// Calcular a média de todos os números de um array

const array = [5,5,5];
    let n = array.length;
    let soma = 0;
    for (let i = 0; i < n; i++) {
        soma += array[i];
    }
    
let media = soma/n;
console.log(`A mediaArray é: ${media}`);