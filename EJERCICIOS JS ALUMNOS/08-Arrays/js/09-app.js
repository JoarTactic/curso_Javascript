const carrito = [
    {nombre : 'Monitor', precio : 2000},
    {nombre : 'Laptop', precio : 15000},
    {nombre : 'Pantalla', precio : 5000},
    {nombre : 'Audifonos', precio : 200},
    {nombre : 'Mouse', precio : 600},
    {nombre : 'Cable HTML', precio : 50},
    {nombre : 'Telefono', precio : 4000},
];

for(let i=0; i < carrito.length; i++){
    console.log(`Artículo: ${carrito[i].nombre} 
    \tPrecio: ${carrito[i].precio}
    `);
}

//ForEach
carrito.forEach(function(producto){
    console.log(`Artículo: ${producto.nombre}
    \tPrecio: ${producto.precio}`);
})

