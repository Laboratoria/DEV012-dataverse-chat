import { filtroGenero, filtroPOV, ordenaAZ, ordenaZA } from "../src/lib/dataFunctions.js";
import * as fakeData  from "../src/data/dataset.js";
import { footer } from "../src/componets/footer.js";
import { header } from "../src/componets/header.js";

describe("header", () => {
  it("Debe devolver un true si existe un header en la página", () => {
    const result = header();
    expect(typeof result).toBe('string');
    expect(result.includes('<header>')).toBe(true);
  });
});

describe("filtroGenero", () => {
  it("Debe devolver el total de juegos después de seleccionar el filtro acción", () => {
    const filteredData = filtroGenero(fakeData.default, "Aventuras");
  
    expect(filteredData.length).toBe(3);
  });
});

describe("filtroGenero", () => {
  it("Debe devolver el total de juegos después de seleccionar el filtro disparos", () => {
    const filteredData = filtroGenero(fakeData.default, "Disparos");
    
    expect(filteredData.length).toBe(8);
  });
});

describe("filtroPOV", () => {
  it("Debe devolver el total de juegos después de seleccionar el filtro POV opción 'Vista Superior'", () => {
    const filterData = filtroPOV(fakeData.default, "Vista superior");
    
    expect(filterData.length).toBe(3);
  });
});

describe("filtroPOV", () => {
  it("Debe devolver el total de juegos después de seleccionar el filtro POV opción 'Primera persona'", () => {
    const filterData = filtroPOV(fakeData.default, "Primera persona");
      
    expect(filterData.length).toBe(13);
  });
});

describe("ordenaAZ", () => {
  it("Debe devolver el nombre del juego en posicion 0 cuando se ordene de la A - Z sobre la data completa", () => {
    const sortedData = ordenaAZ(fakeData.default);
    const nombreJuego = sortedData[0].name;
  
    expect(nombreJuego).toBe("BioShock Infinite");
  });
});

describe("ordenaZA", () => {
  it("Debe devolver el nombre del juego en posicion 0 cuando se ordene de la z - a sobre la data completa", () => {
    const sortedDataDesc = ordenaZA(fakeData.default);
    const nombreJuego = sortedDataDesc[0].name;
    
    expect(nombreJuego).toBe("World of Warcraft");
  });
});

describe("footer", () => {
  it("Debe devolver un true si existe un footer en la página", () => {
    const result = footer();
    expect(typeof result).toBe('string');
    expect(result.includes('<footer>')).toBe(true);
  });
});