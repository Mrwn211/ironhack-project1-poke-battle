var characters = ["pikachu", "charmander", "squirtle", "bulbasaur"];
var currentCharIndex = 0;
var randomIndex = Math.floor(Math.random() * (characters.length));
var selectedId = "#" + characters[currentCharIndex] + ".characters";
var player1Img = "<img src=" + "./elements/avatars/" + characters[currentCharIndex] + ".png />";
// var player1Img;
var opponentImg = "<img src=" + "./elements/avatars/" + characters[randomIndex] + ".png />";
// var opponentImg;
console.log("currentCharIndex is at the start " + currentCharIndex);
console.log(player1Img);
console.log(randomIndex);
console.log(opponentImg);
var attacksName = ["scratch","kick","smash","charge"];
var currentAttIndex = 0;
var randomAttIndex = Math.floor(Math.random() * (characters.length));
var selectedAtt = "#" + attacksName[currentAttIndex];

// Début du document ready

$(document).ready(function() {
  console.log("ready!");
  
// Deux div du jeu : choose-screen et battle-scene

  $("#choose-screen").css("display","block");
  $("#battle-scene").css("display","none");

  // Fonction de selection du pokemon
  
  $("#pikachu.characters").addClass("selected-char");

  $(document).keydown(function(event) {
    if ($("#battle-scene").is(":visible")){
      return
    }
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
        player1Img = "<img src=" + "./elements//avatars/" + characters[currentCharIndex] + ".png />";
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
        player1Img = "<img src=" + "./elements//avatars/" + characters[currentCharIndex] + ".png />";
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
        
        case 13 :
        if ($("#battle-scene").is(":visible")){
          return
        } else {
          $('#player1').html(player1Img);
          randomSelect();
          console.log("image of the player is " + player1Img)
           }
        }
    console.log("event ended");        
    });

//  $(document).keydown(function(event) {
// if ($("#battle-scene").is(":visible")){
//   return
// }
// var player1Img = "<img src=" + "..//elements/avatars/" + characters[currentCharIndex] + ".png />";
//  if (event.keyCode === 13) {
  //  console.log("image of the player is " + player1Img)
  // $('#player1').html(player1Img);
  //  randomSelect();
  // }
  // });

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
    setTimeout (battlescene, 500);
  };

// Scène de combat

  function battlescene () {
    $("#choose-screen").css("display","none");
    $("#battle-scene").css("display","block");
    $(".box-bottom-left").html(player1Img)//.addClass('pokemon-bottom');
    $(".box-top-right").html(opponentImg)//.addClass('pokemon-top');
  };

// Fonction de selection de l'attaque

  $("#scratch").addClass("selected-att");

  $(document).keydown(function(event) {
    if ($("#battle-scene").is(":hidden")){
      return
    }
    console.log("attack event initiated");
    switch (event.keyCode) {
      case 37: // left arrow: 37
        if ( currentAttIndex === 0) {
          return
        }
        selectedAtt = "#" + attacksName[currentAttIndex];
        if ($(selectedAtt).hasClass("selected-att")) {
          $(selectedAtt).toggleClass("selected-att");
        } else {
          $(selectedAtt).addClass("selected-att");
        }
        currentAttIndex -= 1;
        selectedAtt = "#" + attacksName[currentAttIndex];
        console.log("selectedAtt is " + selectedAtt);
        if ($(selectedAtt).hasClass("selected-att")) {
          $(selectedAtt).toggleClass("selected-att");
        } else {
          $(selectedAtt).addClass("selected-att");
        }
        console.log("left arrow clicked");
        console.log("currentAttIndex is " + currentAttIndex);
        break;
      
        case 39: // right arrow = 39
        if (currentAttIndex === attacksName.length - 1) {
          return
        }
        selectedAtt = "#" + attacksName[currentAttIndex];
        if ($(selectedAtt).hasClass("selected-att")) {
          $(selectedAtt).toggleClass("selected-att");
        } else {
          $(selectedAtt).addClass("selected-att");
        }
        currentAttIndex += 1;
        selectedAtt = "#" + attacksName[currentAttIndex];
        console.log("selectedAtt is " + selectedAtt);
        if ($(selectedAtt).hasClass("selected-att")) {
          $(selectedAtt).toggleClass("selected-att");
        } else {
          $(selectedAtt).addClass("selected-att");
        }
        console.log("right arrow clicked");
        console.log("currentAttIndex is " + currentAttIndex);
        break;
      }
      });


// Validation de l'attaque choisie

      $(document).keydown(function(event) {
        if ($("#battle-scene").is(":hidden")){
          return
        }
         if (event.keyCode === 13) {
          pokemons[currentCharIndex].attack(pokemons[randomIndex])
          }
          });

}); // fin du document.ready
