// Retornar a maior string de um array
array = [
    "Sao Paulo",
    "Rio de Janeiro",
    "Amazonas",
    "Pernambuco",
    "Santa Catarina",
    "Rio Grande do Norte",
    "Sergipe",
  ]
let maior = ""; 
for (let i = 0; i < array.length; i++) { //varrer todo array
  if (array[i].length > maior.length) {
    maior = array[i];
  }
}
console.log(
  `A maior STRING é: ${maior}`
);
