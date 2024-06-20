//Existen dos tipos de funciones
//Función:
//Arrow funtion: Función flecha

//Definición
function sumar(){
    console.log(2+2);
}
//Llamada a funcion
sumar();

//Forma de guardar una función en una variable, 
//la cual guarda el dato resultante
const funcion_sumar = function(){
    console.log(3+3);
}
funcion_sumar();

//Otra forma
resta_numero();
function resta_numero(){
    console.log(4-2);
}

/*Forma erronea
resta_numero2();
const resta_numero2 = function(){
    console.log(3-2);
}

Falla ya que, al ser declarado la función en const,
lo inicializa hasta la "segunda vuelta" (en la primera 
se enfoca en funciones declaradas)
Pero al llegar a la linea 18 e intenta acceder, sale error al
haber puesto una función no declarada aún
*/

//Para pedir que escriba algo el usuario en forma de notificacion
//prompt(Ingresa tu nombre);

//El método cnvierte de numero a string
//No necesita que se le meta parametros
const numero = 1
console.log(numero.toString());

//La función convierte de string a número
//Necesita un parametro para funcionar
parseInt('1')