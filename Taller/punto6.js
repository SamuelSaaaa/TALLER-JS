let numeros = [3, 8, 12, 5, 20, 7];

let resultado = numeros
    .filter(n => n > 6)
    .map(n => n * 2);

console.log(resultado);