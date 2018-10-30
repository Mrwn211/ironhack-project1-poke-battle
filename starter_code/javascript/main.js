$(document).ready(function(){
  console.log("ready!");


$('#pikachu.characters').addClass('selected-char');
var characters = ["pikachu","charmander","squirtle","bulbasaur"];
var currentCharIndex = 0;
var selectedId = "#" + characters[currentCharIndex] + ".characters"
$(document).keydown(moveSelection);

// right arrow = 39 
// left arrow: 37 

function moveSelection(event) {
  console.log("event initiated");
  switch (event.keyCode) {
    case 37:
    currentCharIndex -= 1;
      break;

    case 39:
    currentCharIndex += 1;
      break;
  }
  $(selectedId).addClass('selected-char');
};


//onkeydown --> j'enlève la classe selected-char de l'élément qui a currentCharIndex 
// j'incrémente ou décrémente currentCharIndex et j'ajoute la classe selected-chars à characters [currentCharIndex]


});  // fin du document.ready