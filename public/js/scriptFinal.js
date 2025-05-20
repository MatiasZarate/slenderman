window.addEventListener("load", function() {
    const codigoCorrecto = "04934751";

    const respuesta = prompt("Ingresa la llave de acceso:");
    if (respuesta !== codigoCorrecto) {
        alert("Código incorrecto. No puedes entrar.");
        window.location.href = "/notas";
    }else if (respuesta === null){
        alert("Código incorrecto. No puedes entrar.");
        window.location.href = "/notas";
    }  

let escenaActual = 1;
let bloquearBoton = false;

window.mostrarSiguienteEscena = function() {
    
            if (bloquearBoton) {
                return; // No hace nada si el botón está bloqueado
            }
        
 var audioActual = document.getElementById(`audioEscena${escenaActual}`);
if (audioActual){
audioActual.pause();
audioActual.currentTime = 0; 
                }

            document.querySelector(`.escena${escenaActual}`).style.display = 'none';
            escenaActual++;

 var audio = document.getElementById(`audioEscena${escenaActual}`);
if (audio) {
audio.play();
           }

let audioyboton = document.getElementById('audioyboton')
let musica = document.getElementById('miAudioo');
            if(escenaActual === 10){
            audioyboton.style.display = 'none';
            musica.pause();

            var timer = setTimeout(function() {
            window.location='/'
        }, 8000);
            }
            
            if(escenaActual > 10){
            bloquearBoton = true;
            escenaActual = 10;
        } 
         
        document.querySelector(`.escena${escenaActual}`).style.display = 'block';
        }
});