//Métodos de objetos

const persona = {
    nombre : "Valery",
    apellido : "Olivo",
    edad: 20,
    carrera: "Derecho"
}

persona.edad = 25;
console.log(persona);

//Se elimina mientras no se congele
//delete persona.edad;


//Previene que se pueda modificar el objeto
Object.freeze(persona);


persona.nombre = "Alicia";
persona.carrera = "Ingenieria";
//No se elimina ya que está congelado
//delete persona.edad;


console.log(persona);


//Nos devuelve un bool para saber si el objeto esta o no esta congelado
if(Object.isFrozen(persona))
    alert("El objeto está congelado")