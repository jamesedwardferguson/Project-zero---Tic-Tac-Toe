

// Get list of squares as Jquery collection
var $squares = $("#container .square");
var $firstSquare = $("#container .square").eq(0);


// Randomly choose player ===========
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



// Changing the board to include either an x or o ==========
var board = [ "", "", "",
              "", "", "",
              "", "", ""  ];

$(".square").on("click", function() {
  var index = $(this).attr("data-index");
// stop square being picked twice
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
  } else {
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

var reset = function() {
  location.reload();
};

// checkWinner function and if win, reset game ===================
function checkWinner(playerTurn){
if (board[0] === playerTurn && board[1] === playerTurn && board[2] === playerTurn) {
  thumbsUp(randomPlayer);
  // alert ("Player " + randomPlayer + " Wins");
    window.setTimeout(reset, 3000);
  } else if (board[3] === playerTurn && board[4] === playerTurn && board[5] === playerTurn) {
    thumbsUp(randomPlayer);
    // alert ("Yo player " + randomPlayer + " you won!");
    window.setTimeout(reset, 3000);
  } else if (board[6] === playerTurn && board[7] === playerTurn && board[8] === playerTurn) {
    thumbsUp(randomPlayer);
    // alert ("Player " + randomPlayer + "Winner winner chicken dinner!");
    window.setTimeout(reset, 3000);
  } else if (board[0] === playerTurn && board[3] === playerTurn && board[6] === playerTurn) {
    thumbsUp(randomPlayer);
    // alert ("Good job player " + randomPlayer + ", you won!");
    window.setTimeout(reset, 3000);
  } else if (board[1] === playerTurn && board[4] === playerTurn && board[7] === playerTurn) {
    thumbsUp(randomPlayer);
    // alert ("Player " + randomPlayer + " you are a winner!");
    window.setTimeout(reset, 3000);
  } else if (board[2] === playerTurn && board[5] === playerTurn && board[8] === playerTurn) {
    thumbsUp(randomPlayer);
    // alert ("Player " + randomPlayer + " that's a win my friend!");
    window.setTimeout(reset, 3000);
  } else if (board[0] === playerTurn && board[4] === playerTurn && board[8] === playerTurn) {
    thumbsUp(randomPlayer);
    // alert ("Player " + randomPlayer + " you won this game");
    window.setTimeout(reset, 3000);
  } else if (board[2] === playerTurn && board[4] === playerTurn && board[6] === playerTurn) {
    thumbsUp(randomPlayer);
    // alert ("Player " + randomPlayer + "...Ding Ding Ding, winner!");
    window.setTimeout(reset, 3000);
  } else {
  }
}

//  Player win thumbs up img ==========
var $playerOne = $("#p1win");
var $playerTwo = $("#p2win");

var thumbsUp = function(randomPlayer) {
  if (playerTurn === "x") {
  $($playerOne).css({
    backgroundImage: "url(thumb2.png)",
    backgroundSize: "cover",
  });
} else if (playerTurn === "o") {
  $($playerTwo).css({
    backgroundImage: "url(thumb2.png)",
    backgroundSize: "cover",
});
}
};



// var delayReset = function() {
//   timeoutID = window.setTimeout(reset, delay, 3);
// };
// Update player score

// var $playerScore = $("#players .player1 .player2");
// if (checkWinner === true) {
//   $(this).css({
//
//   });
// }
