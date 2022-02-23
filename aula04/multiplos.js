const prompt = require('prompt-sync')();
var num1 = +prompt('Digite o primeiro numero: ');
var num2 = +prompt('Digite o segundo numero: ');
if(num1%num2 ==0){
    console.log(`os numeros ${num1} e ${num2} são multiplos!`)
}
else{
    console.log(`Os numeros ${num1} e ${num2} não são multiplos!`)
}
