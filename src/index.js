import './css/style.css';
import { dibujarCanvas, dibujarLinea, escribirLetraCorrecta, escribirLetraIncorrecta } from './js/canvas.js';






//Selectores
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
// const tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

let letras = [];
let errores = 8;


//PalabraSecreta

function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function comprobarLetra(key) {
    let estado = false
    if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        letras.push(key);
        console.log(key);
        return estado;
    } else {
        estado = true;
        console.log(key);
        return estado;
    }
}

function anadirLetraIncorecta() {
    errores -= 1;
    console.log(errores)
}




//Iniciar juego
const iniciarJuegoBoton = document.getElementById("iniciar-juego");
iniciarJuegoBoton.addEventListener("click", iniciarJuego);
function iniciarJuego() {
    document.getElementById("iniciar-juego").style.display = "none";

    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea(palabraSecreta);

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();


        if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {



            for (let i = 0; i < palabraSecreta.length; i++) {

                if (palabraSecreta[i] === letra) {
                    console.log(i);

                    escribirLetraCorrecta(i, palabraSecreta);

                }
            }
        } else {
            anadirLetraIncorecta(letra);
            escribirLetraIncorrecta(letra, errores);
        }

    }
}


