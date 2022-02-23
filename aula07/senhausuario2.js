//Faça um programa que peçaz o nome de usuário e a senha de um usuário. A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.

const prompt = require('prompt-sync')();

console.log(`Seja bem vindo a nossa página.\nPor favor, cadastre seu Login e Senha abaixo.\n\nSua senha deve ter no mínimo 8 caaracteres, um número e um caracter especial.\n`);

const login = prompt(`Digite o seu Login: `);

while(true){
    let password = prompt("Digite a sua Senha: ");

    if(password.length < 8 ){
        console.log(`Senha inválida (Tamanho)`);
    }else if(password.indexOf(`0`) == -1 && password.indexOf(`1`) == -1 && password.indexOf(`2`) == -1 && password.indexOf(`3`) == -1 && password.indexOf(`4`) == -1 && password.indexOf(`5`) == -1 && password.indexOf(`6`) == -1 && password.indexOf(`7`) == -1 && password.indexOf(`8`) == -1 && password.indexOf(`9`) == -1 ){
        console.log(`Senha inválida (Numero)`);

    }else if(password.indexOf(`!`) == -1 && password.indexOf(`@`) == -1 && password.indexOf(`#`) == -1 && password.indexOf(`$`) == -1 && password.indexOf(`%`) == -1 && password.indexOf(`¬`) == -1 && password.indexOf(`&`) == -1 && password.indexOf(`*`) == -1 && password.indexOf(`(`) == -1 && password.indexOf(`)`) == -1 && password.indexOf(`£`) == -1 && password.indexOf(`_`) == -1 && password.indexOf(`/`) == -1 && password.indexOf(`/`) == -1 && password.indexOf(`|`) == -1 && password.indexOf(`'`) == -1 && password.indexOf(`"`) == -1 && password.indexOf(`;`) == -1 && password.indexOf(`:`) == -1 && password.indexOf(`^`) == -1 && password.indexOf(`~`) == -1 && password.indexOf(`[`) == -1 && password.indexOf(`]`) == -1 && password.indexOf(`{`) == -1 && password.indexOf(`}`) == -1 && password.indexOf(`-`) == -1 && password.indexOf(`+`) == -1 && password.indexOf(`.`) == -1 && password.indexOf(`,`) == -1 && password.indexOf(`<`) == -1 && password.indexOf(`>`) == -1 && password.indexOf(`¢`) == -1 && password.indexOf(`¨`) == -1 && password.indexOf(`?`) == -1 && password.indexOf(`§`) == -1 && password.indexOf(`ª`) == -1 && password.indexOf(`º`) == -1){
        console.log(`Senha inválida (Caracter especial)`);
    }else{
        break;
    }

}
console.log(`Cadastro realizado com sucesso`)

