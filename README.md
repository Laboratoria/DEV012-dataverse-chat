Dataverse -Chat

Índice

[1. Preámbulo del desarrollo](#1-preámbulo)

[2. Creación de la data mediante uso de IA](#2-creación-de-la-data-mediante-el-uso-de-ia)

[3. Historias de usuarias](#3historias-de-usuarios)

[4. Diseño de la página](#4-diseño-de-la-página)

[5. Problemas detectados en tests de usabilidad](#5-problemas-detectados-en-tests-de-usabilidad)

[6. Funcionalidades](#6-funcionalidades)

[7. Consideraciones técnicas](#7consideraciones-técnicas)

[8. ApiKey](#8apikey)

[9. Prueba unitarias y Test](#9prueba-test-y-unitarias)

[10.Despliegue en Vercel](#10-despliegue-en-vercel)

## 1. Preámbulo

Este proyecto que es la continuacion del proyecto anterior, llamado DataVerse, la cual pudimos reutilizar la data obtenida por la inteligencia artificial y poder construir una página SPA. Este proyecto esta diseñado para que el usuario pueda filtrar y ordenar sus personajes , conocer la estadistica de recompensa y tiene la posibilidad de interactuar con sus personajes preferidos.

## 2. Creación de la data mediante el uso de IA.

Estamos en una etapa donde la inteligencia artificial nos permite obtener información rápida y precisa, a través de un prompting, se solicitó que se creara un objeto de 24 personajes de One Piece y que cada una tuviera un arreglo con unos valores.

## 3.Historias de usuarios

One Piece, ha cautivado a innumerables fanáticos con sus personajes fascinantes y sus historias envolventes. Como equipo de desarrollo, reconocemos la pasión y el interés de nuestros usuarios por explorar a fondo a los personajes que han llegado a amar. Con el objetivo de proporcionar una experiencia más enriquecedora y satisfactoria, nos propusimos a implementar la funcionalidad de "Visualizar a detalle su personaje preferido" y asi como también permitirle la interacción con ellos a través de la IA. Para eso nos hicimos las siguientes preguntas: 

* Como usario quiero poder filtrar los personajes para conocer su origen y tripulación. 

* Como usuario quiero poder ordenar los personajes de manera ascendente y descendente.

* Como usuario quiero poder ordenar los personajes por recompesa más baja y más alta para poder visualizarla y compararlas con otros personajes. 

* Como usuario quiero ingresar la apiKey para poder chatear con todos los personajes. 

* Como usuario quiero un botón para poder ingresar la apiKey y que este quede almacenada y me permita chatear tanto con el personaje individual como el grupal.

## 4. Diseño de la página

En este proyecto se pudo realizar el diseño de alta fidelidad a través de Figma y que pudiera ser de manera responsiva para moviles.

Imagen#1 Prototipo diseño de escritorio.

![Prototipo #1 diseño de escritorio](/src/img/imagen%20_1.png)

Imagen#2 Prototipo diseño de escritorio chat individual.

![Prototipo #2 diseño de escritorio chat individual](/src/img/imagen%20_2.png)

Imagen#3 Prototipo diseño de escritorio chat grupal.

![Prototipo #3 diseño de escritorio chat grupal](/src/img/chat%20_grupal.png)

## 5. Problemas detectados en tests de usabilidad

El primer prototipo se planteó el chat individual del personaje y dentro de ella tuviera un botón que permitiera chatear con todos los personajes, la cual fue mostrada a nuestras compañeras y coaches y llegaron a la conclusión que generaba confunsión, recomendando que el chat grupal y el chat individual debia ser independiente; razón por la cual se realizó correcciones quedando asi: un botón que solicita el ApiKey, la cual es requerido para el chat con los personajes tanto individual como grupal, de no ser colocado  no podra chatear con los personajes,y si el usuario intenta chatear con el personaje individual sin colocar la ApiKey, esta la redirigirirá  a la ruta de ApiKey y sucederá lo mismo si el usuario selecciona el chat grupal sin colocar la ApiKey.


Prototipo revisado por el usuario

![Prototipo  revisado por el usuario](/src/img/imagen_usabilidad%20(1).png)

Diseño actual donde el usuario puede colocar la apiKey y pueda interactuar con los personajes de manera individual o grupal.

![Diseño actual que permite tener por separado el chat individual del chat grupal y la opción de colocar la api Key](/src/img/pantallaOriginal.png)

## 6. Funcionalidades

El objetivo de este proyecto, se requeria construir una página SPA que tuviera las mismas funcionalidades del proyecto anterior de filtar, ordenar y un boton para volver a la página principal y se le agregó que pudiera interactuar con los personajes a través de la IA. Para esto es requerido un ApiKey para que las conversaciónes con los personajes se pueda ejecutar.

## 7.Consideraciones técnicas   

El proyecto tiene esta estructura detallada y requeridas para poder tener todo segmentados y poder reutilizar los componentes para la vista de las páginas diseñadas para los personajes y la estadistica.

![Diseño del proyecto](/src/img/diseño_%20del_%20proyecto.png)

## 8.ApiKey

Incorporamos un botón llamado Api Key , que a través de un input solicita la apiKey, esto le va a permitir al usuario interactuar con cualquier personaje de manera individual o grupal. De no colocarse la apiKey no podrá comunicarse con su personaje y le arrojara un error.

## 9.Prueba unitarias 

Se realizó test home.spec.js, la cual se validaron los componentes que conforman el home que son: header, navegation, cards y el footer. El test de dataFuntion que permite verficar que las funciones implementadas para filtar , ordenar y mostrar la estadisica esten funcionando correctamente.


## 10. Despliegue en Vercel

Este proyecto esta desplegado en Vercel y la puede encontrar en : https://dev-012-dataverse-chat.vercel.app/?_vercel_share=WeZ1UZLvnT2bSbP2TNmgb6ThOmj8E7nf
