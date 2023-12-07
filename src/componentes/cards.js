export function renderItems(data) {
    const ul = document.createElement('ul');
    ul.className='ulClass';
    let liCompilados="";
    let datosTarjetas="";
      for (const element of data) {
    
        //elementos li
        let li=document.createElement('li');
        li.className='liClass';
        li.setAttribute('itemscope', '');
        li.setAttribute('itemtype', 'Artist');
        li.setAttribute('data-id', element.id);
    
        //ahora, cada elemento li tiene un elemento dl que contiene a la imagen, el dt y el dd. Primero hacer el elemento dl
    
        const dl = document.createElement('dl');
        dl.setAttribute('itemscope', '');
        dl.setAttribute('itemtype','Artist');
    
        //aquí se crea el elemento de la imagen y se anexa al elemento dl
        //const img = document.createElement('img');
        //img.className= 'image';
        //img.src = element.imageUrl;
        //img.alt='imagen';
        
        
    
        datosTarjetas = `
        <img class="imag" src="${element.imageUrl}" alt="imagen"/>
        <dt><strong>Nombre:</strong></dt><dd itemprop="name">${element.name}</dd>
      <dt><strong>Descripción:</strong></dt><dd itemprop="description">${element.shortDescription}</dd>
      <dt><strong>Género:</strong></dt><dd itemprop="genre">${element.facts.genre}</dd>
      <dt><strong>Número de Albumnes:</strong></dt><dd itemprop="albums">${element.facts.albums}</dd>
      <dt><strong>Solista o grupo:</strong></dt><dd itemprop="artist">${element.facts.artist}</dd>
        `  
        dl.innerHTML=datosTarjetas;
        li.appendChild(dl);
        liCompilados= li;
        ul.appendChild(liCompilados);
        };
      
        
       
        return ul;
      }
      
    
    
    