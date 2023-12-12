import { header } from "../src/components/header.js";
import { filterOrderBar } from "../src/components/filterOrderBar.js";
import { renderCards } from "../src/components/renderCards.js"
import { footer } from "../src/components/footer.js";
import { data } from "./dataset.js"

describe("Verificando header", () => {
  it("Verificamos que se pinte el header", () => {
    const headerComponent = header();
    const container = headerComponent.querySelector("#header");

    expect(container).toBeDefined();
  });
});

describe("Verificando filter bar", () => {
  it("Verificamos que se pinte el filter bar", () => {
    const filterBarComponent = filterOrderBar();
    const container = filterBarComponent.querySelector(".filters");

    expect(container).toBeDefined();
  });
});

describe("Verificando tarjetas", () => {
  it("Verificamos que se pinten las tarjetas", () => {
    const cardsComponent = renderCards(data);
    const container = cardsComponent.querySelector("#ul");

    expect(container).toBeDefined();
  });
});

describe("Verificando footer", () => {
  it("Verificamos que se pinte el footer", () => {
    const footerComponent = footer();
    const container = footerComponent.querySelector("#footer");

    expect(container).toBeDefined();
  });
});
