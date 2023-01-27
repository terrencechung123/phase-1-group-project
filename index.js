//Global Scope
const url = "https://rickandmortyapi.com/api/character/";
const secretTitleAlert = document.getElementsByTagName("h1");
  secretTitleAlert[0].addEventListener("click", (banana) => window.alert("🍌🍌🍌BANANAS MORTY! BANANAS!🍌🍌🍌"));
const handleDropDown = (event, container) => { 
  event.preventDefault(),container.className = container.className === "hide" ? "show" : "hide";
};
const form = document.getElementById('createNewCharacterCard');


fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const character = data.results.splice(0,5);
    character.forEach(renderCharacterApi);
  });
  




function renderCharacterApi(character){
  console.log(character);
  //Creating Elements and Modifications Here
  
  const card = createEl("article");
    card.className = "container";
  const imageElement = createEl("img");
    imageElement.setAttribute("class", "image-class");
    imageElement.src = character.image;
  imageElement.title = `${character.name}`+'.image';
    imageElement.id = "imageId";
  const nameElement = createEl("p");
    nameElement.className = "charName";
    nameElement.textContent = character.name;
  const detailsContainer = createEl("div");
    detailsContainer.className = "hide";
  const originElement = createEl("p");
    originElement.textContent = `Place of origin: ${character.origin.name}`;
    console.log('originElement', originElement);
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
    likeCount.textContent = "0 bananas";
    likeCount.id = "like-count";
  const likeButton=createEl('button');
    likeButton.textContent = "🍌";
    let likes = 0;
    
  
    //addEventHandlers() Here
    imageElement.addEventListener(`mouseenter`, () => {
      imageElement.style.border = `12px #EAF157`;
    });
    imageElement.addEventListener(`mouseleave`, () => {
      imageElement.style.border = `none`;
    });
    likeButton.addEventListener('click', (e)=>{
      likes += 1;
      likeCount.textContent = `${likes} bananas`;
    });
    likeButton.addEventListener('mouseenter',(e)=>{
      likeButton.style.backgroundColor = 'pink';
    });
    likeButton.addEventListener('mouseleave',(e)=>{
      likeButton.style.backgroundColor = '#EAF157';
    });
    dropDownButton.addEventListener('click', (event)=>{
      handleDropDown(event, detailsContainer);
    });
    dropDownButton.addEventListener('mouseenter',(e)=>{
      dropDownButton.style.backgroundColor = 'pink';
    });
    dropDownButton.addEventListener('mouseleave',(e)=>{
      dropDownButton.style.backgroundColor = '#EAF157';
    });
    
    
    
    //Append() Here
    cardsContainer.append(card);
    card.append(nameElement, imageElement, dropDownButton, detailsContainer, likeSection,);
    detailsContainer.append(originElement, speciesElement, statusElement);
    likeSection.append(likeCount, likeButton);
  }
  
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let newCharacter = {
    name: e.target.name.value,
    image: e.target.image.value,
    origin: {name : e.target.placeOfOrigin.value},
    species: e.target.species.value,
    status: e.target.status.value,
  };
  renderCharacterApi(newCharacter);
    e.target.reset()
  });


  function createEl(id){
    return document.createElement(id);
  }
  
  
  
  
  

//Shortcut Functions Here
//BONUS GOAL:
//1.Create like button at the bottom right corner of each character card.X
//2.Have number of likes display next to heart and have it increment by 1 for each click.
//3.let each picture have its own unique likeCount
document.querySelector("#textPreview")