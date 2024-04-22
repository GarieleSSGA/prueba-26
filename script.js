// script.js

function calculateMoment() {
    // Obtener los valores de longitud de la viga y carga aplicada
    var span = parseFloat(document.getElementById("span").value);
    var load = parseFloat(document.getElementById("load").value);

    // Calcular el momento flector
    var moment = load * span;

    // Mostrar el resultado en la página
    document.getElementById("result").innerText = "El momento flector es: " + moment.toFixed(2) + " Nm";
}
