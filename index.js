const url = "https://rickandmortyapi.com/api/character/";
const cardsContainer = document.getElementById("card-container");
const titleAlert = document.getElementsByTagName("h1");
titleAlert[0].addEventListener("click", (banana) =>
  window.alert("🍌🍌🍌BANANAS MORTY! BANANAS!🍌🍌🍌"),
);
const form = document.createElement("form");

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    const character = data.results.splice(0, 5);
    character.forEach(renderApiData);
  });

function renderApiData(character) {
  const card = document.createElement("article");
  const imageElement = document.createElement("img");
  const nameElement = document.createElement("p");
  const detailsContainer = document.createElement("div");
  const originElement = document.createElement("p");
  const speciesElement = document.createElement("p");
  const statusElement = document.createElement("p");
  const dropDownButton = document.createElement("button");

  const likeSection = document.createElement("div");
  const likeCount = document.createElement("span");
  const likeButton = document.createElement("button");
  likeCount.textContent = "0 likes";
  likeCount.id = "like-count";
  likeButton.textContent = "♥";
  likeSection.append(likeCount, likeButton);
  let likes = 0;

  likeButton.addEventListener("click", (e) => {
    likes += 1;
    likeCount.textContent = `${likes} likes`;
  });

  const handleDropDown = (event, container) => {
    event.preventDefault(),
      (container.className = container.className === "hide" ? "show" : "hide");
  };
  dropDownButton.addEventListener("click", (event) => {
    handleDropDown(event, detailsContainer);
  });
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
    imageElement.style.border = `12px solid #8fc8d4`;
  });

  card.append(
    nameElement,
    imageElement,
    dropDownButton,
    detailsContainer,
    likeSection,
  );
  detailsContainer.append(originElement, speciesElement, statusElement);
}
//BONUS GOAL:
//1.Create like button at the bottom right corner of each character card.X
//2.Have number of likes display next to heart and have it increment by 1 for each click.
//3.let each picture have its own unique likeCount
