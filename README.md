# One pedia | Dataverse Chat

## Índice
* [1. Preámbulo](#1-preámbulo)
* [2. Resumen](#2-resumen)
* [3. Proceso de diseño](#3-proceso-de-diseño)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Cómo leer el readme](#5-cómo-leer-el-readme)
* [6. Objetivos de aprendizaje](#6-objetivos-de-aprendizaje)
* [7. Problemas de usabilidad](#7-problemas-de-usabilidad)

***
## 1. Preámbulo
One Pedia es una página web que toma la premisa de una Single Page Aplication (SPA) para visualizar un conjunto de datos sobre personajes del manga/anime One Piece y permite que puedas conversar de manera individual con cada uno de ellos o hablar con todos a la vez en instancias separadas. Esta conversación se genera mediante peticiones a la Application Programming Interface (API) mediante una serie de configuraciones en las cuales se le asigna un rol a la inteligencia artificial desarrollada por OpenAI dando a la usuaria la oportunidad de poder conversar con sus personajes favoritos. Adicionalmente, puede filtrar y ordenar los personajes antes de conversar con ellos.

## 2. Resumen del proyecto

se busca transformar la aplicación de Dataverse, en una Single Page Application (SPA), conservando las funcionalidades de visualización, filtrado, ordenamiento y cálculo estadístico. Además, se añade una nueva vista para ver información detallada de cada personaje o entidad, así como la inclusión de una vista de chat que permita interactuar con uno o varios personajes a través de la API de OpenAI.

## 3. Proceso de diseño

#### Ejemplo historia de usuario
![Historia de usuario](../DEV012-dataverse-chat/src/lib/img/historiaUsuario.jpg)

#### Prototipo de alta fidelidad
![Prototipo alta fidelidad](../DEV012-dataverse-chat/src/lib/img/figma.jpg)

## 4. Funcionalidades

Es una Single Page Application (SPA) que permite al usuario visualizar, filtrar, ordenar y calcular estadísticas, similar a lo realizado en [Dataverse](https://github.com/dinciarte/DEV012-dataverse). También proporciona acceso a una página que muestra el detalle de cada personaje para interactuar con las entidades del conjunto de datos utilizado previamente.

Las funcionalidades clave que el proyecto cumple son:

- La aplicación es responsive.
- Se trata de una SPA con múltiples vistas:
   - Tiene un sistema de enrutamiento para la navegación.
   - Cada vista se carga dinámicamente mediante JavaScript.
   - Actualiza la URL y el título del documento (pestaña del navegador) conforme a la vista cargada.
   - Carga la vista correspondiente a la URL al iniciar la aplicación.
- Mantiene las funcionalidades de [Dataverse](https://github.com/dinciarte/DEV012-dataverse): visualización, filtrado, ordenamiento y cálculo estadístico de la data.
- Al hacer clic en una tarjeta de personaje, redirige a una vista con su propia URL que muestra información detallada.
- Permite configurar la API Key para la interacción con la API de OpenAI.
- Utilizando la API de OpenAI, permite al usuario interactuar con un personaje a través de un chat, obteniendo respuestas informativas y personalizadas según las preguntas.
- Permite interactuar simultáneamente con todos los personajes a través de un chat, adaptando las respuestas a cada personaje y mostrándolas en el orden de recepción.
- Informa a la usuaria sobre posibles errores al interactuar con la API, proporcionando descripciones claras y posibles soluciones.

## 5. Cómo leer el readme

### `src/components`

Esta carpeta contendrá archivos JavaScript
que representan componentes 
reutilizables en la aplicación. Estos componentes
pueden ser elementos de la interfaz de usuario que se utilizan en varias partes
de la aplicación.

   - ### ./apiKey.js
      En este documento se encuentran los elementos necesarios para crear dinámicamente una sección de interfaz para que los usuarios puedan ingresar una API key valida. Esta sección incluye elementos HTML como campos de texto, botones y mensajes informativos. 
  
   - ### ./btnChat.js
       Componente que permite generar botones interactivos que controlan la navegación basada en la existencia y validez de claves de API almacenadas en el navegador.

   - ### ./chatConteiner.js
       Crea una vista de chat interactiva en la interfaz. Permite a los usuarios enviar mensajes a un personaje identificado por su ID, actualizando dinámicamente la conversación en tiempo real en función de los mensajes enviados.

   - ### ./filterOrderBar.js
       Genera una sección de filtros en la interfaz de usuario. Esta sección proporciona opciones de filtrado y ordenamiento para elementos, como una lista de personajes. Ofrece controles para seleccionar el origen, grupo, estado vital, y orden alfabético o de recompensa. Además, incluye botones para borrar los filtros aplicados y un botón que navega a otra vista('Facts').

   - ### ./footer.js
       Crea un elemento de pie de página en la interfaz. Este pie de página se muestra en todas las vistas de la SPA.

   - ### ./header.js
       Crea un encabezado de página en la interfaz. Este encabezado se muestra en todas las vistas de la SPA.

   - ### ./homeButton.js
       Genera un botón de inicio en la interfaz. Este botón, representado por una imagen de una casa, se utiliza para la navegación o para dirigir al usuario a la página principal de la aplicación.

   - ### ./renderCards.js
       Crea una lista de tarjetas en la interfaz basada en los datos proporcionados. Utiliza un conjunto de datos para generar elementos de lista (li) que contienen información como nombre, imagen, descripción corta y un hecho relacionado a la tématica. Cada tarjeta representa un elemento de la lista de datos y está estructurada con etiquetas HTML semánticas.

   - ### ./renderChrDetails.js
       Crea dinámicamente una sección de detalles, según el id de un personaje en la interfaz. Esta sección muestra información clave, como nombre, imagen, descripción corta, recompensa y una descripción más extensa del personaje. Además, incluye un botón generado mediante la función createBtnChat para iniciar un chat con el personaje.

   - ### ./renderFacts.js
       Crea una sección en la interfaz para mostrar estadisticas de hechos específicos sobre los personajes. Utiliza elementos HTML para organizar la información en tarjetas.


### `src/data`

En esta carpeta están los datos generados con ayuda de inteligencia artificial, para alimentar el contenido de la aplicación.

### `src/lib`

Aquí se guardan las funciones que te permiten filtrar,
ordenar, hacer cálculos estadisticos y captar la información de un personaje gracias a su id. También se encuentran archivos con
las funciones que
interactuan con la API de inteligencia artificial y una carpeta con imagenes varias de la app.

### `src/views`

Contiene archivos de las diferentes páginas o vistas de la aplicación.
Cada vista exporta una función que es responsable de generar
los elementos del DOM.

   - ### ./apiConfig.js
       construye una vista para la configuración de la API en la interfaz.

   - ### ./details.js
       construye una vista para los detalles del personaje en la interfaz.

   - ### ./error.js
       construye una vista de error 404.

   - ### ./facts.js
       construye una vista para mostrar las estadisticas de los hechos de los personajes en la interfaz.

   - ### ./home.js
       Exporta un componente home que representa la vista principal de la aplicación. Incluye elementos como encabezado, barra de filtros, cartas de personajes, y pie de página. El componente establece interacciones para filtrar, ordenar y limpiar las cartas de personajes en función de filtros específicos como origen, tripulación y estado. También presenta un botón para ir a un chat en el cual pueda interactuar con los personajes.

   - ### ./panelCharacter.js
       construye una vista de chat que se carga con el identificador del personaje para chatear con el personaje en cuestión.

### `src/index.html`

En este archivo
HTML se encuentra un elemento DOM `<div id='root'></div>` donde se
renderizar las diferentes vistas de la aplicación.

### `src/index.js`

En este archivo, se definen las rutas de la aplicación y se importan los componentes asociados para renderizar cada ruta. Se establece un contenedor de vista obtenido del documento HTML, se definen las rutas junto con los componentes, títulos correspondientes y cambios en el historial de navegación.

### `src/router.js`

Proporciona un conjunto de funciones para manejar la navegación y renderización de vistas. Estas funciones están diseñadas para gestionar los cambios de URL, renderizar las vistas correspondientes según las rutas definidas y manipular el historial del navegador.

### `src/style.css`

Se encuentran los estilos de la SPA.


## 6. Objetivos de aprendizaje

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/dom/1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

- [ ] **Ruteado (History API, evento hashchange, window.location)**

  <details><summary>Links</summary><p>

  * [Manipulando el historial del navegador - MDN](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
</p></details>

- [ ] **Browser storage (localStorage, sessionStorage)**

  <details><summary>Links</summary><p>

  * [Window.localStorage - MDN](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
</p></details>

- [ ] **Fetch API**

  <details><summary>Links</summary><p>

  * [Fetch API - MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
</p></details>

### JavaScript

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [ ] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/basics/values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/basics/variables)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/functions/arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/objects/objects)
</p></details>

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

### HTTP

- [ ] **Cabeceras (headers)**

  <details><summary>Links</summary><p>

  * [HTTP headers - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)
</p></details>

- [ ] **Consulta o petición (request) y respuesta (response).**

  <details><summary>Links</summary><p>

  * [Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)
  * [Mensajes HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
</p></details>

- [ ] **Códigos de status de HTTP**

  <details><summary>Links</summary><p>

  * [Códigos de estado de respuesta HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
  * [The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
</p></details>

### AI Prompting

- [ ] **Priming Chatbots**

  <details><summary>Links</summary><p>

  * [Priming Chatbots | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/es/docs/basics/priming_prompt)
</p></details>

- [ ] **OpenAI API**

  <details><summary>Links</summary><p>

  * [Introduction - API Reference - OpenAI API](https://platform.openai.com/docs/introduction)
  * [Authentication - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/authentication)
  * [Making requests - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/making-requests)
  * [The chat completion object - API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/chat/object)
</p></details>

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

## 7. Problemas de usabilidad

  Si no deseas chatear más con ningun personaje y antes de abandonar la página, se debe entrar a la vista de configuración de la API para borrar la API key. El anterior problema de usabilidad aplica solo para Laboratoria.
