// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
// Get a reference to the Play button element
const playButton = document.getElementById("play-button");
//const playButton = document.getElementsByTagName('img');

// Add a click event listener to the Play button
playButton.addEventListener("click", function() {
  // Define the URL of the page you want to navigate to
  const newPageUrl = "/game.html";

  // Redirect to the new page
  window.location.href = newPageUrl;
});
