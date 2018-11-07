var characters = ["pikachu", "charmander", "squirtle", "bulbasaur"];
var currentCharIndex = 0;
var randomIndex = Math.floor(Math.random() * (characters.length));
var selectedId = "#" + characters[currentCharIndex] + ".characters";
var player1Img = "<img src=" + "..//elements/avatars/" + characters[currentCharIndex] + ".png />";
var opponentImg = "<img src=" + "..//elements/avatars/" + characters[randomIndex] + ".png />";
console.log(currentCharIndex);
console.log(player1Img);
console.log(randomIndex);
console.log(opponentImg);

$(document).ready(function() {
  console.log("ready!");

  $("#pikachu.characters").addClass("selected-char");
  

  $(document).keydown(function(event) {
    console.log("event initiated");
    switch (event.keyCode) {
      case 37: // left arrow: 37
        if (currentCharIndex === 0) {
          return
        }
        selectedId = "#" + characters[currentCharIndex] + ".characters";
        if ($(selectedId).hasClass("selected-char")) {
          $(selectedId).toggleClass("selected-char");
        } else {
          $(selectedId).addClass("selected-char");
        }
        currentCharIndex -= 1;
        selectedId = "#" + characters[currentCharIndex] + ".characters";
        console.log("selectedId is " + selectedId);
        if ($(selectedId).hasClass("selected-char")) {
          $(selectedId).toggleClass("selected-char");
        } else {
          $(selectedId).addClass("selected-char");
        }
        console.log("left arrow clicked");
        console.log("currentCharIndex is " + currentCharIndex);
        break;

      case 39: // right arrow = 39
        if (currentCharIndex === characters.length - 1) {
          return
        }
        selectedId = "#" + characters[currentCharIndex] + ".characters";
        if ($(selectedId).hasClass("selected-char")) {
          $(selectedId).toggleClass("selected-char");
        } else {
          $(selectedId).addClass("selected-char");
        }
        currentCharIndex += 1;
        selectedId = "#" + characters[currentCharIndex] + ".characters";
        console.log("selectedId is " + selectedId);
        if ($(selectedId).hasClass("selected-char")) {
          $(selectedId).toggleClass("selected-char");
        } else {
          $(selectedId).addClass("selected-char");
        }
        console.log("right arrow clicked");
        console.log("currentCharIndex is " + currentCharIndex);
        break;
    }
    console.log("event ended");
  });

 $(document).keydown(function(event) {
var player1Img = "<img src=" + "..//elements/avatars/" + characters[currentCharIndex] + ".png />";
 if (event.keyCode === 13) {
   console.log("image of the player is " + player1Img)
  $('#player1').html(player1Img);
   randomSelect();
  }
  });

  // utiliser cette fonction ? ou recalculer le randomindex à chaque fleche dans le switch ???
  // cette fonction pourrait ne servir qu'à l'image de l'opponent
  function randomSelect(){
    var randomIndex = Math.floor(Math.random() * (characters.length));
    while (randomIndex == currentCharIndex) {
     randomIndex = Math.floor(Math.random() * (characters.length));
    }
    console.log("randomIndex is " + randomIndex)
    if (randomIndex !== currentCharIndex){
      console.log("image of the oponent is " + opponentImg);
      $('#computer').html(opponentImg);
    }
    //setTimeout (battlescene, 1000);
  };

  //function battlescene () {
  //  window.location.href = "battlescene.html";
  //  $('battlescene.html').load(".box-bottom-left").html(player1Img).addClass('pokemon-bottom');
  //  $('battlescene.html').load(".box-top-right").html(opponentImg).addClass('pokemon-top');
  //};
 
}); // fin du document.ready
