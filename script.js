window.onload = function() {
    let boton1 = document.getElementById("miBoton1");
    let boton2 = document.getElementById("miBoton2");
    let boton3 = document.getElementById("miBoton3");
    let boton4 = document.getElementById("miBoton4");

    // Redirigir al primer enlace (Google) cuando el primer botón sea clickeado
    boton1.addEventListener("click", function() {
        window.open("https://youtu.be/hOxi-x1wf6M?si=4YUa-oV77BX73tbe", "_Blank");
    });

    // Redirigir al segundo enlace (YouTube) cuando el segundo botón sea clickeado
    boton2.addEventListener("click", function() {
        window.open("https://youtu.be/Y8-n6nNoFKc?si=1-O3TjmWTwVGhXoD", "_Blank");
    });

    // Redirigir al tercer enlace (Instagram) cuando el tercer botón sea clickeado
    boton3.addEventListener("click", function() {
        window.open("https://www.instagram.com/_alex_sassone_/", "_Blank");
    });

    // Redirigir al cuarto enlace (nuevo) cuando el cuarto botón sea clickeado
    boton4.addEventListener("click", function() {
        window.open("https://www.ejemplo.com", "_Blank");
    });
}
