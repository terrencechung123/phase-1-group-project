//why does picture pop out when hovered?

const url = "https://rickandmortyapi.com/api/character/";
const cardsContainer = document.getElementById("card-container");
const titleAlert = document.getElementsByTagName("h1");
titleAlert[0].addEventListener("click", (banana) => window.alert("banana!"));
const form = document.createElement('form')
//create a like button in html
//put it inside each character card
//have it increment + 1 every time it is clicked



fetch(url)
.then((resp) => resp.json())
.then((data) => {
  const character = data.results.splice(0,5)
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
  /////////////////////////cureentlyWOrking On Dis
  //  //<button id="like-button" class="like-button">♥</button>
  const likeButton=document.createElement('button');
  likeButton.textContent = "♥";

///////////////////////////
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
    });


    card.append(nameElement, imageElement, dropDownButton, detailsContainer, likeButton);
    detailsContainer.append(originElement, speciesElement, statusElement);
  };



//////THIS IS THE LIKE BUTTON IN JS////////////////////////
//////THIS IS THE LIKE BUTTON IN JS////////////////////////

  //BONUS GOAL:
  //1.Create like button at the bottom right corner of each character card.X
  //2.Have number of likes display next to heart and have it increment by 1 for each click.
  //3.let each picture have its own unique likeCount

  //article class "container"