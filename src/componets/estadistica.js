import data from "../data/dataset.js";

export function computeStats(data) {
  const estadisticas = data.reduce(
    (stats, juego) => {
      if (juego.facts.multiplayer === "Sí") {
        stats.juegosMultijugador += 1;
      } else {
        stats.juegosNoMultijugador += 1;
      }
      return stats;
    },
    { juegosMultijugador: 0, juegosNoMultijugador: 0 }
  );

  return estadisticas;
}

export const estadisticaJuegos = () => {
  const estadisticas = computeStats(data);
  
  const pEstadistica = document.createElement('p');
  pEstadistica.setAttribute('id', 'estadistica');
  pEstadistica.textContent = `Juegos Multijugador: ${estadisticas.juegosMultijugador}, Juegos No Multijugador: ${estadisticas.juegosNoMultijugador}`;


  return pEstadistica;
}
