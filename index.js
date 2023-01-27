//Global Scope
const url = "https://rickandmortyapi.com/api/character/";
const secretTitleAlert = document.getElementsByTagName("h1");
  secretTitleAlert[0].addEventListener("click", (banana) => window.alert("🍌🍌🍌BANANAS MORTY! BANANAS!🍌🍌🍌"));
const handleDropDown = (event, container) => { 
  event.preventDefault();
  container.className = container.className === "hide" ? "show" : "hide";
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const character = data.results.splice(0,5);
    character.forEach(renderCharacterApi);
  });
  
function renderCharacterApi(character){
  //Creating Elements and Modifications Here
  const card = createEl("article");
    card.className = "container";
  const imageElement = createEl("img");
    imageElement.setAttribute("class", "image-class");
    imageElement.src = character.image;
    imageElement.alt = `Picture of ${character.name}`;
    imageElement.id = "imageId";
  const nameElement = createEl("p");
    nameElement.className = "charName";
    nameElement.textContent = character.name;
  const detailsContainer = createEl("div");
    detailsContainer.className = "hide";
  const originElement = createEl("p");
    originElement.textContent = `Place of origin: ${character.origin.name}`;
  const speciesElement = createEl("p");
    speciesElement.textContent = `Species: ${character.species}`;
  const statusElement = createEl("p");
    statusElement.textContent = `Status: ${character.status}`;
  const dropDownButton = createEl("button");
    dropDownButton.textContent = "See Details";
  const cardsContainer = document.getElementById("card-container");
    cardsContainer.className = "container";

  //"Likes" Information Here
  const likeSection = createEl('div');
  const likeCount = createEl('span');
    likeCount.textContent = "0 likes";
    likeCount.id = "like-count";
  const likeButton=createEl('button');
    likeButton.textContent = "♥";
    let likes = 0;
    
    //addEventHandlers() Here
    imageElement.addEventListener(`mouseenter`, () => {
      imageElement.style.border = `12px ridge limegreen`;
    });
    imageElement.addEventListener(`mouseleave`, () => {
      imageElement.style.border = `none`;
    });
    likeButton.addEventListener('click', (e)=>{
      likes += 1;
      likeCount.textContent = `${likes} likes`;
    });
    dropDownButton.addEventListener('click', (event)=>{
      handleDropDown(event, detailsContainer);
    });
    
    //Append() Here
    cardsContainer.append(card);
    card.append(nameElement, imageElement, dropDownButton, detailsContainer, likeSection,);
    detailsContainer.append(originElement, speciesElement, statusElement);
    likeSection.append(likeCount, likeButton);
  };
  
//Shortcut Functions Here
function createEl(id){
  return document.createElement(id);
}
  
//BONUS GOAL:
//1.Create like button at the bottom right corner of each character card.X
//2.Have number of likes display next to heart and have it increment by 1 for each click.
//3.let each picture have its own unique likeCount
