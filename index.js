const url = "https://rickandmortyapi.com/api/character/";
// a comment

const cardsContainer = document.getElementById("card-container");


cardsContainer.className = "container";
// addEventListener(`mouseenter`, addMouseHover)


cardsContainer.className = 'container'



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
    const characterList = data.results;
    characterList.forEach((character) => {


      // console.log(character);

      const card = document.createElement("article");
      card.className = "container";
      // create and populate name element
      const nameElement = document.createElement("p");
      nameElement.textContent = character.name;
      // create and populate image element
      const imageElement = document.createElement("img");
      imageElement.src = character.image;
      imageElement.alt = `Picture of ${character.name}`;
      imageElement.id = "imageId";
      // detailsContainer is the div for the drop down content
      const detailsContainer = document.createElement("div");
      detailsContainer.className = "hide";
      // creating the drop down button and listening for its "click"
      const dropDownButton = document.createElement("button");
      dropDownButton.textContent = "See Details";
      dropDownButton.addEventListener("click", (event) => {
        handleDropDown(event, detailsContainer);
      });

      // create place of origin element
      const originElement = document.createElement("p");
      originElement.textContent = `Place of origin: ${character.origin.name}`;


    imageElement.setAttribute('class', 'image-class')
    //
imageElement.addEventListener(`mouseenter`, () => { console.log(`mouse enter`)});
imageElement.addEventListener(`mouseleave`, () => {console.log(`mouse leave`)})


      imageElement.addEventListener(`mouseenter`, (e) => {
        
        imageElement.style.border = `12px ridge limegreen`
        console.log(`mouse enter`)
      });
      imageElement.addEventListener(`mouseleave`, () => {
        imageElement.style.border = `none`
      })


      card.className = 'container'


      // create species detail
      const speciesElement = document.createElement("p");
      speciesElement.textContent = `Species: ${character.species}`;
      // create status detail
      const statusElement = document.createElement("p");
      statusElement.textContent = `Status: ${character.status}`;

      imageElement.addEventListener(`mouseenter`, () => {
        console.log(`mouse enter`);
      });
      imageElement.addEventListener(`mouseleave`, () => {
        console.log(`mouse leave`);
      });

      cardsContainer.append(card);
      card.append(nameElement, imageElement, dropDownButton, detailsContainer);
      detailsContainer.append(originElement, speciesElement, statusElement);
    });
  });


// function addMouseHover(e){
//   e.preventDefault()
// e.target.imageElement
// console.log(`mouseender`, e.target.imageElement)

// }

