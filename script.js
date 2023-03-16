'use strict';

console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Correct Number!';
/*
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

//console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
//const is immutable
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//document.querySelector('.number').textContent = secretNumber;
//getting button, event listener (need to pass in function argument as 2nd argument)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //when guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //sets high score
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    //when guess is high
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Game over, you lose!!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
