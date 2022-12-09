

export function dibujarCanvas() {
    const canvas = document.getElementById("horca");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const tablero = canvas.getContext("2d");

    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "white";
    tablero.strokeStyle = "red";

    tablero.fillRect(0, 0, window.innerWidth, window.innerHeight);

}

export function dibujarLinea(palabraSecreta) {
    const tablero = document.getElementById("horca").getContext("2d");
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600 / palabraSecreta.length;


    for (let i = 0; i < palabraSecreta.length; i++) {
        const tablero = document.getElementById("horca").getContext("2d");
        tablero.moveTo(340 + (anchura * i), 640)
        tablero.lineTo(370 + (anchura * i), 640)
    }

    tablero.stroke();
    tablero.closePath();
}

export function escribirLetraCorrecta(index, palabraSecreta) {
    const tablero = document.getElementById("horca").getContext("2d");
    tablero.font = "bold 20px Inter";
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";

    let anchura = 600 / palabraSecreta.length;
    tablero.strokeText(palabraSecreta[index], 340 + (anchura * index), 620);
    tablero.stroke();
}
export function escribirLetraIncorrecta(letra, intentos) {
    const tablero = document.getElementById("horca").getContext("2d");
    tablero.font = "bold 20px Inter";
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeText(letra, 200 + (50 * (10 - intentos)), 720, 40);


    console.log(intentos);
    if (intentos == 9) {


        // /linea uno base
        tablero.beginPath();
        tablero.moveTo(350, 500);
        tablero.lineTo(700, 500);
        tablero.stroke();
        tablero.closePath();

    }

    if (intentos == 8) {
        // /linea dos vertical
        tablero.beginPath();
        tablero.moveTo(450, 500);
        tablero.lineTo(450, 150);
        tablero.stroke();
        tablero.closePath();

    }

    if (intentos == 7) {

        // /linea tercera horizontal
        tablero.beginPath();
        tablero.moveTo(450, 150);
        tablero.lineTo(610, 150);
        tablero.stroke();
        tablero.closePath();
    }



    if (intentos == 6) {
        // /linea cuarta vertical
        tablero.beginPath();
        tablero.moveTo(610, 150);
        tablero.lineTo(610, 180);
        tablero.stroke();
        tablero.closePath();
    }



    if (intentos == 5) {
        // /cabeza
        tablero.beginPath();
        tablero.arc(610, 206, 24, 0, 2 * Math.PI);
        tablero.stroke();
        tablero.closePath();
    }



    if (intentos == 4) {
        // /tronco
        tablero.beginPath();
        tablero.moveTo(610, 400);
        tablero.lineTo(610, 234);
        tablero.stroke();
        tablero.closePath();
    }



    if (intentos == 3) {
        // /manos izquierda
        tablero.beginPath();
        tablero.moveTo(610, 234);
        tablero.lineTo(570, 255);
        tablero.stroke();
        tablero.closePath();
    }



    if (intentos == 2) {
        // /mano derecha
        tablero.closePath();
        tablero.beginPath();
        tablero.moveTo(610, 235);
        tablero.lineTo(650, 255);
        tablero.stroke();
        tablero.closePath();
    }



    if (intentos == 1) {
        // /pie izquierdo
        tablero.beginPath();
        tablero.moveTo(610, 400);
        tablero.lineTo(580, 445);
        tablero.stroke();
        tablero.closePath();
    }

    if (intentos == 0) {
        // /pie derecho
        tablero.closePath();
        tablero.beginPath();
        tablero.moveTo(610, 400);
        tablero.lineTo(640, 445);
        tablero.stroke();
        tablero.closePath();
    }


}

export function escribirPalabra(palabra) {
    const tablero = document.getElementById("horca").getContext("2d");
    tablero.strokeText(palabra, 440, 820);

}
