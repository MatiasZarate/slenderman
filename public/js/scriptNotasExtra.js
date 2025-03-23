window.addEventListener("DOMContentLoaded", function() {
    const llaveGuardada = localStorage.getItem("llaveAcceso");

    if (!llaveGuardada) {
        alert("codigo = " + llaveGuardada + " => no aceptado");
        window.location.href = "/"; 
    }else{
        alert("codigo = " + llaveGuardada + " => aceptado");
    }});
  
    

