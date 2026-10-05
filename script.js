// ================================
// AVENTURA DEL ABECEDARIO
// Teacher Dewry
// ================================

const letras = [
    ["A", "✈️ AVIÓN"],
    ["B", "🚢 BARCO"],
    ["C", "🏠 CASA"],
    ["D", "🎲 DADO"],
    ["E", "🐘 ELEFANTE"],
    ["F", "🌸 FLOR"],
    ["G", "🐱 GATO"],
    ["H", "🍦 HELADO"],
    ["I", "🏝️ ISLA"],
    ["J", "🦒 JIRAFA"],
    ["K", "🥝 KIWI"],
    ["L", "🦁 LEÓN"],
    ["M", "🦋 MARIPOSA"],
    ["N", "☁️ NUBE"],
    ["Ñ", "🧸 ÑANDÚ"],
    ["O", "🐻 OSO"],
    ["P", "🐦 PÁJARO"],
    ["Q", "🧀 QUESO"],
    ["R", "🐭 RATÓN"],
    ["S", "☀️ SOL"],
    ["T", "🐢 TORTUGA"],
    ["U", "🍇 UVA"],
    ["V", "🐄 VACA"],
    ["W", "🍉 WATERMELON"],
    ["X", "🎵 XILÓFONO"],
    ["Y", "🪀 YO-YO"],
    ["Z", "👟 ZAPATO"]
];

let posicion = 0;

function mostrarAbecedario() {

    document.getElementById("inicio").classList.add("oculto");

    document.getElementById("silabas").classList.add("oculto");

    document.getElementById("abecedario").classList.remove("oculto");

    mostrarLetra();
}

function mostrarLetra() {

    document.getElementById("letra").textContent =
        letras[posicion][0];

    document.getElementById("palabra").textContent =
        letras[posicion][1];
}

function letraSiguiente() {

    posicion++;

    if (posicion >= letras.length) {
        posicion = 0;
    }

    mostrarLetra();
}

function letraAnterior() {

    posicion--;

    if (posicion < 0) {
        posicion = letras.length - 1;
    }

    mostrarLetra();
}

function escucharLetra() {

    const texto =
        letras[posicion][0] + " de " +
        letras[posicion][1];

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    speechSynthesis.speak(voz);
}


// ================================
// JUEGO DE SÍLABAS
// ================================

const preguntas = [
    {
        palabra: "🐱 GATO",
        opciones: ["GA", "ME", "PU"],
        correcta: "GA"
    },

    {
        palabra: "🐭 RATÓN",
        opciones: ["RA", "LI", "MO"],
        correcta: "RA"
    },

    {
        palabra: "🌞 SOL",
        opciones: ["SA", "SO", "SU"],
        correcta: "SO"
    },

    {
        palabra: "🍇 UVA",
        opciones: ["MA", "UV", "PA"],
        correcta: "UV"
    },

    {
        palabra: "🐢 TORTUGA",
        opciones: ["TO", "ME", "PI"],
        correcta: "TO"
    }
];

let puntos = 0;
let preguntaActual = 0;

function mostrarSilabas() {

    document.getElementById("inicio").classList.add("oculto");

    document.getElementById("abecedario").classList.add("oculto");

    document.getElementById("silabas").classList.remove("oculto");

    nuevaPregunta();
}

function nuevaPregunta() {

    preguntaActual =
        Math.floor(Math.random() * preguntas.length);

    const pregunta =
        preguntas[preguntaActual];

    document.getElementById("preguntaSilaba").textContent =
        "¿Cuál es la sílaba inicial de " +
        pregunta.palabra + "?";

    const contenedor =
        document.getElementById("opciones");

    contenedor.innerHTML = "";

    document.getElementById("resultado").textContent = "";

    pregunta.opciones.forEach(function(opcion) {

        const boton =
            document.createElement("button");

        boton.textContent = opcion;

        boton.onclick = function() {
            comprobarRespuesta(opcion);
        };

        contenedor.appendChild(boton);
    });
}

function comprobarRespuesta(respuesta) {

    const pregunta =
        preguntas[preguntaActual];

    const resultado =
        document.getElementById("resultado");

    if (respuesta === pregunta.correcta) {

        puntos += 10;

        document.getElementById("puntos").textContent =
            puntos;

        resultado.textContent =
            "🎉 ¡MUY BIEN! +10 puntos ⭐";

    } else {

        resultado.textContent =
            "❌ Inténtalo nuevamente";
    }
}

function volverInicio() {

    document.getElementById("inicio").classList.remove("oculto");

    document.getElementById("abecedario").classList.add("oculto");

    document.getElementById("silabas").classList.add("oculto");
}
