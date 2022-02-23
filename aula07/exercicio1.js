const prompt = require('prompt-sync')();
let Qnotas= +prompt('Digite a quantidade de notas que você deseja dar entrada: ');
let cont=0;
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;
let notas='';
while(cont<Qnotas){
    notas=+prompt(`Digite a ${cont+1} nota: `);
    if(notas>=7){
        aprovados++;
    }else if(notas>=5 && notas<7){
        recuperacao++;
    }else{
        reprovados++;
    }
    cont++;

}
console.log(`Quantidade de alunos APROVADOS: ${aprovados}`);
console.log(`Quantidade de alunos em RECUPERAÇÃO: ${recuperacao}`);
console.log(`Quantidade de alunos REPROVADOS: ${reprovados}`);