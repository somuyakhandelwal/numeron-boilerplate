// Function to update and display the player's score
let score = localStorage.getItem("score");
console.log(score);

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) => {
  location.href = "./game.html";
};
//evt = keyup or keydown
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    location.href = "./game.html";
    console.log('Space pressed'); //whatever you want to do when space is pressed
  }
})