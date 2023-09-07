'use strict';

// SELECT HTML IN JAVASCRIPT

// console.log(document.querySelector('.message').textContent);

// displayMessage() 'Correct Number 🎉';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 13;

// document.querySelector('.guess').value;

// Handling Click Events

let number = Math.trunc(Math.random() * 20 + 1);
let score = 7;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// AGAIN BUTTON FUNCTIONS

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 7;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');

  Number((document.querySelector('.check').style.display = 'flex'));

  document.querySelector('body').style.backgroundColor = '#222222';

  document.querySelector('.number').style.width = '15rem';
});

// Functionality In The Game

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // When there is no value
  if (!guess) {
    displayMessage('⛔ No Number!');
  }

  // When The Number is Correct
  else if (guess === number) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = number;

    // Styles
    Number((document.querySelector('.check').style.display = 'None'));

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // Score
    score++;
    document.querySelector('.score').textContent = score;

    // High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When The guess is incorrect
  else if (guess !== number) {
    // Statement
    if (score > 1) {
      displayMessage(guess > number ? '📈 Too High' : '📉 Too low');

      //  Score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤡 You Lose');
    }
  }

  // // When The Number is Too High
  // else if (guess > number) {
  //   // Statement
  //   if (score > 1) {
  //     displayMessage('📈 Too High') ;

  //     //  Score
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('🤡 You Lose') ;
  //   }
  // }

  // // When The Number is Too Low
  // else if (guess < number) {
  //   // Statement
  //   if (score > 1) {
  //     displayMessage('📉 Too low') ;

  //     //  Score
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('🤡 You Lose');
  //   }
  // }
});
