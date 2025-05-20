window.addEventListener("DOMContentLoaded", function() {
    const llaveGuardada2 = localStorage.getItem("llaveAcceso2");

    if (!llaveGuardada2) {
        alert("codigo = " + llaveGuardada2 + " => no aceptado");
        window.location.href = "/notas"; 
    }else{
        localStorage.removeItem('llaveAcceso2');
        alert("codigo = " + llaveGuardada2 + " => aceptado");
    }});