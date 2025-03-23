window.addEventListener("load", function() {
    const codigoCorrecto = "slendermon";

    const respuesta = prompt("Ingresa la llave de acceso:");
    if (respuesta !== codigoCorrecto) {
        alert("Código incorrecto. No puedes entrar.");
        window.location.href = "/notas";
    }else if (respuesta === null){
        alert("Código incorrecto. No puedes entrar.");
        window.location.href = "/notas";
    } 

       /* function pedirContrasena(){
            const respuesta = prompt("ingresa la contraseña final: ");

            if(respuesta !== codigoCorrecto){
               
            }
        }*/
});