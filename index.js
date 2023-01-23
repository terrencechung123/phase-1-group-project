//rick smith,morty smith,summer smith, beth smith, jerry smith
const url = 'https://rickandmortyapi.com/api/character/'
const rickSanchez = el('rick');
const mortySmith = el('morty');
const summerSmith = el('summer');
const bethSmith = el('beth');
const jerrySmith = el('jerry');


const rickImage = el('rick-image');
const mortyImage = el('morty-image');
const summerImage = el('summer-image');
const bethImage = el('beth-image');
const jerryImage = el('jerry-image');




fetch(url)
.then(resp=>resp.json())
.then(ricknmorty);

function ricknmorty(characters){
    console.log(characters);


    rickImage.src = characters.results[0].image;
    mortyImage.src = characters.results[1].image;
    summerImage.src = characters.results[2].image;
    bethImage.src = characters.results[3].image;
    jerryImage.src = characters.results[4].image;


    el('rick-article').textContent = JSON.stringify(characters.results[0])
    el('morty-article').textContent = JSON.stringify(characters.results[1])
    el('summer-article').textContent = JSON.stringify(characters.results[2])
    el('beth-article').textContent = JSON.stringify(characters.results[3])
    el('jerry-article').textContent = JSON.stringify(characters.results[4])



    el('rick-article').textContent 

    rick();
    morty();
    summer();
    beth();
    jerry();
};


function rick(data){
    
};


function morty(data){};


function summer(){};


function beth(data){};


function jerry(data){};




function el(id){
    return document.getElementById(id);
};
