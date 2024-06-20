const producto = {
    nombre : "Monitor",
    tamano : "24 pulgadas",
    precio : 200,
    informacion : {
        procesador : "Core i3",
        capacidad : "1 TB"
    },
    tienda : "Steren",
    disponible : true
}

console.log(producto.disponible);

producto.disponible = false;
console.log(producto.disponible)
//Se modifica aun si se declara como constante al objeto