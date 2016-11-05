//
//
// I NEED TO ADD AN EVENTLISTENER FOR CLICK
// EACH PLAYER WILL HAVE A KEY TO PRESS TO MAKE THE OBJECT MOVE
// PROBABLY WILL USE THE KEYUP
//
// I NEED A FUNCTION SO THAT EACH PLAYER CAN MOVE THERE OBJECT WITH EACH keypress
// I NEED A FUNCTION TO RESET THE GAME
// I NEED A FUNCTION TO START THE GAME??MAYBE IT IS ALREADY IN THE CLASS OF EACH PLAYER WITH THE ORIGINAL POSTION THEY ARE IN

//this is the function that will let playerOne or playerTwo move
// function move () {
// //keyA press move playerOne)
// if ( ) {
// $('.playerOne').next().addClass("column");

//keyB was pressDown move playerTwo
// } else {
//
//
// }
// }


window.addEventListener("keydown", function(event) {

  switch(event.code) {
    case "KeyA":
      // playerTwo's key to move from the starting postion column to the next one
      // move();
      alert("KeyA was press!");
      break;
    case "KeyL":
      // playerTwo's key to move from the starting postion column to the next one
      // move();
      alert("Keyl was press!");
      break;

  }

});
