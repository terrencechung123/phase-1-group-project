//marcussbranch
//rick smith,morty smith,summer smith, beth smith, jerry smith
const url = "https://rickandmortyapi.com/api/character/";
const rickSanchez = createEl("rick-sanchez");
const mortySmith = createEl("morty-smith");
const bethSmith = createEl("beth-smith");
const jerrySmith = createEl("jerry-smith");

document.body.appendChild(rickSanchez);

fetch(url)
  .then((resp) => resp.json())
  .then(ricknmorty);

function ricknmorty(data) {
  console.log(data);
  rickSanchez.src = data.image;
}

function createEl(id) {
  return document.createElement(id);
}

likeBtn.addEventListener("click", (event) => {
  const newLike = (pageData.likes += 1);
  likes.textContent = newLike;
});
=======
const url = "https://rickandmortyapi.com/api/character/";

const cardsContainer = document.getElementById("card-container");

cardsContainer.className = 'container'


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
      // create place of origin element
      const originElement = document.createElement("p");
      originElement.textContent = `Place of origin: ${character.origin.name}`;
    
      card.className = 'container'
      cardsContainer.append(card);
      card.append(nameElement, imageElement, originElement);
    });
  });
//main
