const producto = "Monitor";
const pulgadas = "24 pulgadas";

console.log(producto.concat("En descuento"));
console.log(producto.concat(pulgadas));

console.log(producto, "mide", pulgadas);
console.log(producto + " tiene un tamaño de" + pulgadas);

console.log(`El producto ${producto}`);


const producto2 = "         Mouse        ";
console.log(producto2);
//Elimina los espacios en blanco del inicio y final
console.log(producto2.trimStart().trimEnd());
//Lo mismo
console.log(producto2.trim());