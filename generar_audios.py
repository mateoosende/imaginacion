from gtts import gTTS
import os

# Lista de palabras (igual que en tu const palabras)
palabras = [
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
]

output_folder = "audios"

# Crear carpeta si no existe
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Set de nombres esperados
nombres_esperados = set(f"{p}.mp3" for p in palabras)

# Limpiar audios sobrantes
for archivo in os.listdir(output_folder):
    if archivo.endswith(".mp3") and archivo not in nombres_esperados:
        os.remove(os.path.join(output_folder, archivo))
        print(f"🗑️ Eliminado sobrante: {archivo}")

# Generar audios faltantes
for palabra in palabras:
    nombre_archivo = f"{palabra}.mp3"
    file_path = os.path.join(output_folder, nombre_archivo)

    if os.path.exists(file_path):
        print(f"✔️ Ya existe: {nombre_archivo}")
        continue

    try:
        tts = gTTS(text=palabra, lang='es', slow=False)
        tts.save(file_path)
        print(f"✅ Generado: {nombre_archivo}")
    except Exception as e:
        print(f"❌ Error al generar '{palabra}': {e}")