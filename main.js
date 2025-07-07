const palabras = [
  "manzana", "pera", "plátano", "naranja", "uva", "fresa", "sandía", "melón", "piña", "limón",
  "pan", "queso", "leche", "huevo", "pollo", "arroz", "pasta", "carne", "pescado", "sal",
  "azúcar", "mantequilla", "tomate", "lechuga", "zanahoria", "cebolla", "pepino", "ajo", "vinagre",

  "elefante", "perro", "gato", "vaca", "cerdo", "oveja", "caballo", "pájaro", "pez", "conejo",
  "gallina", "pato", "ratón", "mono", "jirafa", "león", "tigre", "oso", "zorro", "burro",

  "camión", "coche", "bicicleta", "moto", "autobús", "tren", "barco", "avión", "tractor", "patinete",

  "mesa", "silla", "cama", "sofá", "armario", "escritorio", "estantería", "cómoda", "taburete", "colchón",
  "almohada", "cortina", "mantel", "cojín", "lámpara",

  "vaso", "taza", "plato", "cuchillo", "tenedor", "cuchara", "sartén", "botella", "jarra",
  "espejo", "cuadro", "puerta", "ventana", "llave", "cerradura", "toalla", "jabón",
  "peine", "trapo", "balanza", "basura", "pañuelo", "papel",

  "ordenador", "móvil", "tablet", "televisor", "radio", "cámara", "teclado", "pantalla", 
  "auriculares", "microondas", "lavadora", "nevera", "horno", "ventilador", "bombilla", "linterna",

  "zapato", "pantalón", "chaqueta", "abrigo", "gorro", "sombrero", "bufanda", "guante", "calcetín",
  "falda", "vestido", "cinturón", "bolso", "mochila", "maleta", "paraguas", "anillo", "collar",

  "libro", "cuaderno", "lápiz", "bolígrafo", "goma", "sacapuntas", "compás", "pizarra", 
  "tijeras", "pegamento", "papelera", "grapadora", "clip", "folio", "marcador",

  "árbol", "flor", "hoja", "piedra", "rama", "raíz", "nube", "sol", "luna", "estrella",
  "montaña", "río", "mar", "lago", "campo", "bosque", "volcán", "desierto", "isla", "playa",

  "pelota", "muñeca", "cochecito", "rompecabezas", "trenecito", "cometa", "patín", "cartas", 

  "dinero", "moneda", "ticket", "documento", "foto", "mapa", "señal", "cartel",
  "botón", "destornillador", "cinta", "lazo",

  "martillo", "sierra", "alicate", "destornillador", "taladro",
  "clavo", "tornillo", "tuerca", "cinta métrica", "nivel",

  "cepillo de dientes", "pasta de dientes", "champú", 
  "maquinilla", "cortauñas",

  "termómetro", "jeringa", "pastilla", "venda", "tirita",
  "muleta", "silla de ruedas", "aspirina", "gotero", "mascarilla",

  "batidora", "colador", "cucharón", "espátula", "exprimidor",
  "rallador", "tabla de cortar", "delantal", "salero", "sopera",

  "sello", "carpeta",
  "archivador", "subrayador", "chincheta", "impresora",

  "chupete", "biberón", "pañal", "carrito", "cuna",
  "sonajero", "babero", "manta", "trona", "andador",

  "llave inglesa", "gato hidráulico", "caja de herramientas", "embudo",
  "manguera",  "aceite",

  "guitarra", "piano", "tambor", "violín", "micrófono",
  "altavoz",  "flauta", "trompeta", 

  "pasaporte", "billete",
  "gafas de sol", "brújula", "guía", "maletín",

  "balón", "raqueta", "red", "casco", "zapatilla",
  "camiseta", "cronómetro", "silbato", "palo", "patines",

  "cruz", "vela", "rosario", "biblia", "incienso",
  "altar", "imagen", "estampita", "sotana", "cirio",

  "palé", "carretilla", "báscula", "scanner",
  "cinta transportadora", "mostrador", "estante", "precio", "etiqueta",

  "detergente", "escoba", "fregona", "cubo", "bayeta",
  "espray", "limpiacristales", "cepillo", "plumero", "estropajo",

  "alfombrilla", "papel higiénico", "inodoro", 
  "toallero", "grifo", "tapón", "esponja",

  "pincel", "pintura", "lienzo", "arcilla", "plastilina",
  "cartulina", "regla", "cola", "lápiz de color",

  "mando", "consola", "juego", "tablero",
  "ficha", "dado", "puzzle", "novela", "revista",

  "tienda", "saco de dormir", "linterna", "cantimplora", "navaja",
  "mechero", "cuerda", "esterilla", "hornillo",

  "trípode", "objetivo", 
  "batería", "filtro", "funda",

  "reloj", "cronómetro", "calendario", "alarma", "despertador",
  "temporizador", "agenda", "hora", "fecha", "estación",

  "sobre", "burbuja", "precinto",
  "etiqueta", "paquete", "cuerda", "pegatina", "papel de embalar",

  "regadera","pala", "rastrillo", "guantes",
  "azada", "maceta", "fertilizante", 

  "enchufe", "interruptor", "alargador", "cable",
  "pila", "transformador", "cargador", "generador", "batería",

  "cuneta"
];

// Variables principales
let todasLasPalabras = [...palabras]; // <-- debes declarar 'palabras' arriba manualmente
let palabrasDisponibles = [];
let intervaloID = null;
let historial = [];
let reproduccionActiva = false;
let indexRepaso = 0;

// Elementos del DOM
const intervaloInput = document.getElementById('intervalo');
const palabraActual = document.getElementById('palabraActual');
const historialLista = document.getElementById('historial');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const siguienteBtn = document.getElementById('siguienteBtn');

// Wake Lock
let wakeLock = null;
async function solicitarWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    console.log('Wake Lock activado');
    wakeLock.addEventListener('release', () => {
      console.log('Wake Lock liberado');
    });
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === 'visible') {
    await solicitarWakeLock();
  }
});

// Audio
let audio = new Audio();

function hablar(texto, callback) {
  audio.src = `audios/${texto}.mp3`;
  audio.onended = () => {
    callback();
  };
  audio.play().catch(err => {
    console.error("Error al reproducir audio:", err);
    callback();
  });
}

function mostrarPalabra() {
  if (!reproduccionActiva) return;

  if (palabrasDisponibles.length === 0) {
    palabraActual.textContent = "¡Todas las palabras han sido dictadas!";
    return;
  }

  const index = Math.floor(Math.random() * palabrasDisponibles.length);
  const palabra = palabrasDisponibles.splice(index, 1)[0];

  palabraActual.textContent = palabra;
  historial.push(palabra);

  hablar(palabra, () => {
    if (palabrasDisponibles.length > 0 && reproduccionActiva) {
      intervaloID = setTimeout(mostrarPalabra, parseFloat(intervaloInput.value) * 1000);
    }
  });
}

// Botón Comenzar
startBtn.addEventListener('click', async () => {
  await solicitarWakeLock();

  const segundos = parseFloat(intervaloInput.value);
  if (isNaN(segundos) || segundos <= 0) {
    alert("Introduce un intervalo válido.");
    return;
  }

  historial = [];
  historialLista.innerHTML = "";
  palabraActual.textContent = "";
  palabrasDisponibles = [...todasLasPalabras];
  reproduccionActiva = true;

  // Ocultar todo excepto botón parar y palabra actual
  startBtn.classList.add('oculto');
  stopBtn.classList.remove('oculto');
  siguienteBtn.classList.add('oculto');
  siguienteBtn.disabled = false;

  document.querySelector('h1').classList.add('oculto');
  document.querySelector('label[for="intervalo"]').classList.add('oculto');
  intervaloInput.classList.add('oculto');
  document.querySelector('h2:nth-of-type(2)').classList.add('oculto'); // Historial
  historialLista.classList.add('oculto');

  mostrarPalabra();
});


// Botón Parar
stopBtn.addEventListener('click', () => {
  reproduccionActiva = false;
  clearTimeout(intervaloID);
  audio.pause();
  audio.currentTime = 0;

  startBtn.classList.remove('oculto');
  stopBtn.classList.add('oculto');

  historialLista.innerHTML = "";
  historial.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    historialLista.appendChild(li);
  });

  if (historial.length > 0) {
    indexRepaso = 0;
    palabraActual.textContent = "";
    siguienteBtn.classList.remove('oculto');
    siguienteBtn.disabled = false;
  }
  document.querySelector('h1').classList.remove('oculto');
  document.querySelector('label[for="intervalo"]').classList.remove('oculto');
  intervaloInput.classList.remove('oculto');
  document.querySelector('h2:nth-of-type(2)').classList.remove('oculto'); // Historial
  historialLista.classList.remove('oculto');

});

// Botón Siguiente
siguienteBtn.addEventListener("click", decirSiguientePalabra);

function decirSiguientePalabra() {
  if (indexRepaso < historial.length) {
    const palabra = historial[indexRepaso];
    palabraActual.textContent = palabra;
    hablar(palabra, () => {});
    indexRepaso++;
  } else {
    palabraActual.textContent = "¡Fin del repaso!";
    siguienteBtn.disabled = true;
  }
}

// Reconocimiento de voz con tolerancia a errores
try {
  const reconocimiento = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  reconocimiento.lang = 'es-ES';
  reconocimiento.continuous = true;

  reconocimiento.onresult = function (event) {
    const texto = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log("Reconocido:", texto);
    if (esParecidoASiguiente(texto)) {
      decirSiguientePalabra();
    }
  };

  reconocimiento.onerror = function (event) {
    console.error("Error de reconocimiento de voz:", event.error);
  };

  reconocimiento.start();
} catch (e) {
  console.warn("Reconocimiento de voz no compatible en este navegador.");
}

// Comprobación difusa de "siguiente"
function esParecidoASiguiente(texto) {
  texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // quitar tildes
  const variantesAceptadas = [
    "siguiente", "siguente", "sigiente", "sigiuente", "siguientes",
    "si quiere", "si quieres", "seguiente", "si guente", "si hiente",
    "si güente", "si jiente", "si giente", "siyiente"
  ];

  for (const variante of variantesAceptadas) {
    if (texto.includes(variante)) return true;
  }

  const distancia = levenshtein(texto, "siguiente");
  return distancia <= 3;
}

// Función de distancia de Levenshtein
function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return matrix[a.length][b.length];
}
