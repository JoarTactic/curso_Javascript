
//Arrow Function

//Funcion anonima
const aprendiendo = function(){
    console.log("Aprendiendo JS")
}
console.log(aprendiendo());

//Funcione flecha
const aprendiendo2 = () => {
    console.log("Aprendiendo JS");
}
console.log(aprendiendo2());

const aprendiendo3 = () => "Aprendiendo JS";
console.log(aprendiendo3());

const nuevo_aprendizaje = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
nuevo_aprendizaje("JavaScript");

//Si solo tenemos un parámetro los parentesis se pueden omitir

const nuevo_aprendizaje2 = tecnologia => console.log(`aprendiendo ${tecnologia}`);
nuevo_aprendizaje2("JavaScript para desarrollo web");

//Para mas de un parametro los parentesis si son necesarios

const nuevos_aprendizaje = (tecnologia, tecno) => 
console.log(`aprendiendo ${tecnologia} ${tecno}`);
nuevos_aprendizaje("HTML", "CSS");



//ACTIVIDAD
//Crear un nuevo array llave y valor (contexto libre)
//Recorrero con map y foreach usando funciones flecha
/*

const librero = [
    {nombre : '20000 de Viaje Submarino', autor : 'Julio Verne'},
    {nombre : 'El principito', autor : 'Antoine Marie'},
    {nombre : 'El Necronomicón', autor : 'H.P. Lovecraft'},
];

const arrayLibros = librero.map(libro => {
    return {libro: libro.nombre, autor: libro.autor}
});
console.log(arrayLibros);

arrayLibros.forEach(libro => {
    console.log(`Libro: ${libro.libro} Autor: ${libro.autor}`);
});
*/