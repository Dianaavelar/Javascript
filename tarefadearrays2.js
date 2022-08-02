let numeros = [5.5, 6.8, 7.2, 8.4, 9.5];

//Usando função quadrado
for(let i = 0; i < numeros.length; i++){
    let resultado = Math.pow( numeros[i], 2);
    console.log('O quadrado de ' + numeros [i] + ' é = ' + resultado);
}
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

//Usando função raiz quadrada
for(let i = 0; i < numeros.length; i++){
    let resultado = Math.sqrt( numeros[i]);
    console.log('A raiz quadrada de ' + numeros [i] + ' é = ' + resultado);
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

//Usando função arredondamento para baixo
for(let i = 0; i < numeros.length; i++){
    let resultado = Math.floor( numeros[i]);
    console.log('Arredondamento para baixo ' + numeros [i] + ' é = ' + resultado);
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

//Usando função de arredondamento para cima
for(let i = 0; i < numeros.length; i++){
    let resultado = Math.ceil( numeros[i]);
    console.log('Arredondamento para cima  ' + numeros [i] + ' é = ' + resultado);
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

//Usando função de parte inteira 
for(let i = 0; i < numeros.length; i++){
    let resultado = Math.trunc( numeros[i]);
    console.log('Calculo da parte inteira   ' + numeros [i] + ' é = ' + resultado);
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

