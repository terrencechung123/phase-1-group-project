//rick smith,morty smith,summer smith, beth smith, jerry smith
const url = 'https://rickandmortyapi.com/api/character/'
const rickSanchez = el('rick');
const mortySmith = el('morty');
const bethSmith = el('beth');
const jerrySmith = el('jerry');



fetch(url)
.then(resp=>resp.json())
.then(ricknmorty);

function ricknmorty(data){
    console.log(data);
    rick();
    morty();
    beth();
    jerry();
};


function rick(data){};


function morty(data){};


function beth(data){};


function jerry(data){};




function el(id){
    return document.createElement(id);
};
