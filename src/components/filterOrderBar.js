export const filterOrderBar = () => {
  const section = document.createElement("section");
  section.classList.add("filters");
  section.innerHTML = `
  <button class="home-btn"><img class="home" src="./lib/img/home-button.png" alt=""/></img></button>
      <nav>
        <label for="menu">☰</label>
        <input type="checkbox" id="menu">
        <div>
          <label for="origin">Filter:</label>
          <select id="origin" name="origin" data-testid="select-filterOrigin">
            <option disabled selected value="">Select Origin</option>
            <option value="East Blue">East Blue</option>
            <option value="North Blue">North Blue</option>
            <option value="West Blue">West Blue</option>
            <option value="South Blue">South Blue</option>
            <option value="Grand Line">Grand Line</option>
            <option value="New World">New World</option>
            <option value="Unknown">Unknown</option>
          </select>
          <label for="crew">Filter:</label>
          <select id="crew" name="crew" data-testid="select-filter">
            <option disabled selected value="">Select Crew</option>
            <option value="Straw Hat Pirates">Straw Hat Pirates</option>
            <option value="Kuja Pirates">Kuja Pirates</option>
            <option value="Marines">Marines</option>
            <option value="Blackbeard Pirates">Blackbeard Pirates</option>
            <option value="Big Mom Pirates">Big Mom Pirates</option>
            <option value="Heart Pirates">Heart Pirates</option>
            <option value="Revolutionaries">Revolutionaries</option>
            <option value="Red-Haired Pirates">Red Haired Pirates</option>
            <option value="Kid Pirates">Kid Pirates</option>
            <option value="Baroque Works">Baroque Works</option>
            <option value="Spade Pirates">Spade Pirates</option>
            <option value="Roger Pirates">Roger Pirates</option>
            <option value="Buggy Pirates">Buggy Pirates</option>
            <option value="Bonney Pirates">Bonney Pirates</option>
          </select>
          <label for="status">Filter:</label>
          <select id="status" name="status" data-testid="select-filterStatus">
            <option disabled selected value="">Select Status</option>
            <option value="Deceased">Deceased</option>
            <option value="Alive">Alive</option>
          </select>
          <label for="a-to-z">Sort:</label>
          <select id="a-to-z" name="a-to-z" data-testid="select-sort">
            <option disabled selected value="">Select Order</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
          <label for="bounty">Sort:</label>
          <select id="bounty" name="bounty" data-testid="select-bounty">
            <option disabled selected value="">Select Bounty</option>
            <option value="asc">Lowest</option>
            <option value="desc">Highest</option>
          </select>
          <button data-testid="button-clear">Clear</button>
          <button id="facts" class="button">Facts</button>
        </div>
      </nav>`;
  return section;
};
