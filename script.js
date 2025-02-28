window.onload = function() {
    let boton1 = document.getElementById("miBoton1");
    let boton2 = document.getElementById("miBoton2");
    let boton3 = document.getElementById("miBoton3");
    let boton4 = document.getElementById("miBoton4");

    // Enlace para el primer botón
    boton1.addEventListener("click", function() {
        window.open("https://youtu.be/hOxi-x1wf6M?si=4YUa-oV77BX73tbe", "_blank");
    });

    // Enlace para el segundo botón
    boton2.addEventListener("click", function() {
        window.open("https://youtu.be/Y8-n6nNoFKc?si=1-O3TjmWTwVGhXoD", "_blank");
    });

    // Enlace para el tercer botón
    boton3.addEventListener("click", function() {
        window.open("https://www.instagram.com/_alex_sassone_/", "_blank");
    });

    // Enlace para el cuarto botón
    boton4.addEventListener("click", function() {
        window.open("https://www.twitch.tv/p44nd0r4", "_blank");
    });
}
