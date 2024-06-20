const carrito = [];

const producto1 = {
    nombre: 'Monitor',
    precio: 2000
};

const producto2 = {
    nombre: "Celular",
    precio: 3000
}

const producto3 = {
    nombre: 'Teclado',
    precio: 600
}

//Se pone todo el resultado, y producto 3 se agrega al principio del array
let resultado = [...carrito, producto1];
    resultado = [...resultado, producto2];
    resultado = [producto3, ...resultado]
console.log(resultado);