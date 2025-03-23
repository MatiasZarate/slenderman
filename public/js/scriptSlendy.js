window.addEventListener("load", function(){
    var audio = document.getElementById(`miAudio`);
     document.getElementById("acepto").addEventListener('click', function () {
         const boton = this; // Referencia al botón
         const imagenActual = boton.style.backgroundImage;
        
       
         
         // Cambiar la imagen según la actual
         if (imagenActual.includes('ca08cff753ccdc0c5666300bfb821fce_m73w1d.jpg')) {
           boton.style.backgroundImage = "url('https://res.cloudinary.com/dduyxqrqt/image/upload/v1737465016/paperblood_xw4g0j.jpg')";
         } else {
             boton.style.backgroundImage = "url('https://res.cloudinary.com/dduyxqrqt/image/upload/v1737465016/paperblood_xw4g0j.jpg')";
           }
           //audio
           if(audio){
             audio.play().catch((error)=>{
               console.error("error al reproducir el audio >:v", error);
             })};
 
             setTimeout(() => {
               window.location.href = "/notas"; 
             }, 3000);
       });

       document.getElementById("nota1y2").addEventListener('click', function () {
        swal.fire({
          title:"nota 1 y 2",
          text:"faceless",
          background:"black",
          color:"red",
          confirmButtonColor:"red"
        })
       });
       document.getElementById("nota3y4").addEventListener('click', function () {
        swal.fire({
          title:"nota 3 y 4",
          text:"woods",
          background:"black",
          color:"red",
          confirmButtonColor:"red"
        })
       });
       document.getElementById("nota5y6").addEventListener('click', function () {
        swal.fire({
          title:"nota 5 y 6",
          text:"despair",
          background:"black",
          color:"red",
          confirmButtonColor:"red"
        })
       });
       document.getElementById("nota7").addEventListener('click', function () {
        swal.fire({
          title:"nota 7",
          text:"guilty",
          background:"black",
          color:"red",
          confirmButtonColor:"red"
        })
       });
       document.getElementById("nuclear").addEventListener('click', function (){
        swal.fire({
          title:"8 veces →",
          background:"black",
          color:"white",
          confirmButtonColor:"red"
        })
       })

       let contadorClicks = 0;
       const objetivo = 8;

       document.getElementById("nota8").addEventListener('click', function () {
        contadorClicks++;

        if(contadorClicks >= objetivo){
           swal.fire({
          title:"nota 8",
          text:"radioactive",
          background:"black",
          color:"red",
          confirmButtonColor:"red"
        })
        contadorClicks = 0;
        }
       });
 })
 