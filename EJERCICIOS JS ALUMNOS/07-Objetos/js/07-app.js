//Unir dos o más objetos

const persona = {
    nombre : "Alicia",
    apellido : "Lopez",
}

const alumno = {
    numero_cuenta : "2222222222",
    creditos : "430"
}

const profesor = {
    numero_empleado : 55555,
    sueldo : 45000
}

//Método Assing
const alum = true;

if (alum == true){
    const esAlumno = Object.assign(persona, alumno);
    console.log(esAlumno);
}else{
    const esProfesor = Object.assign(persona, profesor);
    console.log(esProfesor);
}

