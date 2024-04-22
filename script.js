function calcular() {
    var longitud = parseFloat(document.getElementById('longitud').value);
    var fuerza = parseFloat(document.getElementById('fuerza').value);
    var tipoCarga = document.getElementById('tipo-carga').value;

    var momento;

    if (tipoCarga === 'concentrada') {
        var distancia = longitud / 2; // Distancia al centro de la viga
        momento = fuerza * distancia;
    } else if (tipoCarga === 'distribuida') {
        var cargaDistribuida = fuerza / longitud; // Carga distribuida por unidad de longitud
        momento = cargaDistribuida * longitud * longitud / 8;
    }

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "El momento flector es: " + momento.toFixed(2) + " Nm";
}
