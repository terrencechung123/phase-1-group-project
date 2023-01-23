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
