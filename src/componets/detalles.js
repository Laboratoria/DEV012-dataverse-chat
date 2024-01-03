export const renderDetails = (data) => {

  const detallesContenedor = document.createElement("div");
  detallesContenedor.classList.add("detalles-contenedor");

  for (const detalles of data) {

  const logoDetalles = document.createElement("img");
    detallesContenedor.appendChild(logoDetalles);
logoDetalles.setAttribute('id','logoDetalles');
    logoDetalles.src = detalles.logo;

  const fotoPersonaje = document.createElement("img");
    detallesContenedor.appendChild(fotoPersonaje);
fotoPersonaje.setAttribute('id','fotoPersonaje')
    fotoPersonaje.src = detalles.personajeUrl;

  const descripcion = document.createElement("div");
    detallesContenedor.appendChild(descripcion);
descripcion.setAttribute('id', 'descripcion');
    descripcion.textContent = "Descripción: " + detalles.description;
    

  const lanzamiento = document.createElement("div");
    detallesContenedor.appendChild(lanzamiento);
lanzamiento.setAttribute('id', 'lanzamiento');
    lanzamiento.textContent = "Año de lanzamiento: " + detalles.facts.yearReleased;


  const generoJuego = document.createElement("div");
    detallesContenedor.appendChild(generoJuego);
generoJuego.setAttribute('id', 'generoJuego');
    generoJuego.textContent = "Genero: " + detalles.facts.gender;


  const estiloDeJuego = document.createElement("div");
    detallesContenedor.appendChild(estiloDeJuego);
estiloDeJuego.setAttribute('id', 'estiloDeJuego');
    estiloDeJuego.textContent = "Estilo de juego: " + detalles.facts.playingStyles;


  const perspectivaJuego = document.createElement("div");
    detallesContenedor.appendChild(perspectivaJuego);
perspectivaJuego.setAttribute('id', 'perspectivaJuego');
    perspectivaJuego.textContent = "Perspectiva: " + detalles.facts.pointsOfView;


  const multiplayerJuego = document.createElement("div");
    detallesContenedor.appendChild(multiplayerJuego);
multiplayerJuego.setAttribute('id', 'multiplayerJuego');
    multiplayerJuego.textContent = "Multiplayer: " + detalles.facts.multiplayer;

}
  return detallesContenedor;
};
