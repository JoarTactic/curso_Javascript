function sumar (nombre){
    return `saludos a ${nombre}`
}
const resultado = sumar("Jorge");
console.log(resultado);

let total = 0;

function agregarCarrito(){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);

console.log(total)

//let totalPagar
//Sin terminar