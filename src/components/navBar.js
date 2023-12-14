export const NavBar = () => {
    const NavBar = document.createElement ('section');
    NavBar.id = 'section';

    NavBar.innerHTML =  
    `<section class="navBar">
        <nav id="naviBar">
            <div class="naviBar">
        <label for="affiliation">Filter:</label>
        <select id="affiliation" name="affiliation" data-testid="select-filterAffiliation">
          <option disabled selected="">• Select Affiliation •</option>
          <option value="Rebel Alliance">Rebel Alliance</option>
          <option value="Galactic Empire">Galactic Empire</option>
          <option value="Jedi Order">Jedi Order</option>
          <option value="Sith">Sith</option>
          <option value="Independent/Mandalorian">Independent/Mandalorian</option>
          <option value="Separatists">Separatists</option>
          <option value="Neutral">Neutral</option>
        </select> 
        <label for="sortAZ">Sort:</label>
            <select id="sortAZ" name="sortAZ" data-testid="select-sort">
              <option disabled selected="">• Select Order •</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
        <button id="clearBtn" data-testid="button-clear">Clear</button>
            </div>
        </nav>
     </section>`

    return NavBar
    
};
