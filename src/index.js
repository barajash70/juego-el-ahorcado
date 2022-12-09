import './css/style.css';
import { dibujarCanvas, dibujarLinea, escribirLetraCorrecta, escribirLetraIncorrecta, escribirPalabra } from './js/canvas.js';






//Selectores
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
// const tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";


let intentos = 10;
let largoDeLetrasCorrectas = 0;






//PalabraSecreta

function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta);




}

function comprobarLetra(letra) {
    let esValido = /^[A-Z]+$/.test(letra);
    return esValido;
}

function anadirLetraIncorecta() {
    intentos -= 1;
}


function anadirLetraCorecta() {
    largoDeLetrasCorrectas = largoDeLetrasCorrectas + 1;
}




//Iniciar juego
const iniciarJuegoBoton = document.getElementById("iniciar-juego");
iniciarJuegoBoton.addEventListener("click", iniciarJuego);



function iniciarJuego() {
    document.getElementById("iniciar-juego").style.display = "none";
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea(palabraSecreta);

    document.addEventListener("keyup", (e) => {
        let letra = e.key.toUpperCase();

        //valido que ya se completo el juego correctamente
        if (largoDeLetrasCorrectas == palabraSecreta.length) return;

        //valido que ya se completo el juego erroneamente
        if (intentos == 0) return;

        console.log(comprobarLetra);
        //valido que ya se comprobo la letra correcta
        if (!comprobarLetra(letra)) return; //el signo de admiracion se utiliza para negacion 


        if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    anadirLetraCorecta();
                    escribirLetraCorrecta(i, palabraSecreta);
                }
            }
        } else {
            anadirLetraIncorecta(letra);
            escribirLetraIncorrecta(letra, intentos);
        }

        console.log(largoDeLetrasCorrectas == palabraSecreta.length);
        //valido que ya se completo el juego correctamente

        if (largoDeLetrasCorrectas == palabraSecreta.length) {
            escribirPalabra("Ganaste");
        }
        if (intentos == 0) {
            escribirPalabra("Perdiste");
        }




    });

}










