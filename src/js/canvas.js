

export function dibujarCanvas() {
    const canvas = document.getElementById("forca");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const tablero = canvas.getContext("2d");

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // /linea uno base
    tablero.beginPath();
    tablero.moveTo(350, 500);
    tablero.lineTo(700, 500);
    tablero.stroke();
    tablero.closePath();

    // /linea dos vertical
    tablero.beginPath();
    tablero.moveTo(450, 500);
    tablero.lineTo(450, 150);
    tablero.stroke();
    tablero.closePath();

    // /linea tercera horizontal
    tablero.beginPath();
    tablero.moveTo(450, 150);
    tablero.lineTo(610, 150);
    tablero.stroke();
    tablero.closePath();

    // /linea cuarta vertical
    tablero.beginPath();
    tablero.moveTo(610, 150);
    tablero.lineTo(610, 180);
    tablero.stroke();
    tablero.closePath();

    // /cabeza
    tablero.beginPath();
    tablero.arc(610, 206, 24, 0, 2 * Math.PI);
    tablero.stroke();
    tablero.closePath();

    // /tronco
    tablero.beginPath();
    tablero.moveTo(610, 400);
    tablero.lineTo(610, 234);
    tablero.stroke();
    tablero.closePath();

    // /manos izquierda
    tablero.beginPath();
    tablero.moveTo(610, 234);
    tablero.lineTo(570, 255);
    tablero.stroke();
    tablero.closePath();

    // /mano derecha
    tablero.closePath();
    tablero.beginPath();
    tablero.moveTo(610, 235);
    tablero.lineTo(650, 255);
    tablero.stroke();
    tablero.closePath();

    // /pie izquierdo
    tablero.beginPath();
    tablero.moveTo(610, 400);
    tablero.lineTo(580, 445);
    tablero.stroke();
    tablero.closePath();

    // /pie derecho
    tablero.closePath();
    tablero.beginPath();
    tablero.moveTo(610, 400);
    tablero.lineTo(640, 445);
    tablero.stroke();
    tablero.closePath();
}





export function dibujarLinea(palabraSecreta) {
    const tablero = document.getElementById("forca").getContext("2d");
    tablero.lineWidth = 8;
    tablero.lineCap = "butt";
    tablero.lineJoin = "butt";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600 / palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        const tablero = document.getElementById("forca").getContext("2d");
        tablero.moveTo(350 + (anchura * i), 640)
        tablero.lineTo(350 + (anchura * i), 640)
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
    tablero.strokeText(palabraSecreta[index], 340 + (anchura * index), 620);
    tablero.stroke();
}
export function escribirLetraIncorrecta(letra, errorsLeft) {
    const tablero = document.getElementById("forca").getContext("2d");
    tablero.font = "bold 40px Inter";
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeText(letra, 200 + (50 * (10 - errorsLeft)), 720, 40);
}