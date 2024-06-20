const persona = {
    nombre : "Valery",
    apellido : "Olivo",
    edad: 20,
    carrera: "Derecho"
}

//Seal: Tampoco permite agregar o eliminar las propiedades
//Sin embargo, permite modificar las propiedades existentes

Object.seal(persona);
persona.nombre = "Valeria";
persona.apMat = "Flores";
delete persona.nombre;
console.log(persona);

console.log(Object.isSealed(persona));