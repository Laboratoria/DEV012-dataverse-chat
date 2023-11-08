

export const renderDetails = (data) => {
  const section = document.createElement("section");
  const div = document.createElement("div");
  div.setAttribute("itemscope", "");
  div.setAttribute("itemtype", "One Piece");
  div.classList.add("chr-cards");
  const h3 = document.createElement("h3");
  h3.setAttribute("itemscope", "");
  h3.setAttribute("itemtype", "One Piece");
  const img = document.createElement("img");
  data.for 
  img.src = data["imageURL"];


  
  section.appendChild(div);
  
  return section;
};

