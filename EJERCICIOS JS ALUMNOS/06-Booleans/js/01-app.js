//true or false

const bool = "true";
console.log(typeof bool);

const bool2 = new Boolean(true);
console.log(bool2);

if(bool == true){
    console.log("Hola!");
}else{
    console.log("Adios");
}

//Aún con operador estricto, reconoce que es true
//Porque true es una palabra reservada
console.log(bool === bool2);
