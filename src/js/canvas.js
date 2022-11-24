

export function dibujarCanvas() {
    const tablero = document.getElementById("forca").getContext("2d");
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0, 0, 1200, 860);
    tablero.beginPath();
    tablero.moveTo(650, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}

export function dibujarLinea(palabraSecreta) {
    const tablero = document.getElementById("forca").getContext("2d");
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600 / palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        const tablero = document.getElementById("forca").getContext("2d");
        tablero.moveTo(500 + (anchura * i), 640)
        tablero.lineTo(550 + (anchura * i), 640)
    }

    tablero.stroke();
    tablero.closePath();
}

export function escribirLetraCorrecta(index, palabraSecreta) {
    const tablero = document.getElementById("forca").getContext("2d");
    tablero.font = "bold 30px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";

    let anchura = 600 / palabraSecreta.length;
    tablero.strokeText(palabraSecreta[index], 505 + (anchura * index), 620);
    tablero.stroke();
}
export function escribirLetraIncorrecta(letra, errorsLeft) {
    const tablero = document.getElementById("forca").getContext("2d");
    tablero.font = "bold 40px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeText(letra, 535 + (40 * (10 - errorsLeft)), 710, 40);
}