import saludar from "./02-app"

//Comunicación entre funciones
saludar();
iniciarApp();

function iniciarApp(){
    console.log("Iniciando nuestra apliacion...");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda aplicación");
    usuarioAutenticado("Pablo");
}

function usuarioAutenticado(nombre){
    console.log("Autenticacion correcta");
    console.log(`Usuaio: ${nombre}`)
}