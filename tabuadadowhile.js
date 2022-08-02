let numero = 3;
let numeros = [1,2,3,4,5,6,7,8,9,10];

let i = 0;


do{
    let resultado = numero * numeros[i];
    console.log(numero + 'x' + numeros[i] + '=' + resultado);
    i++;
}while (i < numeros.length);
