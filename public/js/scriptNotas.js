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
        if(value === "slenderman"){
            swal.fire({title: "NOTA 1",
                text: "Esta primera nota parece mostrarnos un consejo, y este es el evitar mirar a Slenderman, indicando que si lo hacemos el nos buscará. Esto se puede relacionar con lo que mencioné anteriormente sobre como el busca a todas las personas que intentar ir a por el, intentando pasar desapercibido. Obviamente es solo una teoría y no puedo confirmarlo, pero estoy bastante seguro de eso. Creo que sé quien escribió la nota, pero mientras avances leyendo las notas, te explicaré.",
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
         if(value === "slendermano"){
            swal.fire({title: "NOTA 2",
                text: "En esta podemos ver una descripción sobre uno de los rasgos más identificativos de esta entidad, como si el que escribiera la nota estuviera impactado y sorprendido por esto. Tal vez.. como si no se esperara que eso ocurriera... o no lo tuviera planeado... agarra más notas si quieres saber a que me refiero. ",
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
         if(value === "slendermano"){
            swal.fire({title: "NOTA 3",
                text: "en la nota podemos ver que está escrito 'dejame solo' con un dibujo de un arbol a lado, como si el que escribió la nota estuviera escapando de la entidad en el bosque. Pero eso no es lo único que descubrí en mi busqueda de las notas, encontré también los planos que relatan el origen de slenderman, redirige a esta página si quieres saberlos. También responderá a la incognita de quien está escribiendo las notas",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180079/nota3_ssuslq.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                imageAlt: "Custom image",
                html: '<h5>en la nota podemos ver que está escrito "dejame solo" con un dibujo de un arbol a lado, como si el que escribió la nota estuviera escapando de la entidad en el bosque. Pero eso no es lo único que descubrí en mi busqueda de las notas, encontré también los planos que relatan el origen de slenderman, redirige a esta página si quieres saberlos. También responderá a la incognita de quien está escribiendo las notas</h5><button id="redirigirBtn" class="swal2-confirm">Ir ahora</button>',
                showConfirmButton: false,
                didOpen: () => {
                    document.getElementById("redirigirBtn").addEventListener("click", function() {
                        window.location.href = "/notass/nota3";
                    });
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
         if(value === "slendermano"){
            swal.fire({title: "NOTA 4",
                text: "A simple vista, podemos ver la figura de slenderman y otros arboles, pero los arboles que están a lado, además de tener una forma extraña, tienen espirales arriba. Se que suena rebuscado, pero tengo pruebas para cree que Slenderman estaba acompañado de alguien más cuando se dibujaba esa nota. Serán estos los proxys mencionados anteriormente? ",
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
         if(value === "slendermano"){
            swal.fire({title: "NOTA 5",
                text: "Esta es la nota más simple y facil de entender, pero probablemente una de las más trágicas. Muestra su desesperación de que alguien lo ayude, cosa que dudo que haya pasado, debido a que nunca más hubo registros del científico después de su desaparición.",
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
         if(value === "slendermano"){
            swal.fire({title: "NOTA 6",
                text: "Además de lo obvio, que es el mensaje de no poder correr, me genera dudas la x que está abajo, si te interesa mi teoría de esta, redirigete a esta página. También comentaré unos raros encuentros que estuve teniendo ultimamente...",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180078/nota6_cnsbhf.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                confirmButtonColor:"red",
                imageAlt: "Custom image",
                html: '<h4>Además de lo obvio, que es el mensaje de no poder correr, me genera dudas la x que está abajo, si te interesa mi teoría de esta, redirigete a esta página. También comentaré unos raros encuentros que estuve teniendo ultimamente...</h4><button id="redirigirBtn" class="swal2-confirm">Ir ahora</button>',
                showConfirmButton: false,
                didOpen: () => {
                    document.getElementById("redirigirBtn").addEventListener("click", function() {
                        window.location.href = "/notass/nota6";
                    });
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
         if(value === "slendermano"){
            swal.fire({title: "NOTA 7",
                text: "Esta es la nota en que se lo ve más desesperado, dibujando su silueta e intentando negar su existencia con los 'no'... eso puede significar algo? es una posibilidad, debo pensarlo y solo queda 1 nota.",
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
         if(value === "slendermano"){
            swal.fire({title: "NOTA 8",
                text: "Algo pasó y la ultima nota es simplemente la silueta de slenderman y el mensaje 'te sigue'... capaz su significado sea que si encuentras esta nota, ya es hecho que te seguirá. Si quieres saber el que yo creo que es el objetivo y debilidad de Slenderman, ven a esta vista. Creo que finalmente lo tengo.",
                imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180079/nota8_hwzaoe.jpg",
                imageWidth: 400,
                imageHeight: 200,
                background:"black",
                color:"white",
                imageAlt: "Custom image",
                html: '<h4>Algo pasó y la ultima nota es simplemente la silueta de slenderman y ese mensaje... capaz su significado sea que si encuentras esta nota, ya es hecho que te seguirá. Si quieres saber el que yo creo que es el objetivo y debilidad de Slenderman, ven a esta vista. Creo que finalmente lo tengo.</h4><button id="redirigirBtn" class="swal2-confirm">Ir ahora</button>',
                showConfirmButton: false,
                didOpen: () => {
                    document.getElementById("redirigirBtn").addEventListener("click", function() {
                        window.location.href = "/notass/nota8";
                    });
                }
            })
         }else{
            swal.fire({background:"black",color:"red",icon:"error",confirmButtonColor:"red",html:"<h1>contraseña incorrecta</h1>"})
         }
         })}),
    final.addEventListener('click', function () {
            const boton = this; // Referencia al botón
            
            Swal.fire({
               title:'...',
               input: "text",
               inputAttributes:{
                  autocomplete:"off"
               },
               inputPlaceholder: "",
           }).then(({value})=> {
           if(value === "slendermano"){
              swal.fire({title: "?",
                  text: "acá si deberé redirigir a un lugar distinto :P",
                  imageUrl: "https://res.cloudinary.com/dduyxqrqt/image/upload/v1738180079/nota8_hwzaoe.jpg",
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: "Custom image"})
           }else{
               swal.fire("...")
           }
           })});

 })
 