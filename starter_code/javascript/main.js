$(document).ready(function() {
  console.log("ready!");

  $("#pikachu.characters").addClass("selected-char");
  var characters = ["pikachu", "charmander", "squirtle", "bulbasaur"];
  var currentCharIndex = 0;
  //var selectedId = "#" + characters[currentCharIndex] + ".characters";
  var selectedId;

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
 if (event.keyCode === 13) {
   if (selectedId === "#pikachu.characters"){
    $('#player1').html('<img src="..//elements/avatars/pikachu.png" />');
   }
   else if (selectedId === "#charmander.characters"){
    $('#player1').html('<img src="..//elements/avatars/charmander.png" />');
   }
   else if (selectedId === "#squirtle.characters"){
    $('#player1').html('<img src="..//elements/avatars/squirtle.png" />');
   }
   else if (selectedId === "#bulbasaur.characters"){
    $('#player1').html('<img src="..//elements/avatars/bulbasaur.png" />');
   }
  }
  });
 
}); // fin du document.ready
