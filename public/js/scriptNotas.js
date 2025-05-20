window.addEventListener("load", function(){
    /*var audio = document.getElementById(`miAudio`);*/
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2"); 
let nota3 = document.getElementById("nota3");
let nota4 = document.getElementById("nota4");
let nota5 = document.getElementById("nota5");
let nota6 = document.getElementById("nota6");
let nota7 = document.getElementById("nota7");
let nota8 = document.getElementById("nota8");
let final = document.getElementById("final");
let prueba = document.getElementById("prueba");
let prueba2 = document.getElementById("prueba2");
let prueba3 = document.getElementById("prueba3");
    nota1.addEventListener('click', function () {
         const boton = this; // Referencia al botón
         
         Swal.fire({
            title:'NOTA 1',
            text: "introduce la contraseña aquí",
            input : "text",
            background:"black",
            color:"white",
            icon:"question",
            confirmButtonColor:"red",
            inputAttributes:{
               autocomplete:"off"
            },
             inputPlaceholder: "contraseña"
        }).then(({value})=> {
        if(value === "faceless"){
            swal.fire({title: "NOTA 1",
                text: "Esta primera nota parece mostrarnos un consejo, y este es el evitar mirar a Slenderman, indicando que si lo hacemos el nos buscará. Est0 se puede relacionar con lo que mencioné anteriormente sobre como el busca a todas las personas que intentan ir a por el, intentando pasar desapercibido. Obviamente es solo una teoría y no puedo confirmarlo, pero estoy bastante seguro de eso. Desconozco quien escribió la nota",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180079/nota1_ljuasb.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                confirmButtonColor:"red",
                imageAlt: "Custom image"})
        }else{
            swal.fire({background:"black",color:"red",icon:"error",confirmButtonColor:"red",html:"<h1>contraseña incorrecta</h1>"})
        }
        })}),
  nota2.addEventListener('click', function () {
          const boton = this; // Referencia al botón
          
          Swal.fire({
             title:'NOTA 2',
             text: "introduce la contraseña aquí",
             input: "text",
             background:"black",
             color:"white",
             icon:"question",
            confirmButtonColor:"red",
             inputAttributes:{
                autocomplete:"off"
             },
             inputPlaceholder: "contraseña",
         }).then(({value})=> {
         if(value === "faceless"){
            swal.fire({title: "NOTA 2",
                text: "En esta podemos ver una descripción sobre uno de los rasgos más identificativos de esta entidad, como si el que escribiera la nota estuviera impactado por esto. Tal vez.. como si no se esperara que eso ocurriera... o no lo tuvier4 planeado... agarra más notas si quieres saber a que me refiero. ",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180079/nota2_rebcmf.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                confirmButtonColor:"red",
                imageAlt: "Custom image"})
         }else{
            swal.fire({background:"black",color:"red",icon:"error",confirmButtonColor:"red",html:"<h1>contraseña incorrecta</h1>"})
         }
         })}),
  nota3.addEventListener('click', function () {
          const boton = this; // Referencia al botón
          
          Swal.fire({
             title:'NOTA 3',
             text: "introduce la contraseña aquí",
             input: "text",
             background:"black",
             color:"white",
             icon:"question",
            confirmButtonColor:"red",
             inputAttributes:{
                autocomplete:"off"
             },
             inputPlaceholder: "contraseña",
         }).then(({value})=> {
         if(value === "woods"){
            swal.fire({title: "NOTA 3",
                text: "en la nota podemos ver que está escrito 'dejame solo' con un dibujo de un arbol a lado, como si el que escribió la nota estuviera escapando de la entidad en el bosque. Pero eso no es lo único que descubrí en mi busqueda de las notas, encontré también los planos que relatan el origen de slenderman, redirige a esta página si quieres saberlos. ",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180079/nota3_ssuslq.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                imageAlt: "Custom image",
                html: '<h5>en la nota podemos ver que está escrito "dejame solo" con un dibujo de un arbol a lado, como si el que escribió la nota estuviera escapando de la entidad en el bosque. Pero eso no es lo único que descubrí en mi busqueda de las notas, encontré también los planos que relatan el origen de slenderman, redirige a esta página si quieres saberlos. También responderá a la inco9nita de quien está escribiendo las notas</h5><br><button id="prueba" class="boton">obtener llave</button><br><button id="redirigirBtn" class="boton">Ir ahora</button>',
                showConfirmButton: false,
                didOpen: () => {
                const botonLlave = document.getElementById("prueba");
                const botonRedirigir = document.getElementById("redirigirBtn")
 
               /* console.log("Botón de prueba encontrado:", botonLlave);
                console.log("Botón de redirigir:", botonRedirigir);*/

                   if(botonLlave){
                      botonLlave.addEventListener("click", function(){
                     /*alert("Botón de prueba clickeado");*/
                     const llave = /*Math.random().toString(36).substring(2,10);*/ "llave1";
                     localStorage.setItem("llaveAcceso", llave);
                     alert("llave de la nota 3 => " + llave);
                    })}
                  
                    if(botonRedirigir){
                     botonRedirigir.addEventListener("click", function() {
                        window.location.href = "/notass/nota3";
                    })}

                }
            })
         }else{
            swal.fire({background:"black",color:"red",icon:"error",confirmButtonColor:"red",html:"<h1>contraseña incorrecta</h1>"})
         }
         })}),
  nota4.addEventListener('click', function () {
          const boton = this; // Referencia al botón
          
          Swal.fire({
             title:'NOTA 4',
             text: "introduce la contraseña aquí",
             input: "text",
             background:"black",
             color:"white",
             icon:"question",
            confirmButtonColor:"red",
             inputAttributes:{
                autocomplete:"off"
             },
             inputPlaceholder: "contraseña",
         }).then(({value})=> {
         if(value === "woods"){
            swal.fire({title: "NOTA 4",
                text: "A simple vista, podemos ver la figura de sl3nderman y otros arboles, pero algunos arboles que están a lado, además de tener una forma extraña, tienen espirales arriba, como si fueran falsos... Se que suena rebuscado, pero esto capaz significa que esos arboles eran falsos, coincidiendo con el poder de generar alucinaciones que mencioné anteriormente. ",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180078/nota4_efblhh.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                confirmButtonColor:"red",
                imageAlt: "Custom image"})
         }else{
            swal.fire({background:"black",color:"red",icon:"error",confirmButtonColor:"red",html:"<h1>contraseña incorrecta</h1>"})
         }
         })}),
  nota5.addEventListener('click', function () {
          const boton = this; // Referencia al botón
          
          Swal.fire({
             title:'NOTA 5',
             text: "introduce la contraseña aquí",
             input: "text",
             background:"black",
             color:"white",
             icon:"question",
            confirmButtonColor:"red",
             inputAttributes:{
                autocomplete:"off"
             },
             inputPlaceholder: "contraseña",
         }).then(({value})=> {
         if(value === "despair"){
            swal.fire({title: "NOTA 5",
                text: "Esta es la nota más simple y facil de entender, pero probablemente una de las más trágicas. Muestra su desesperación de que alguien lo ayude, cosa que dudo que haya pasado, debido a que nunca m4s hubo registros de el  después de su desaparición.... mira la nota 6 si quieres saber a quien me refiero.",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180079/nota5_nuzw5c.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                confirmButtonColor:"red",
                imageAlt: "Custom image"})
         }else{
            swal.fire({background:"black",color:"red",icon:"error",confirmButtonColor:"red",html:"<h1>contraseña incorrecta</h1>"})
         }
         })}),
  nota6.addEventListener('click', function () {
          const boton = this; // Referencia al botón
        
          Swal.fire({
             title:'NOTA 6',
             text: "introduce la contraseña aquí",
             input: "text",
             background:"black",
             color:"white",
             icon:"question",
            confirmButtonColor:"red",
             inputAttributes:{
                autocomplete:"off"
             },
             inputPlaceholder: "contraseña",
         }).then(({value})=> {
         if(value === "despair"){
            swal.fire({title: "NOTA 6",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180078/nota6_cnsbhf.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                confirmButtonColor:"red",
                imageAlt: "Custom image",
                html: '<h4>Además de lo obvio, que es el mensaje de no poder correr, me genera dudas la x que está abajo, si te interesa mi teoría de esta, redirige7e a esta página. También comentaré unos raros encuentros que estuve teniendo ultimamente...</h4><br><button id="prueba2" class="boton">obtener llave</button><br><button id="redirigirBtn" class="boton">Ir ahora</button>',
                showConfirmButton: false,
                didOpen: () => {
                  const botonLlave2 = document.getElementById("prueba2");
                  const botonRedirigir = document.getElementById("redirigirBtn")

                  if(botonLlave2){
                     botonLlave2.addEventListener("click", function(){
                    /*alert("Botón de prueba clickeado");*/
                    const llave2 = /*Math.random().toString(36).substring(2,10);*/"llave2";
                    localStorage.setItem("llaveAcceso2", llave2);
                    alert("llave de la nota 6 => " + llave2);
                   })}
                 
                   if(botonRedirigir){
                    botonRedirigir.addEventListener("click", function() {
                       window.location.href = "/notass/nota6";
                   })}

               }
           })
        }else{
           swal.fire({background:"black",color:"red",icon:"error",confirmButtonColor:"red",html:"<h1>contraseña incorrecta</h1>"})
        }
        })}),
  nota7.addEventListener('click', function () {
          const boton = this; // Referencia al botón
          
          Swal.fire({
             title:'NOTA 7',
             text: "introduce la contraseña aquí",
             input: "text",
             background:"black",
             color:"white",
             icon:"question",
             confirmButtonColor:"red",
             inputAttributes:{
                autocomplete:"off"
             },
             inputPlaceholder: "contraseña",
         }).then(({value})=> {
         if(value === "guilty"){
            swal.fire({title: "NOTA 7",
                text: "Esta es la nota en que se lo ve más desesperado, dibujando su silueta e intentando negar su existencia con los 'no'... eso puede 5ignificar algo? lo único que puedo destacar es su probable arrepentimiento de haber provocado todo esto",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180079/nota7_knnkc9.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                confirmButtonColor:"red",
                imageAlt: "Custom image"})
         }else{
            swal.fire({background:"black",color:"red",icon:"error",confirmButtonColor:"red",html:"<h1>contraseña incorrecta</h1>"})
         }
         })}),
  nota8.addEventListener('click', function () {
          const boton = this; // Referencia al botón
          
          Swal.fire({
             title:'NOTA 8',
             text: "introduce la contraseña aquí",
             input: "text",
             background:"black",
             color:"white",
             icon:"question",
            confirmButtonColor:"red",
             inputAttributes:{
                autocomplete:"off"
             },
             inputPlaceholder: "contraseña",
         }).then(({value})=> {
         if(value === "radioactive"){
            swal.fire({title: "NOTA 8",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180079/nota8_hwzaoe.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",  
                color:"white",
                imageAlt: "Custom image",
                html: '<h4>Algo pasó y la ultima nota es simplemente la silueta de slenderman y ese mensaje... capaz para este punto, el científico ya se rindió y conocía su destino, pero dejó esta nota como última advertencia. Si quieres saber el que yo creo que es el objetivo y debilidad de Slenderman, ven a esta vista. Creo que f1nalmente lo tengo.</h4><br><button id="prueba3" class="boton">obtener llave</button><br><button id="redirigirBtn" class="boton">Ir ahora</button>',
                showConfirmButton: false,
                didOpen: () => {
                  const botonLlave3 = document.getElementById("prueba3");
                  const botonRedirigir = document.getElementById("redirigirBtn")

                  if(botonLlave3){
                     botonLlave3.addEventListener("click", function(){
                    /*alert("Botón de prueba clickeado");*/
                    const llave3 = /*Math.random().toString(36).substring(2,10);*/"llave3";
                    localStorage.setItem("llaveAcceso3", llave3);
                    alert("llave de la nota 3 => " + llave3);
                   })}
                 
                   if(botonRedirigir){
                    botonRedirigir.addEventListener("click", function() {
                       window.location.href = "/notass/nota8";
                   })}

               }
           })
        }else{
           swal.fire({background:"black",color:"red",icon:"error",confirmButtonColor:"red",html:"<h1>contraseña incorrecta</h1>"})
        }
        })}),
         final.addEventListener('click', function () {
            const boton = this; // Referencia al botón
            
            swal.fire({
               title:"☠︎CONCLUSIÓN☠︎",
               html:'<h4> ☠︎ No entrar hasta completar las 8 notas ☠︎ </h4><br> <button id="redirigirBtnFinal" class="boton"> Ir </button>',
               background:"red",
               color:"black",
               confirmButtonColor:"black",
               showConfirmButton:false,
               didOpen: () => {
                  const botonRedirigirFinal = document.getElementById("redirigirBtnFinal")
                 
                   if(botonRedirigirFinal){
                     botonRedirigirFinal.addEventListener("click", function() {
                       window.location.href = "/final";
                   })}
               }
            })
            /*Swal.fire({
               title:'☢☠︎✞☣︎⁶⁶⁶',
               input: "number",
               background:"black",
               color:"red",
               inputAttributes:{
                  autocomplete:"off"
               },
               inputPlaceholder: "",
           }).then(({value})=> {
           if(value === "04931751"){
            window.location.href = "/final";
           }else{
               swal.fire({
                  title:'...',
                  background:"red",
                  color:"black",
              })
           }
           })*/
         })})

         
 