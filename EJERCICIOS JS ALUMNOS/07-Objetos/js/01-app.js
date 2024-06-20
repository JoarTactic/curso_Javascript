const persona = {
    nombre : "Valery",
    apellido : "Olivo"
}

//Sintaxis de punto
console.log(persona.nombre);

//Sintaxis con corchete
console.log(persona['apellido']);

//Agregar un nuevo atributo o clave a mi objeto
persona.edad = 20;
console.log(persona);

//Eliminar un atributo a mi objeto
delete persona.apellido;
console.log(persona)