const prompt = require('prompt-sync')()

let r = true
console.log("\tVamos descobrir o dia do Ano");
do{
console.log("Digite um número de 1 a 365");
let dia = prompt("R: ");


if (dia > 0 && dia <= 31){
    console.log("Você esta no mês de Janeiro.");
    console.log(`Dia ${dia} de Janeiro`);
    r = true
}
else if (dia <=59){
    console.log("Você esta no mês de Fevereiro.");
    console.log(`Dia ${dia-31} de Fevereiro`);
    r = true
}
else if (dia <=90){
    console.log("Você esta no mês de Março.");
    console.log(`Dia ${dia-59} de Março`);
    r = true
}
else if (dia <=120){
    console.log("Você esta no mês de Abril.");
    console.log(`Dia ${dia-90} de Abril`);
    r = true
}
else if (dia <=151){
    console.log("Você esta no mês de Maio.");
    console.log(`Dia ${dia-120} de Maio`);
    r = true
}
else if (dia <=181){
    console.log("Você esta no mês de Junho.");
    console.log(`Dia ${dia-151} de Junho`);
    r = true
}
else if (dia <=212){
    console.log("Você esta no mês de Julho.");
    console.log(`Dia ${dia-181} de Julho`);
}
else if (dia <=243){
    console.log("Você esta no mês de Agosto.");
    console.log(`Dia ${dia-212} de Agosto`);
    r = true
}
else if (dia <=273){
    console.log("Você esta no mês de Setembro.");
    console.log(`Dia ${dia-243} de Setembro`);
    r = true
}
else if (dia <=304){
    console.log("Você esta no mês de Outubro.");
    console.log(`Dia ${dia-273} de Outubro`);
    r = true
}
else if (dia <=334){
    console.log("Você esta no mês de Novembro.");
    console.log(`Dia ${dia-304} de Novembro`);
    r = true
}
else if (dia <=365){
    console.log("Você esta no mês de Dezembro.");
    console.log(`Dia ${dia-334} de Dezembro`);
    r = true
}
else {
    console.log("Digite um número Válido")
    r = false
}
} while(r == false)