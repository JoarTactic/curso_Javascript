/*  Palabra reservada this 
    this es el valor sobre el objeto que estamos usando en el momento
    A los objetos se les puede agregar funciones
*/

const persona = {
    nombre : "Alicia",
    apellido : "Lopez",
    mostrarInfo : function(){
        return `El nombre ${this.nombre} y su apellido ${apellido}`
    }
}

//Llamada a funciones ();
console.log(persona.mostrarInfo());

//Devuelve las llaves o atributos
console.log(Object.keys(persona));

//Devuelve los valores de los atributos
console.log(Object.values(persona));

//Regresa una coleccion de llaves con su valor
console.log(Object.entries(persona));