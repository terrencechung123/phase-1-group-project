const url = "https://rickandmortyapi.com/api/character/";

const cardsContainer = document.getElementById("card-container");

const handleDropDown = (event, container) => {
  event.preventDefault();
  container.className = container.className === "hide" ? "show" : "hide";
};

//click title will make an alert that says banana
const titleAlert = document.getElementsByTagName("h1");
titleAlert[0].addEventListener("click", (banana) => window.alert("banana!"));

cardsContainer.className = "container";

fetch(url)

.then((resp) => resp.json())
.then((data) => {
  const character = data.results.splice(0,5);
  character.forEach(renderApiData)
});

function renderApiData(character){
  const card = document.createElement("article");
  const imageElement = document.createElement("img");
  const nameElement = document.createElement("p");
  const detailsContainer = document.createElement("div");
  const originElement = document.createElement("p");
  const speciesElement = document.createElement("p");
  const statusElement = document.createElement("p");
  const dropDownButton = document.createElement("button");
  const handleDropDown = (event, container) => { event.preventDefault(), container.className = container.className === "hide" ? "show" : "hide";};
  dropDownButton.addEventListener('click', (event) => { handleDropDown(event, detailsContainer);})
    imageElement.setAttribute("class", "image-class");
    card.className = "container";
    detailsContainer.className = "hide";
    nameElement.className = "charName";
    nameElement.textContent = character.name;
    imageElement.src = character.image;
    imageElement.alt = `Picture of ${character.name}`;
    imageElement.id = "imageId";
    originElement.textContent = `Place of origin: ${character.origin.name}`;
    speciesElement.textContent = `Species: ${character.species}`;
    statusElement.textContent = `Status: ${character.status}`;
    dropDownButton.textContent = "See Details";
    cardsContainer.className = "container";
    cardsContainer.append(card);

    //Event handlers
    imageElement.addEventListener(`mouseenter`, () => {
      imageElement.style.border = `12px ridge limegreen`;
    });
    imageElement.addEventListener(`mouseleave`, () => {
      imageElement.style.border = `none`;

  .then((resp) => resp.json())
  .then((data) => {
    const characterLisp = data.results;
    const characterList = characterLisp.slice(0,5);
   console.log(';aksjrdgvnhsadklrg',data.results)
    characterList.forEach((character) => {
      
      // console.log(character);
      const card = document.createElement("article");
      card.className = "container";
      // create and populate name element
      const nameElement = document.createElement("p");
      nameElement.textContent = character.name;
      nameElement.className = "charName";
      // create and populate image element
      const imageElement = document.createElement("img");
      imageElement.src = character.image;
      imageElement.alt = `Picture of ${character.name}`;
      imageElement.id = "imageId";
      // detailsContainer is the div for the drop down content
      const detailsContainer = document.createElement("div");
      detailsContainer.className = "hide";
      // create place of origin element
      const originElement = document.createElement("p");
      originElement.textContent = `Place of origin: ${character.origin.name}`;
      // create species detail
      const speciesElement = document.createElement("p");
      speciesElement.textContent = `Species: ${character.species}`;
      // create status detail
      const statusElement = document.createElement("p");
      statusElement.textContent = `Status: ${character.status}`;
      // creating the drop down button and listening for its "click"
      const dropDownButton = document.createElement("button");
      dropDownButton.textContent = "See Details";
      dropDownButton.addEventListener("click", (event) => {
        handleDropDown(event, detailsContainer);
      });

      imageElement.setAttribute("class", "image-class");
      // addEventListener(`mouseenter`, addMouseHover)
      imageElement.addEventListener(`mouseenter`, (e) => {
        imageElement.style.border = `12px ridge limegreen`;
      });

      imageElement.addEventListener(`mouseleave`, () => {
        imageElement.style.border = `none`;
      });

      imageElement.addEventListener(`mouseenter`, () => {});
      imageElement.addEventListener(`mouseleave`, () => {});

      cardsContainer.append(card);
      card.append(nameElement, imageElement, dropDownButton, detailsContainer);
      detailsContainer.append(originElement, speciesElement, statusElement);

    });
  });

// function addMouseHover(e){
//   e.preventDefault()
// e.target.imageElement
// console.log(`mouseender`, e.target.imageElement)

