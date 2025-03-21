// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tú y yo no ocupamos de palabras", time: 4 },
  { text: "Para que no se note lo mucho que nos queremos", time: 9},
  { text: "Tú y yo somos felices con el hecho de estar juntos", time: 13 },
  { text: "Y dedicarnos un tiempo", time: 18 },
  { text: "Tú, con tu sonrisa tan bonita", time: 21 },
  { text: "Viniste a cambiar mi vida y enseñarme tantas cosas", time: 26 },
  { text: "Encontrarte es mi bendición más grande", time: 30 },
  { text: "Desde que estás a mi lado me has hecho mejor persona", time: 35 },
  { text: "Mi mundo gira alrededor de ti", time: 41 },
  { text: "No hay nada más bonito que tenerte aquí", time: 45 },
  { text: "Que seas mía es el privilegio más hermoso", time: 50 },
  { text: "Al despertar, darte besitos es maravilloso", time: 53 },
  { text: "La vida de tu mano es mejor", time: 59 },
  { text: "Esos ojitos, de mi corazón, son el motor", time: 63 },
  { text: "Siempre daré el extra para que lo tengas todo", time: 67 },
  { text: "Voy a cuidar siempre de ti y de nuestro amor", time: 71 },
  { text: "Porque eres mi tesoro", time: 75 },
  { text: "Mi mundo gira alrededor de ti", time: 98 },
  { text: "No hay nada más bonito que tenerte aquí", time: 103 },
  { text: "Que seas mía es el privilegio más hermoso", time: 107 },
  { text: "Al despertar, darte besitos es maravilloso", time: 111 },
  { text: "La vida de tu mano es mejor", time: 115 },
  { text: "Esos ojitos, de mi corazón, son el motor", time: 119 },
  { text: "Siempre daré el extra para que lo tengas todo", time: 125 },
  { text: "Voy a cuidar siempre de ti y de nuestro amor", time: 128 },
  { text: "Porque eres mi tesoro ANALY", time: 129 },
  { text: "M O R E N I T A - P R E C I O S A", time: 132 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);