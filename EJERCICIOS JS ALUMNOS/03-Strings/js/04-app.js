const nombre = "Alex Romero"
console.log(nombre);

//replace
console.log(nombre, replace("Alex", "Alejandro"));
console.log(nombre.replace("Romero", ""));

//slice: Cortar cadenas de caracteres
console.log(nombre.length);
console.log(nombre.slice(3,10));
//Da error: console.log(nombre.slice(10,3));
console.log(nombre.slice(8));

//subString
console.log(nombre.substring(6,10));
console.log(nombre.substring(2,1));
console.log(nombre.substring(4));


//repeat
const producto = "Monitor de 24 pulgadas";
const descuento = "en promocion".repeat(3);

console.log(descuento);
console.log(producto.repeat(2.2)); //redondea hacia abajo
console.log(`${producto} ${descuento}`);

//Split: convierte la cadena de texto a un arreglo
const actividad = "Estoy aprendiendo JavaScript";
console.log(actividad.split(" "));