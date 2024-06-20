//Tests para la tarea

//Fibonacci
const fibonacci = n => {
    if(n <= 0) return console.log(`No se puede calcular la serie con ${n} terminos`);
    //Se crea el arreglo
    let numeros = [];
    //Se llena con los valores, comenzando con los primeros de la serie
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) numeros.push(i);
        //Los dos primeros términos de la secuencia son 0 y 1, asi que se mantienen asi
        else numeros.push(numeros[i - 1] + numeros[i - 2]);
        // Los siguientes términos se forman con la suma de los dos anteriores 
    }
    console.log(numeros);
}

//Factorial
const factorial = n => {
    if(n < 0) return console.log(`No se puede calcular el factorial de ${n}`);
    let valor = 1;
    //El factorial de 0 siempre es 1. Se salta si n=0
    if (n === 0 || n === 1) return console.log(valor);
    //En caso de que sea mayor a 1, entonces se hace el calculo
    for (let i = 1; i <= n; i++) {
        valor *= i;
    }
    console.log(valor);
}

//Conversiones de Monedas
const convertirMoneda = (cantidad, origen, destino) => {
    let calculo = cantidad;
    if(origen == 'peso'){
        if(destino == 'dolar'){
            return console.log(`${cantidad} pesos a dolares: ${cantidad * 0.06}`);
        }
        else if(destino == 'euro'){
            return console.log(`${cantidad} pesos a euros: ${cantidad * 0.05}`);
        }
        else console.log(`No se puede calcular con moneda destino ${destino}`);
    }
    else if(origen == 'dolar'){
        if(destino == 'dolar'){
            return console.log(`${cantidad} dolares a dolares: ${cantidad}`);
        }
        else if(destino == 'euro'){
            return console.log(`${cantidad} dolares a euros: ${cantidad * 0.9}`);
        }
        else console.log(`No se puede calcular con moneda destino ${destino}`);
    }
    else console.log(`No se puede calcular con moneda origen "${origen}"`);
}

//Función para Identificar Números Primos y Pares al Mismo Tiempo
const esPrimoYPar = (num) => {
    //Comprueba primero que sea par
    if(num % 2 === 1) return false;
    //Comprueba si es primo. Primero verifica que no sea menor a 2
    //0 y 1 no son números primos
    if(num < 2) return false;
    //Se asumira que lo es por ahora
    let xEsPrimo = true;
    let j = 2;
    while (j <= Math.sqrt(num) && xEsPrimo === true){
        if(num % j == 0) xEsPrimo = false;
        j += 1;
    }
    return xEsPrimo;

    //El algoritmo que se sigue para identificar numeros primos
    //corresponde a la Criba de Eratóstenes
}


//Encontrar el Número Máximo según una Función de Comparación
function encontrarMaximo(numeros, comparar) {
    if (numeros.length === 0) {
        return console.log(`El array está vacío`);
    }
  
    let maximo = null; 
    // Asumir que ninguno cumple con la función de comparación
  
    for (let i = 0; i < numeros.length; i++)
      if (comparar(numeros[i]) && (maximo === null || numeros[i] > maximo) ) 
        maximo = numeros[i];
    //Devuelve el valor máximo encontrado que cumple la función, 
    //o devuelve null si ninguan cumplió
    return maximo;
  }
  /*
  // Ejemplo con una función de comparación: menorQue5(n)
  const menorQue5 = (n) => n < 5;
  const array = [1, 2, 3, 4, 5, 6]
  console.log(encontrarMaximo(array,menorQue5));
  */