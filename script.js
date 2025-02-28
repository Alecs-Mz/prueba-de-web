window.onload = function() {
    let boton1 = document.getElementById("miBoton1");
    let boton2 = document.getElementById("miBoton2");
    let boton3 = document.getElementById("miBoton3");
    let boton4 = document.getElementById("miBoton4");

    // Redirigir al primer enlace
    boton1.addEventListener("click", function() {
        window.open("https://youtu.be/hOxi-x1wf6M?si=4YUa-oV77BX73tbe", "_blank");
    });

    // Redirigir al segundo enlace
    boton2.addEventListener("click", function() {
        window.open("https://youtu.be/Y8-n6nNoFKc?si=1-O3TjmWTwVGhXoD", "_blank");
    });

    // Redirigir al tercer enlace
    boton3.addEventListener("click", function() {
        window.open("https://www.instagram.com/_alex_sassone_/", "_blank");
    });

    // Redirigir al cuarto enlace
    boton4.addEventListener("click", function() {
        window.open("https://www.twitch.tv/p44nd0r4", "_blank");
    });
}
