
// Get list of squares as Jquery collection
var $squares = $("#container .square");
var $firstSquare = $("#container .square").eq(0);


// Randomly choose player
var players = 2;
var playerTurn = "";
var randomPlayer = Math.floor(Math.random() * players) +1;
alert("Player " + randomPlayer + " it is your go");
// Assign number to playerTurn
if (randomPlayer === 1) {
  playerTurn = "x";
} else {
  playerTurn = "o";
}
console.log(playerTurn);


// Changing the board to include either an x or o
var board = [ "", "", "",
              "", "", "",
              "", "", ""  ];

$(".square").on("click", function() {
  var index = $(this).attr("data-index");
// stop square being choosen twice
  if (board[index] === "") {
// if play is x, use x img
  if (playerTurn === "x") {
    board[index] = "x";
    $(this).css({
      backgroundImage: "url(redx.png)",
      backgroundSize: "cover",
      });
// check if a player has won
      checkWinner(playerTurn);
// change player
      playerTurn = "o";
  }
  else {
    board[index] = "o";
    $(this).css({
      backgroundImage: "url(o.png)",
      backgroundSize: "cover",
      });
// check if player has won
    checkWinner(playerTurn);
// change player
    playerTurn = "x";
    }
  }
    console.log(playerTurn);
});


// checkWinner function ===================

function checkWinner(playerTurn){
if (board[0] === playerTurn && board[1] === playerTurn && board[2]) {
  alert ("Player " + randomPlayer + " Wins");
  } else if (board[3] === playerTurn && board[4] === playerTurn && board[5]) {
    alert ("Yo player " + randomPlayer + " you won!");
  } else if (board[6] === playerTurn && board[7] === playerTurn && board[8]) {
    alert ("Winner winner chicken dinner!");
  } else if (board[0] === playerTurn && board[3] === playerTurn && board[6]) {
    alert ("Good job, you won");
  } else if (board[1] === playerTurn && board[4] === playerTurn && board[7]) {
    alert ("You are a winner!");
  } else if (board[2] === playerTurn && board[5] === playerTurn && board[8]) {
    alert ("That's a win my friend!");
  } else if (board[0] === playerTurn && board[4] === playerTurn && board[8]) {
    alert ("You won this game");
  } else if (board[2] === playerTurn && board[4] === playerTurn && board[6]) {
    alert ("Ding Ding Ding, winner!");
  } else {
  }
}

// var gameOver = false;
