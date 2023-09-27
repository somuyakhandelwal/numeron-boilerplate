// Iteration 2: Generate 2 random numbers and display them on the screen
var number1 = Math.round(Math.random() * 100);
const number1Element = document.getElementById("number1");
number1Element.innerHTML = number1;

var number2 = Math.round(Math.random() * 100);
const number2Element = document.getElementById("number2");
number2Element.innerHTML = number2;

const greaterThan = document.getElementById("greater-than");
const equalTo = document.getElementById("equal-to");
const lesserThan = document.getElementById("lesser-than");

var score = 0;

document.addEventListener('keyup', (event) => {
  var name = event.key;
  if (name === 'ArrowLeft') {
    if (number1 > number2) {
      score++;
      resetTime(timerId);
    } else {
      location.href = "./gameover.html";
    }
  
    number1 = Math.round(Math.random() * 100);
    number1Element.innerHTML = number1;
    number2 = Math.round(Math.random() * 100);
    number2Element.innerHTML = number2;
  }
}, false);

document.addEventListener('keyup', (event) => {
  var name = event.key;
  if (name === 'ArrowRight') {
    if (number1 < number2) {
      score++;
      resetTime(timerId);
    } else {
      location.href = "./gameover.html";
    }
  
    number1 = Math.round(Math.random() * 100);
    number1Element.innerHTML = number1;
    number2 = Math.round(Math.random() * 100);
    number2Element.innerHTML = number2;
  }
}, false);

document.addEventListener('keyup', (event) => {
  var name = event.key;
  if (name === 'ArrowDown') {
    if (number1 == number2) {
      score++;
      resetTime(timerId);
    } else {
      location.href = "./gameover.html";
    }
  
    number1 = Math.round(Math.random() * 100);
    number1Element.innerHTML = number1;
    number2 = Math.round(Math.random() * 100);
    number2Element.innerHTML = number2;
  }
}, false);

greaterThan.onclick = () => {
  if (number1 > number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }

  number1 = Math.round(Math.random() * 100);
  number1Element.innerHTML = number1;
  number2 = Math.round(Math.random() * 100);
  number2Element.innerHTML = number2;
};

lesserThan.onclick = () => {
  if (number1 < number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }

  number1 = Math.round(Math.random() * 100);
  number1Element.innerHTML = number1;
  number2 = Math.round(Math.random() * 100);
  number2Element.innerHTML = number2;
};

equalTo.onclick = () => {
  if (number1 == number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }

  number1 = Math.round(Math.random() * 100);
  number1Element.innerHTML = number1;
  number2 = Math.round(Math.random() * 100);
  number2Element.innerHTML = number2;
};


var time = 5;
var timer = document.getElementById("timer");
var timerId;

function startTimer() {
  time = 5;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) {
      location.href = "./gameover.html";
    }
    timer.innerHTML = time;
  }, 1000);
  localStorage.setItem("score", score);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();