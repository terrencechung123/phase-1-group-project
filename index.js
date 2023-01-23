//rick smith,morty smith,summer smith, beth smith, jerry smith
const url = "https://rickandmortyapi.com/api/character/";
const rickSanchez = el("rick");
const mortySmith = el("morty");
const summerSmith = el("summer");
const bethSmith = el("beth");
const jerrySmith = el("jerry");

const rickImage = el("rick-image");
const mortyImage = el("morty-image");
const summerImage = el("summer-image");
const bethImage = el("beth-image");
const jerryImage = el("jerry-image");

fetch(url)
  .then((resp) => resp.json())
  .then(ricknmorty);

function ricknmorty(data) {
  rickImage.src = data.results[0].image;
  mortyImage.src = data.results[1].image;
  summerImage.src = data.results[2].image;
  bethImage.src = data.results[3].image;
  jerryImage.src = data.results[4].image;

  // Get a HTML collection of all article elements.

  const articleElements = document.getElementsByTagName("article");
  //Turn the HTML collection into a proper array so we can iterate through it.
  Array.from(articleElements).forEach((element, index) => {
    // console.log(element, index, data.results[index]);
    // Use our current index within the array to set the inner text to our data.results index. Because our data comes back in the same order as our HTML.
    element.innerText = data.results[index].origin.name;
  });

  //el("rick-article").innerText = data.results[0].origin.name;

  rick();
  morty();
  summer();
  beth();
  jerry();
}

function rick(data) {}

function morty(data) {}

function summer() {}

function beth(data) {}

function jerry(data) {}

function el(id) {
  return document.getElementById(id);
}
