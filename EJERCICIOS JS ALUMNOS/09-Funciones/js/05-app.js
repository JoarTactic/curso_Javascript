//Método de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo canción con ID ${id}`);
    },
    pausar : function(id){
        console.log(`Pausando canción con ID ${id}`);
    },
    borrar : function(id){
        console.log(`Borrando canción con ID ${id}`);
    },
    crearPlaylist : function(nombre){
        console.log(`Creando Playlist ${nombre} ...`);
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproducir Playlist ${nombre} ...`);
    }
}

reproductor.reproducir("Himno");
reproductor.pausar(1);

reproductor.saltarCancion = function(nombre){
    console.log(`Saltando canción ${nombre}`);
}

reproductor.saltarCancion("Heavy metal")