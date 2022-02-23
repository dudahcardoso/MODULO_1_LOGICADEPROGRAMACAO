// Localizar o maior valor dentro de um array de números
const array = [1, -1, 4, 7, 87, 6,90];
let maximo = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > maximo) {
    maximo = array[i];
  }
}

console.log("Maior número: ", maximo);
