# Dataverse Chat

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Criterios de aceptación mínimos del proyecto](#6-criterios-de-aceptación-mínimos-del-proyecto)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Consideraciones para pedir tu Project Feedback](#9-consideraciones-para-pedir-tu-project-feedback)

***

## 1. Preámbulo

Warsiepedia es una plataforma web diseñada con la premisa de ofrecer una experiencia inmersiva sobre los personajes del universo Star Wars, Warsiepedia permite a los usuarios explorar de manera interactiva un extenso conjunto de datos sobre sus personajes favoritos de la saga. Siguiendo el modelo de Single Page Application (SPA) y aprovechando la potencia de la inteligencia artificial desarrollada por OpenAI, Warsiepedia permite interactuar con los personajes de Star Wars a través de un innovador sistema de chat. Para acceder a esta función, los usuarios utilizan una API key que facilita la conexión con la interfaz de OpenAI, permitiendo así conversaciones individuales con cada personaje.

Las tarjetas interactivas de Warsipedia proporcionan detalles clave de cada personaje, como su nombre, afiliación y una breve descripción. Al hacer clic en una tarjeta específica, los usuarios pueden sumergirse aún más en la experiencia al acceder a un chat exclusivo con el personaje seleccionado. Este chat proporciona una plataforma única para dialogar con los héroes y villanos icónicos de Star Wars, permitiendo a los usuarios explorar sus historias, motivaciones y obtener respuestas a preguntas específicas.

Con la combinación de la tecnología de OpenAI y la riqueza de información proporcionada, Warsiepedia se presenta como la plataforma definitiva para los fanáticos de Star Wars que buscan explorar y comprender a fondo el universo que tanto aman.


[![read-me-1.png](https://i.postimg.cc/YC79T54j/read-me-1.png)](https://postimg.cc/ykfsZryz)

## 2. Resumen del proyecto

Warsipedia redefine la exploración del universo Star Wars al proporcionar a los usuarios una experiencia inmersiva mediante tarjetas interactivas que detallan información crucial de los personajes, como su nombre, afiliación y descripción. Todo esto en una Single Page Aplication y con el respaldo de la tecnología de OpenAI, la plataforma permite a los usuarios participar en conversaciones individualizadas a través de un innovador sistema de chat, accesible mediante una API key. La capacidad de filtrar y ordenar los personajes agrega un toque personalizado a la búsqueda. Warsipedia se erige como una herramienta esencial para los fanáticos, ofreciendo no solo datos detallados, sino también una conexión única con los personajes emblemáticos de Star Wars.

[![objetivos.png](https://i.postimg.cc/zBKk7LVV/objetivos.png)](https://postimg.cc/hz4xPt8B)


## 3. Funcionalidades

El entregable final es una Single Page Application (SPA) que permite al usuario visualizar la información, filtrarla y ordenarla. Además, posibilita el acceso a una página que muestre el detalle de cada personaje para interactuar con cada entidad del conjunto de datos utilizado anteriormente.

A continuación, detallamos las funcionalidades con las que cumple el proyecto: 

* La aplicación es responsive.
* La aplicación es una SPA con múltiples vistas:
-Implementa un sistema de enrutamiento que permite la navegación dentro de la aplicación.
-Cada vista de la aplicación se carga dinámicamente mediante JavaScript.
-Asegura que la URL se actualice de acuerdo con la vista cargada, así como el title del documento (la pestaña del navegador).
-La aplicación es capaz de cargar la vista correspondiente a la URL actual al iniciar la aplicación.
* La aplicación mantiene las funcionalidades de Warsipedia: visualizar, filtrar y ordenar.
* Al hacer clic en una tarjeta de personaje/entidad, la aplicación se redirige a una vista con su propia URL que muestra la información detallada sobre ese personaje/entidad en particular.
* La aplicación permite a la usuaria configurar la API Key para interactuar con la API de Open AI.
* Usando la API de Open AI, la aplicación permite al usuario interactuar con un personaje/entidad a través de un chat.


## 4. Solución de problema 


### Definición del producto

En el proceso de diseño de Warsipedia, nos embarcamos en la misión de crear una plataforma que no solo proporcionara datos detallados sobre los personajes de Star Wars, sino que también ofreciera una experiencia interactiva y personalizada para los usuarios. Comenzamos por comprender las necesidades de las usuarias, identificando los problemas comunes que podrían enfrentar al explorar información extensa sobre personajes de la saga.

La primera etapa del diseño se centró en la creación de una interfaz intuitiva y responsive, garantizando que Warsipedia sea accesible en cualquier dispositivo. La implementación de una Single Page Application (SPA) con un sistema de enrutamiento permitió una navegación fluida y dinámica, mejorando la experiencia del usuario al cargar vistas de manera eficiente y actualizar la URL de manera acorde.

### Valor agregado 

La funcionalidad clave de Warsipedia radica en  que brinda a las usuarias herramientas poderosas para explorar la información de manera efectiva y personalizada. La inclusión de tarjetas interactivas para cada personaje permite una visión rápida y detallada, mientras que la posibilidad de acceder a información específica con un clic proporciona una experiencia más profunda.

Mediante la integración de un sistema de chat utilizando la API de Open AI. Esto permite a las usuarias interactuar directamente con los personajes, ofreciendo una experiencia única y emocionante. Además, la configuración de la API Key brinda flexibilidad y personalización a las usuarias, permitiéndoles ajustar la interacción según sus preferencias.

### Historias de usuaria

Desarrollamos historias de usuario mediante un profundo research que se centró en las necesidades y preferencias de las usuarias. Este enfoque investigativo ayudó a identificar desafíos clave y a establecer criterios de aceptación claros. Las historias de usuario se plantearon con el objetivo de ofrecer una experiencia completa, desde la visualización de datos hasta la interacción con los personajes.

Al planificar los sprints, dividimos cada historia en tareas específicas para garantizar un progreso continuo. La prioridad era finalizar una Historia de Usuario antes de pasar a la siguiente, cumpliendo así con la Definition of Done y los Criterios de Aceptación establecidos. Este enfoque permitió una entrega incremental y una mejora constante, asegurando que cada funcionalidad cumpliera con los estándares definidos antes de avanzar al siguiente conjunto de tareas.

### Diseño de la Interfaz de Usuaria

#### Prototipo de baja y de alta fidelidad

En el proceso de prototipado de Warsipedia, utilizamos la plataforma Figma para crear prototipos tanto de baja como de alta calidad. Inicialmente, los prototipos de baja fidelidad se realizaron como wireframes a lápiz y papel, buscando plasmar la idea general y validar conceptos y flujos de usuario de manera rápida. Posteriormente, avanzamos hacia prototipos de alta fidelidad en Figma, reflejando con precisión el diseño final de la aplicación. Durante todo el proceso, nos esforzamos por cumplir con los fundamentos de Visual Design, asegurando coherencia estética, legibilidad y una experiencia visualmente atractiva. 

[![wireframes.jpg](https://i.postimg.cc/TPSpbMwX/wireframes.jpg)](https://postimg.cc/yJm1qGcf)

[![prototipos.png](https://i.postimg.cc/TwhvfVPQ/prototipos.png)](https://postimg.cc/WFRH7JgJ)


### Testeos de usabilidad

Durante las pruebas de usabilidad de Warsipedia, identificamos algunos desafíos clave que requerían soluciones en los prototipos finales. Uno de los problemas recurrentes fue la complejidad percibida en la navegación entre vistas de la aplicación. Para abordar esto, simplificamos la interfaz, optimizando el sistema de enrutamiento y asegurándonos de que la transición entre las diferentes secciones fuera intuitiva y clara.

Otro obstáculo común estuvo relacionado con la usabilidad del sistema de chat con los personajes. Algunos usuarios encontraron dificultades para comprender cómo iniciar y finalizar las conversaciones. En respuesta, mejoramos la claridad del diseño del chat, agregamos indicadores visuales y proporcionamos instrucciones más detalladas para hacer que la interacción fuera más fluida y comprensible. 

Finalmente, mediante la identificación y abordaje proactivo de los problemas encontrados en los test de usabilidad, logramos optimizar los prototipos finales de Warsipedia, mejorando la experiencia del usuario y garantizando una navegación intuitiva, una interacción fluida en el chat y un rendimiento eficiente en la carga de datos.

### Implementación de la Interfaz de Usuaria (HTML/CSS/JS)

En la implementación de la interfaz de usuario de Warsipedia, tras el diseño en prototipos de alta fidelidad, nos propusimos replicar fielmente la visión conceptual en código. Utilizamos HTML para estructurar la interfaz, CSS para estilizarla y Vanilla JavaScript para agregar funcionalidad dinámica. Implementamos funciones de filtrado y ordenamiento en JavaScript, cumpliendo con métricas de calidad de código como funciones, líneas y branches, asegurando un código eficiente y fácil de mantener.

Adicionalmente, abordamos aspectos de enrutamiento para garantizar una navegación fluida dentro de la aplicación. La integración de la API de Open AI se logró mediante llamadas a la API, permitiendo la interacción del usuario con los personajes a través de un sistema de chat personalizado.

Para asegurar la calidad del código, realizamos exhaustivas pruebas unitarias de testeo utilizando Jest. Estas pruebas validaron la funcionalidad de diversas partes de la aplicación, incluyendo las funciones de filtrado y ordenamiento, contribuyendo así a la robustez del código y asegurando la estabilidad y confiabilidad de Warsipedia en todas sus funcionalidades.
