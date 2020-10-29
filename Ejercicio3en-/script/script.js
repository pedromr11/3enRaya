//Variable para cargar los jugadores
    let jugadores = document.getElementsByTagName('input');

//Recoges los botones en un array.
    let boton = document.getElementsByTagName('button');

//Variable para inicializar el cambio de color del juego
    var activar = 'true';

//Cuando se abra la ventana carga las funciones.
window.onload = function(){
    botones();    
}


//Esta función coge y bloquea los botones para que hasta que no se pete el programa.
function botones(){

    //Recorres el array y le implementas el metodo disabled para bloquear cada botón.
    for (let index = 0; index < boton.length; index++) {
      boton[index].setAttribute('disabled', ''); 
        
    }
}


//Función para que salte una alerta si los jugadores están en blanco
function botonComprobarJugadores(){
     
    if(jugadores[0].value == '' || jugadores[1].value == ''){
        alert("Makina que tienes que introducir los jugadores.");
    }else{
        activarBotones();
    }
}


//Función para que cuando esten los jugadores se activen los botones
function activarBotones(){
    
        for (let index = 0; index < boton.length; index++) {
            boton[index].removeAttribute("disabled"); 
        }
}


//Función para seleccionar y cambiar el color a los botones
function colorBotones(num) {
     
    if(activar == 'true'){
        boton[num].style.backgroundColor = "red";
        boton[num].setAttribute('disabled', ''); 
        activar = 'false';
    
    }else if(activar == 'false'){
        boton[num].style.backgroundColor = "blue";
        boton[num].setAttribute('disabled', ''); 
        activar = 'true';
    }
   
}


//Función para reiniciar las movidas
function reiniciar(){
    jugadores[0].value = '';
    jugadores[1].value = '';
    
    for (let index = 0; index < boton.length; index++) {
        boton[index].setAttribute('disabled', '');
        boton[index].removeAttribute('style');
      }
}


 