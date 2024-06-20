const carrito = [
    {nombre : 'Monitor', precio : 2000},
    {nombre : 'Laptop', precio : 15000},
    {nombre : 'Pantalla', precio : 5000},
    {nombre : 'Audifonos', precio : 200},
    {nombre : 'Mouse', precio : 600},
    {nombre : 'Cable HTML', precio : 50},
    {nombre : 'Telefono', precio : 4000},
];

const nuevoArray = carrito.map(function(producto){
    return `Artículo: ${producto.nombre} Precio: ${producto.precio}`
});

console.log(nuevoArray)