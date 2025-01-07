window.addEventListener("load", function(){
   var audio = document.getElementById(`miAudio`);
    document.getElementById("acepto").addEventListener('click', function () {
        const boton = this; // Referencia al botón
        const imagenActual = boton.style.backgroundImage;
       
      
        
        // Cambiar la imagen según la actual
        if (imagenActual.includes('ca08cff753ccdc0c5666300bfb821fce_m73w1d.jpg')) {
          boton.style.backgroundImage = "url('https://res.cloudinary.com/dduyxqrqt/image/upload/v1736092034/sangreperoconmarcasdeagua_lszwps.jpg')";
        } else {
            boton.style.backgroundImage = "url('https://res.cloudinary.com/dduyxqrqt/image/upload/v1736092034/sangreperoconmarcasdeagua_lszwps.jpg')";
          }
          //audio
          if(audio){
            audio.play().catch((error)=>{
              console.error("error al reproducir el audio >:v", error);
            })};

            setTimeout(() => {
              window.location.href = "/slenderman"; 
            }, 3000); 
      });
})
