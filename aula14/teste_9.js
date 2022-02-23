const pessoa = {
    nome: "Leonardo",
    idade: 20,
    peso: 100,
    altura: 188,
    envelhecer: envelhecer = (x) => {
        for (let i = 0; i < x; i++) {
            this.idade++;
            if(this.idade < 22){
                this.crescer(0.5);
            }
        }
    }, 
    engordar: engordar = (x) => {
        this.peso += x;
    }, 
    emagrecer: emagrecer = (x) => {
        this.peso -= x;
    }, 
    crescer: crescer = (x) => {
        this.altura += x;
    },
    bio: bio = () => {
        return `${this.nome}, ${this.idade} anos, ${this.peso} Kg, ${this.altura} cm`;
    }
}

console.log(pessoa.bio());