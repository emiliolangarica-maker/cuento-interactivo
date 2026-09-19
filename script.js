// Definimos un arreglo de escenas. Cada escena es un objeto con tres datos:
// - tag: etiqueta que aparece arriba del título.
// - title: el título principal de la escena.
// - text: la narración o diálogo.
// - button: texto del botón de la escena actual.
const scenes = [
  {
    tag: "Escena 1",
    title: "Título de la escena 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    button: "Continuar",
  },
  {
    tag: "Escena 2",
    title: "Título de la escena 2",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    button: "Continuar",
  },
  {
    tag: "Escena 3",
    title: "Título de la escena 3",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    button: "Reiniciar historia",
  },
];

// Aquí seleccionamos los elementos del HTML que vamos a modificar con JavaScript.
const storyScreen = document.getElementById("story-screen"); // Selecciona el main que será la pantalla principal.
const sceneTag = document.getElementById("scene-tag"); // Selecciona el texto de la escena.
const storyTitle = document.getElementById("story-title"); // Selecciona el título del cuento.
const storyText = document.getElementById("story-text"); // Selecciona el texto principal de la historia.
const nextButton = document.getElementById("next-button"); // Selecciona el botón para cambiar la escena.

// Variable que guarda la escena actual. Empieza en 0 porque la primera escena del arreglo es la número 1.
let currentScene = 0;

// Esta función recibe un número de índice y actualiza todo el contenido visible de la pantalla.
function renderScene(sceneIndex) {
  // Guardamos la escena actual en una variable para no repetir el acceso al arreglo.
  const scene = scenes[sceneIndex];

  // Cambiamos el fondo general de la pantalla según la escena.
  // En este ejemplo, hacemos que cada escena tenga un color distinto usando CSS variables.
  if (sceneIndex === 0) {
    storyScreen.style.background = "linear-gradient(135deg, rgba(0, 1, 3, 0.75), rgba(0, 34, 129, 0.75))";
  } else if (sceneIndex === 1) {
    storyScreen.style.background = "linear-gradient(135deg, rgba(3, 6, 12, 0.8), rgba(58, 33, 124, 0.75))";
  } else {
    storyScreen.style.background = "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(92, 61, 121, 0.75))";
  }

  // Actualizamos el texto de la etiqueta de la escena.
  sceneTag.textContent = scene.tag;

  // Actualizamos el título principal de la escena.
  storyTitle.textContent = scene.title;

  // Actualizamos el texto narrativo.
  storyText.textContent = scene.text;

  // Actualizamos el texto del botón, así el usuario sabe qué acción hará al hacer clic.
  nextButton.textContent = scene.button;
}

// Esta función cambia de una escena a la siguiente.
function goToNextScene() {
  // Aumenta el número actual de escena en 1.
  currentScene = currentScene + 1;

  // Si llegamos al final del arreglo, volvemos al inicio con % scenes.length.
  // Por ejemplo, si hay 3 escenas, cuando currentScene vale 3, 3 % 3 = 0.
  currentScene = currentScene % scenes.length;

  // Luego renderizamos la nueva escena para que el usuario vea el cambio.
  renderScene(currentScene);
}

// Escuchamos el clic del botón. Cuando el usuario hace click, ejecutamos la función goToNextScene.
nextButton.addEventListener("click", goToNextScene);

// Llamamos a renderScene una vez al inicio para cargar la primera escena al abrir la página.
renderScene(currentScene);

/*
Explicación del JavaScript:
- const scenes = [...] crea un arreglo con las diferentes escenas de la historia.
- Cada objeto dentro del arreglo representa una escena individual.
- document.getElementById(...) busca elementos dentro del HTML por su id.
- let currentScene = 0 guarda la escena actual.
- function renderScene(sceneIndex) actualiza el contenido que se ve en pantalla.
- if / else if / else cambian el fondo según la escena.
- sceneTag.textContent = scene.tag; cambia el texto de la etiqueta de la escena.
- storyTitle.textContent = scene.title; cambia el título.
- storyText.textContent = scene.text; cambia la historia.
- nextButton.textContent = scene.button; cambia el texto del botón.
- function goToNextScene() avanza al siguiente índice del arreglo.
- currentScene = currentScene % scenes.length hace que al llegar al final se vuelva a empezar.
- nextButton.addEventListener("click", goToNextScene); conecta el clic del botón con la función.
- renderScene(currentScene); pinta la primera escena al cargar la página.
*/
