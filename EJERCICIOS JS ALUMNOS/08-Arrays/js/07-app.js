const carrito = [];
const producto1 = {
    nombre: 'Monitor',
    precio: 2000
};

const producto2 = {
    nombre: "Celular",
    precio: 3000
}

carrito.push(producto1);
carrito.push(producto2);

console.log(carrito);

const producto3 = {
    nombre: 'Teclado',
    precio: 600
}
carrito.unshift(producto3);
console.log(carrito);

//Eliminar objetos de el array
//Eliminando primer elemento
//carrito.shift();
//Eliminando el último elemento
//carrito.pop();
//Eliminar el centro
//carrito.splice(0, 1);

console.log(carrito);