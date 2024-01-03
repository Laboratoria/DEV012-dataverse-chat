export const  vistaFiltro = () => {
  const filtrosHtml = `
    <div class="contenedor-flex">

    <label class="label-select" for="filtrar-por-género">Filtrar por género</label>
    <select  data-testid="select-filter"  name="género"  id="filtrar-por-género">
      <option value="nada"></option>
      <option value="Acción">Acción</option>
      <option value="Disparos">Disparos</option>
      <option value="Rol">Rol</option>
      <option value="Estrategia">Estrategia</option>
      <option value="Aventuras">Aventuras</option>
      <option value="Puzzle">Puzzle</option>
      <option value="Lucha">Lucha</option>
    </select>


    <label class="label-select" for="filtrar-por-POV">Filtrar por POV</label>
    <select data-testid="select-filter" name="POV"  id="filtrar-por-POV">
      <option value="nada"></option>
      <option value="Tercera persona">Tercera persona</option>
      <option value="Primera persona">Primera persona</option>
      <option value="Vista isométrica">Vista isométrica</option>
      <option value="Vista superior">Vista superior</option>
      <option value="Vista lateral">Vista lateral</option>
    </select>
    <label class="label-select" for="ordenar-por">Ordenar por</label>
    <select data-testid="select-filter" name="alfabet" id="ordenar-por">
      <option value="nada"></option>
      <option value="asc">A - Z</option>
      <option value="desc">Z - A</option>
    </select>

    <button data-testid="restablecerFiltros" name="limpiarFiltros" id="restablecer-Filtros">Restablecer Filtros</button>
    

    </div>
  <div class="contenedor-flex" id= "contenedor-2">
    <button data-testid="botonChatGrupal" name="chatGrupalBoton"  id="chatGrupal">Chat Grupal</button>
  </div>`;
  return filtrosHtml;
};

