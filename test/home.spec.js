import { renderHome } from "../src/views/home.js";
import { renderNav } from "../src/components/nav.js";
import { renderHeader } from "../src/components/header.js";
import { renderItems } from "../src/components/cards.js";
import dataset from "../src/data/dataset.js";
import { renderFooter } from "../src/components/footer.js";




describe(" Validando Home", function () {

  it("Renderizando Home", function () {

    const HOMEVIEW = renderHome();
    const CONTENEDORPRINCIPAL = HOMEVIEW.querySelector("#mainContainer");
    expect(CONTENEDORPRINCIPAL).toBeDefined();
  })

})

describe(" Validando Nav", function () {

  it("Renderizando Nav", function () {

    const NAVVIEW = renderNav();
    const CONTENEDORPRINCIPAL = NAVVIEW.querySelector("#navHome");
    expect(CONTENEDORPRINCIPAL).toBeDefined();

  })

})


describe(" Validando Header", function () {

  it("Renderizando Header", function () {

    const HEADERVIEW = renderHeader();
    const CONTENEDORPRINCIPAL = HEADERVIEW.querySelector("#headerHome");
    expect(CONTENEDORPRINCIPAL).toBeDefined();

  })

})

describe(" Validando Card", function () {

  it("Renderizando Card", function () {

    const CARDVIEW = renderItems(dataset);
    const CONTENEDORPRINCIPAL = CARDVIEW.querySelector("#cardHome");
    expect(CONTENEDORPRINCIPAL).toBeDefined();

  })

})

describe(" Validando Footer", function () {

  it("Renderizando Footer", function () {

    const FOOTERVIEW = renderFooter();
    const CONTENEDORPRINCIPAL = FOOTERVIEW.querySelector("#footerHome");
    expect(CONTENEDORPRINCIPAL).toBeDefined();

  })

})