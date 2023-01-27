//Global Scope
const url = "https://rickandmortyapi.com/api/character/";
const secretTitleAlert = document.getElementsByTagName("h1");
const cardsContainer = document.getElementById("card-container");
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
  const likeSection = createEl('div');
  const likeCount = createEl('span');
  const likeButton=createEl('button');
  const card = createEl("article");
  const imageElement = createEl("img");
  const nameElement = createEl("p");
  const detailsContainer = createEl("div");
  const originElement = createEl("p");
  const speciesElement = createEl("p");
  const statusElement = createEl("p");
  const dropDownButton = createEl("button");

  //Likes Information Here
  let likes = 0;
  likeCount.textContent = "0 likes";
  likeButton.textContent = "♥";
  likeSection.append(likeCount, likeButton);
  imageElement.setAttribute("class", "image-class");

  //Character Card Information Here
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

  //Event Handlers Here
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
  secretTitleAlert[0].addEventListener("click", (banana) => window.alert("🍌🍌🍌BANANAS MORTY! BANANAS!🍌🍌🍌", letsGetSchwifty));
  
  //Append Here
  card.append(nameElement, imageElement, dropDownButton, detailsContainer, likeSection,);
  detailsContainer.append(originElement, speciesElement, statusElement);
};
  
//Shortcut Functions Here

function createEl(id){
  return document.createElement(id);
}
  
//BONUS GOAL:
//1.Create like button at the bottom right corner of each character card.X
//2.Have number of likes display next to heart and have it increment by 1 for each click.
//3.let each picture have its own unique likeCount