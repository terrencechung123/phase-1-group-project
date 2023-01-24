const url = "https://rickandmortyapi.com/api/character/";

const cardsContainer = document.getElementById("card-container");

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
      // create place of origin element
      const originElement = document.createElement("p");
      originElement.textContent = `Place of origin: ${character.origin.name}`;
      // create species detail
      const speciesElement = document.createElement("p");
      speciesElement.textContent = `Species: ${character.species}`;
      //create status detail
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
