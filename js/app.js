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


// Idea 2  move objects by increamenting the location of the object by moving the pixels horizontal.

$(function (){
   var mario = '<div id="playerOne"> <img src="img/mario.png"</div>';
   $('#track').append(mario);

   var toad = '<div id="playerTwo"> <img src="img/toad.png"</div>';
    $('#track').append(toad);



   window.addEventListener("keydown", function(event) {


    var position = $("#playerOne").position();
    var positionTwo = $("#playerTwo").position();


     switch(event.code) {
       case "KeyA":
           $("#playerOne").css("left", position.left + 100 + 'px');
           break;
       case "KeyL":
           $("#playerTwo").css("left", positionTwo.left + 100 + 'px');
           break;

     }

function determineWinner () {
 if ($('#playerOne').css('#finishLine')){
alert ("Mario is the winner!");
 }else if ($('#playerTwo').css('#finishLine')){
alert ("Toad is the winner!");

 }

};
   });


});







// idea 1*******/////////////////
// function move () {
//
// // This does not work it just inherits the properties of the class but nit move to tat column
//     // $('.playerOne').next().addClass("column");
//
//     $(".playerOne").appendTo(".nextColumn");
// // } else {
// //
// //
// // }
//
// }
//
//
// window.addEventListener("keydown", function(event) {
//
//   switch(event.code) {
//     case "KeyA":
//       // playerTwo's key to move from the starting postion column to the next one
//       move();
//       break;
//     case "KeyL":
//       // playerTwo's key to move from the starting postion column to the next one
//       move();
//       break;
//
//   }
//
// });
