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


let todasLasPalabras = [...palabras];
let palabrasDisponibles = [];
let intervaloID = null;
let historial = [];

const intervaloInput = document.getElementById('intervalo');
const palabraActual = document.getElementById('palabraActual');
const historialLista = document.getElementById('historial');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

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

// Reproductor de audio reutilizable
let audio = new Audio();

function hablar(texto, callback) {
  audio.src = `audios/${texto}.mp3`;
  audio.onended = callback;
  audio.play().catch(err => {
    console.error("Error al reproducir audio:", err);
    callback(); // continuar aunque haya error
  });
}

function mostrarPalabra() {
  if (palabrasDisponibles.length === 0) {
    palabraActual.textContent = "¡Todas las palabras han sido dictadas!";
    return;
  }

  const index = Math.floor(Math.random() * palabrasDisponibles.length);
  const palabra = palabrasDisponibles.splice(index, 1)[0];

  palabraActual.textContent = palabra;
  historial.push(palabra);

  hablar(palabra, () => {
    if (palabrasDisponibles.length > 0) {
      intervaloID = setTimeout(mostrarPalabra, parseFloat(intervaloInput.value) * 1000);
    } else {
      palabraActual.textContent = "¡Todas las palabras han sido dictadas!";
    }
  });
}

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

  startBtn.classList.add('oculto');
  stopBtn.classList.remove('oculto');

  mostrarPalabra();
});

stopBtn.addEventListener('click', () => {
  clearTimeout(intervaloID);
  startBtn.classList.remove('oculto');
  stopBtn.classList.add('oculto');

  historialLista.innerHTML = "";
  historial.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    historialLista.appendChild(li);
  });
});