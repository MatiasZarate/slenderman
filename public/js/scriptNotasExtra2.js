window.addEventListener("DOMContentLoaded", function() {
    const llaveGuardada2 = localStorage.getItem("llaveAcceso2");

    if (!llaveGuardada2) {
        alert("codigo = " + llaveGuardada2 + " => no aceptado");
        window.location.href = "/"; 
    }else{
        alert("codigo = " + llaveGuardada2 + " => aceptado");
    }});