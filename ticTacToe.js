// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {



  //Below I have declared any box in the grid to var el 
  // var el = document.querySelectorAll(".col-xs-4 box").appendChild("elem");

  // el.src = "redX.jpg"

  var box = document.getElementsByClassName("box");
  var lastPlayed = "Player2";

  for (var i=0; i<box.length; i++){
    box[i].addEventListener('click', checked);
  }

  function checked(evt) {
    var element = evt.target;
    if (lastPlayed == "Player1") {
      // Put the code to make the player2 play
      lastPlayed = 'Player2';
    } else {
      // Put the code to make the player1 play
      lastPlayed = 'Player1';
    }
    console.log(lastPlayed);
  }
});
