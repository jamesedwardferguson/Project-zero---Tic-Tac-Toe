// Get list of squares as Jquery collection
var $squares = $("#container .square");
  for (var i = 0; i < $squares.length; i += 1 ) {
  var $listSquares = $squares.eq(i);
}

// If square is clicked
var squareClicked = function() {
  console.log("You clicked" + $listSquares);
};
$squares.on("click", squareClicked );

// var PlayerX =
