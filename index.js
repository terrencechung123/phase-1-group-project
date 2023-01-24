const url = "https://rickandmortyapi.com/api/character/";

const cardsContainer = document.getElementById("card-container");


cardsContainer.className = 'container'
// addEventListener(`mouseenter`, addMouseHover)

//click title will make an alert that says banana

const titleAlert = document.getElementsByTagName('h1');
titleAlert[0].addEventListener('click',(banana)=>window.alert('banana!'));

cardsContainer.className = "container";





fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    // console.log(data.results);
    const characterList = data.results;
    characterList.forEach((character) => {
      console.log(character);
      const card = document.createElement("article");
      // create and populate name element
      const nameElement = document.createElement("p");
      nameElement.textContent = character.name;
      // create and populate image element
      const imageElement = document.createElement("img");
      imageElement.src = character.image;
      imageElement.alt = `Picture of ${character.name}`;
      imageElement.id = "imageId";
      // create place of origin element
      const originElement = document.createElement("p");
      originElement.textContent = `Place of origin: ${character.origin.name}`;
    imageElement.setAttribute('class', 'image-class')
    //
imageElement.addEventListener(`mouseenter`, () => { console.log(`mouse enter`)});
imageElement.addEventListener(`mouseleave`, () => {console.log(`mouse leave`)})

      card.className = 'container'

      // create species detail
      const speciesElement = document.createElement("p");
      speciesElement.textContent = `Species: ${character.species}`;
      // create status detail
      const statusElement = document.createElement("p");
      statusElement.textContent = `Status: ${character.status}`;

      card.className = "container";

      cardsContainer.append(card);
      card.append(
        nameElement,
        imageElement,
        originElement,
        speciesElement,
        statusElement,
      );
    });
  });

// function addMouseHover(e){
//   e.preventDefault()
// e.target.imageElement
// console.log(`mouseender`, e.target.imageElement)

// }