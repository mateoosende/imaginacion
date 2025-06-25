const palabras = [
  // Frutas y alimentos
  "manzana", "pera", "plátano", "naranja", "uva", "fresa", "sandía", "melón", "piña", "limón",
  "pan", "queso", "leche", "huevo", "pollo", "arroz", "pasta", "carne", "pescado", "sal",
  "azúcar", "mantequilla", "tomate", "lechuga", "zanahoria", "cebolla", "pepino", "ajo", "aceite", "vinagre",

  // Animales
  "elefante", "perro", "gato", "vaca", "cerdo", "oveja", "caballo", "pájaro", "pez", "conejo",
  "gallina", "pato", "ratón", "mono", "jirafa", "león", "tigre", "oso", "zorro", "burro",

  // Transportes
  "camión", "coche", "bicicleta", "motocicleta", "autobús", "tren", "barco", "avión", "tractor", "patinete",

  // Mobiliario
  "mesa", "silla", "cama", "sofá", "armario", "escritorio", "estantería", "cómoda", "taburete", "colchón",
  "almohada", "cortina", "mantel", "cojín", "lámpara",

  // Objetos del hogar
  "vaso", "taza", "plato", "cuchillo", "tenedor", "cuchara", "olla", "sartén", "botella", "jarra",
  "espejo", "reloj", "cuadro", "puerta", "ventana", "llave", "cerradura", "grifo", "toalla", "jabón",
  "cepillo", "peine", "cubo", "escoba", "fregona", "trapo", "balanza", "basura", "pañuelo", "papel",

  // Tecnología
  "ordenador", "móvil", "tablet", "televisor", "radio", "cámara", "ratón", "teclado", "pantalla", "cargador",
  "auriculares", "altavoz", "microondas", "lavadora", "nevera", "horno", "ventilador", "enchufe", "bombilla", "linterna",

  // Ropa y complementos
  "zapato", "camiseta", "pantalón", "chaqueta", "abrigo", "gorro", "sombrero", "bufanda", "guante", "calcetín",
  "falda", "vestido", "cinturón", "bolso", "mochila", "maleta", "paraguas", "reloj", "anillo", "collar",

  // Escuela / Oficina
  "libro", "cuaderno", "lápiz", "bolígrafo", "goma", "sacapuntas", "regla", "compás", "pizarra", "carpeta",
  "tijeras", "pegamento", "silla", "mesa", "ordenador", "papelera", "grapadora", "clip", "folio", "marcador",

  // Naturaleza
  "árbol", "flor", "hoja", "piedra", "rama", "raíz", "nube", "sol", "luna", "estrella",
  "montaña", "río", "mar", "lago", "campo", "bosque", "volcán", "desierto", "isla", "playa",

  // Juguetes y ocio
  "pelota", "muñeca", "cochecito", "rompecabezas", "trenecito", "cometa", "patín", "dado", "cartas", "libro",

  // Otros objetos
  "dinero", "moneda", "billete", "ticket", "documento", "pasaporte", "foto", "mapa", "señal", "cartel",
  "caja", "botón", "clavo", "martillo", "destornillador", "tornillo", "cinta", "pegatina", "cuerda", "lazo",

  // Herramientas y bricolaje
  "martillo", "sierra", "alicate", "destornillador", "taladro",
  "clavo", "tornillo", "tuerca", "cinta métrica", "nivel",

  // Higiene y baño
  "cepillo de dientes", "pasta de dientes", "champú", "toalla", "peine",
  "espejo", "jabón", "esponja", "maquinilla", "cortauñas",

  // Medicina y salud
  "termómetro", "jeringa", "pastilla", "venda", "tiritas",
  "muleta", "silla de ruedas", "aspirina", "gotero", "mascarilla",

  // Cocina y utensilios
  "batidora", "colador", "cucharón", "espátula", "exprimidor",
  "rallador", "tabla de cortar", "delantal", "salero", "sopera",

  // Oficina y papelería
  "sobre", "sello", "grapadora", "clip", "carpeta",
  "archivador", "nota adhesiva", "subrayador", "chincheta", "impresora",

  // Bebés
  "chupete", "biberón", "pañal", "carrito", "cuna",
  "sonajero", "babero", "manta", "trona", "andador",

  // Taller y garaje
  "llave inglesa", "gato hidráulico", "caja de herramientas", "bidón", "embudo",
  "manguera", "cepillo de alambre", "trapo", "guantes", "aceite",

  // Música
  "guitarra", "piano", "tambor", "violín", "micrófono",
  "altavoz", "batería", "flauta", "trompeta", "auriculares",

  // Viaje
  "maleta", "mochila", "pasaporte", "mapa", "billete",
  "cámara", "gafas de sol", "brújula", "guía", "maletín",

  // Deportes
  "balón", "raqueta", "red", "casco", "zapatilla",
  "camiseta", "cronómetro", "silbato", "palo", "patines",

  // Religión y espiritualidad
  "cruz", "vela", "rosario", "biblia", "incienso",
  "altar", "imagen", "estampita", "sotana", "cirio",

  // Almacén y comercio
  "caja", "palé", "carretilla", "báscula", "scanner",
  "cinta transportadora", "mostrador", "estante", "precio", "etiqueta",

  // Limpieza
  "detergente", "escoba", "fregona", "cubo", "bayeta",
  "espray", "limpiacristales", "cepillo", "plumero", "estropajo",

  // Baño
  "cortina", "alfombrilla", "papel higiénico", "inodoro", "lavabo",
  "toallero", "jabonera", "grifo", "tapón", "esponja",

  // Arte y manualidades
  "pincel", "pintura", "lienzo", "arcilla", "plastilina",
  "cartulina", "tijeras", "regla", "cola", "lápiz de color",

  // Ocio y entretenimiento
  "mando", "consola", "joystick", "juego", "tablero",
  "ficha", "dado", "puzzle", "novela", "revista",

  // Camping / naturaleza
  "tienda", "saco de dormir", "linterna", "cantimplora", "navaja",
  "mechero", "cuerda", "esterilla", "hornillo", "mochila",

  // Fotografía
  "cámara", "trípode", "objetivo", "flash", "tarjeta de memoria",
  "batería", "cargador", "visor", "filtro", "funda",

  // Tiempo
  "reloj", "cronómetro", "calendario", "alarma", "despertador",
  "temporizador", "agenda", "hora", "fecha", "estación",

  // Embalaje y envío
  "caja", "sobre", "burbuja", "cinta adhesiva", "precinto",
  "etiqueta", "paquete", "cuerda", "pegatina", "papel de embalar",

  // Jardinería
  "regadera", "manguera", "pala", "rastrillo", "guantes",
  "azada", "maceta", "fertilizante", "tijeras de podar", "carretilla",

  // Electricidad
  "bombilla", "enchufe", "interruptor", "alargador", "cable",
  "pila", "transformador", "cargador", "generador", "batería",
];


let intervaloID = null;
let historial = [];

const intervaloInput = document.getElementById('intervalo');
const palabraActual = document.getElementById('palabraActual');
const historialLista = document.getElementById('historial');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

function hablar(texto) {
  const utter = new SpeechSynthesisUtterance(texto);
  utter.lang = 'es-ES';
  speechSynthesis.speak(utter);
}

function mostrarPalabra() {
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraActual.textContent = palabra;
  historial.push(palabra);
  hablar(palabra);
}

startBtn.addEventListener('click', () => {
  const segundos = parseFloat(intervaloInput.value);
  if (isNaN(segundos) || segundos <= 0) {
    alert("Introduce un intervalo válido.");
    return;
  }

  historial = [];
  historialLista.innerHTML = "";
  palabraActual.textContent = "";
  startBtn.disabled = true;
  stopBtn.disabled = false;

  mostrarPalabra(); // primera palabra inmediatamente
  intervaloID = setInterval(mostrarPalabra, segundos * 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervaloID);
  startBtn.disabled = false;
  stopBtn.disabled = true;

  historialLista.innerHTML = "";
  historial.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    historialLista.appendChild(li);
  });
});
