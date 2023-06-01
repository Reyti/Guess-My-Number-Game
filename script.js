'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    inputField.classList.add('winning');
    document.querySelector('body').classList.add('fade-in');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Check value
const valueInput = document.getElementById('value');

valueInput.addEventListener('input', validateInput);

// Function to validate the input
function validateInput() {
  let value = parseInt(valueInput.value);

  // Check if the value is within the desired range (1-20)
  if (value < 1 || value > 20 || isNaN(value)) {
    // If the value is not within the range or is NaN, reset the input field
    valueInput.value = '';
  }
}

// HTML code:
// Assume you have an input field with id="value" and class="guess",
// and a button with class="btn check"

// JavaScript code:
// Get the references to the input field and the button
const inputField = document.getElementById('value');
const checkButton = document.querySelector('.btn.check');

// Add an event listener to the input field for keydown events
inputField.addEventListener('keydown', function (event) {
  // Check if the Enter key was pressed
  if (event.keyCode === 13) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Trigger the click event on the check button
    checkButton.click();
  }
});

// Add an event listener to the check button for the click event
checkButton.addEventListener('click', function (event) {
  // Perform the desired action when the button is clicked
  console.log('Button clicked!');
  // Add your custom code here
});
