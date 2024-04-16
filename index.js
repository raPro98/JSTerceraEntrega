const niveles = [
    {
        nombre: "Stereo Madness",
        imagen: "imagenes/smadness.jpg",
        opcion: ["Back on Track", "Stereo Madness"],
    },
    {
        nombre: "Time Machine",
        imagen: "imagenes/tmachine.jpg",
        opcion: ["Cycles", "Time Machine", "Jumper"],
    },
    {
        nombre: "Geometrical Dominator",
        imagen: "imagenes/gdominator.jpg",
        opcion: ["Blast Processing", "Geometrical Dominator", "Dash"],
    },
    {
        nombre: "Nine Circles",
        imagen: "imagenes/ncircles.jpg",
        opcion: ["Death Moon", "Cataclysm", "Yatagarasu", "Nine Circles"],
    },
    {
        nombre: "Bloodbath",
        imagen: "imagenes/bbath.jpg",
        opcion: [
            "Cataclysm",
            "Bloodbath",
            "Yatagarasu",
            "Slaughterhouse",
            "Vivisect",
        ],
    },
    {
        nombre: "Death Moon",
        imagen: "imagenes/dmoon.jpg",
        opcion: [
            "Reanimation",
            "Death Moon",
            "Cataclysm",
            "Sirius",
            "Astral Divinity",
        ],
    },
    {
        nombre: "Peaceful",
        imagen: "imagenes/peaceful.jpg",
        opcion: ["Collab level", "Screamroom", "Hi", "Heartbeat", "Peaceful"],
    },
    {
        nombre: "Congregation",
        imagen: "imagenes/congre.jpg",
        opcion: ["Congregation", "Limbo", "Cataclysm", "XO", "Astral Divinity"],
    },
    {
        nombre: "Toxin Lab III",
        imagen: "imagenes/tlab.jpg",
        opcion: [
            "Toxin Lab",
            "Toxin Lab II",
            "Toxin Lab III",
            "Toxin Lab IV",
            "Limbo",
        ],
    },
    {
        nombre: "Hypnotic Travel",
        imagen: "imagenes/htravel.jpg",
        opcion: [
            "Lonely Travel",
            "Hypnotic Travel",
            "Dream Travel",
            "Dark Travel",
            "Deep Travel",
        ],
    },
];

let nivelActual = 0;
let resCorrecta;
let usuario;

function cargaNivel() {
    const nivel = niveles[nivelActual];
    const imgNivel = document.getElementById("imgNivel");
    const btnOpcion = document.getElementById("btnOpcion");
    btnOpcion.removeAttribute('hidden', 'false');

    imgNivel.src = nivel.imagen;
    resCorrecta = nivel.nombre;

    btnOpcion.innerHTML = '';

    nivel.opcion.forEach((opcion) => {
        const button = document.createElement('button');
        button.textContent = opcion;
        button.addEventListener('click', () => {
            verifRespuesta(opcion);
        });
        btnOpcion.appendChild(button);
    });
}

function verifRespuesta(respuesta) {
    const btnOpcion = document.getElementById("btnOpcion");
    if (respuesta == resCorrecta) {
        mostrarMensaje('Respuesta correcta!');
        nivelActual++;
        if (nivelActual == niveles.length) {
            mostrarMensaje('Felicidades, has completado todos los niveles!');
            btnOpcion.setAttribute('hidden', 'true');
            if (confirm('¿Quieres jugar de nuevo?')) {
                nivelActual = 0;
            } else {
                document.body.innerHTML = "";
            }
        } else {
            cargaNivel();
        }
    } else {
        mostrarMensaje("Respuesta incorrecta. Inténtalo de nuevo");
        btnOpcion.setAttribute('hidden', 'true');
        nivelActual = 0;
    }
}

function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").textContent = mensaje;
}

function iniciar() {
    usuario = prompt(
        "Bienvenido/a a Geometry Dash Quiz! Por favor, ingresa tu nombre:"
    );
    mostrarMensaje(`Hola, ${usuario}. Buena suerte en el juego!`);
    cargaNivel();
}

document
    .getElementById("btnNext")
    .addEventListener("click", () => cargaNivel());

iniciar();
