//Romero Cervantes Jorge Arturo
const producto = {
    nombre : "Monitor",
    tamano : "24 pulgadas",
    precio : 200,
    informacion : {
        procesador : "Core i3",
        capacidad : "1 TB"
    },
    tienda : "Steren",
}

console.log(producto);
/*
//Ejercicio: Extraer la información de nombre y tamaño
//Sin destructuring
console.log(producto.nombre, producto.tamano);

//Con destructuring
const {nombre, tamano} = producto;
console.log(nombre, tamano);

//Obtener procesador sin destructuring
console.log(producto.informacion.procesador, producto.informacion.capacidad);
*/

//Usando destructuring (Esta mal hecho, debo corregirlo)
/*
const {nombre, tamano, precio, informacion: { procesador, capacidad }, tienda} = producto;
console.log(nombre, tamano, procesador, capacidad, tienda);
*/