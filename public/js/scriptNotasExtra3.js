window.addEventListener("DOMContentLoaded", function() {
    const llaveGuardada3 = localStorage.getItem("llaveAcceso3");

    if (!llaveGuardada3) {
        alert("codigo = " + llaveGuardada3 + " => no aceptado");
        window.location.href = "/"; 
    }else{
        alert("codigo = " + llaveGuardada3 + " => aceptado");
    }});