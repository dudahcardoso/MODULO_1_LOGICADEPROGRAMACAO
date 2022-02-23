const prompt = require('prompt-sync')();
let user = prompt('Digite usuário: ')
let senha = prompt('Digite sua senha:');

while(user==senha)
{
    let user = prompt('Digite usuário: ');
    let senha = prompt('Digite sua senha:');
    if(user==senha){
    console.log('Senha e usuários são iguais, tente novamente!');
    }else{
        console.log("LOGADO!!!");
        break;
    }
}  

console.log('Cadastro realizado com sucesso!')