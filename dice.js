'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const btnAgain = document.querySelector('.btn-again');
const btnRoll = document.querySelector('.btn-roll');
const diceEl = document.querySelector('.dice');

let score = 0;
let activePlayer = 0;
// let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
// player0El.classList.remove('.player--winner');
// player1El.classList.remove('.player--winner');
// player0El.classList.add('.player--active');
// player1El.classList.remove('.player--active');

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  //   if (playing) {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (score[activePlayer] !== 6) {
    document.getElementById(`score--${activePlayer}`).textContent = dice;

    switchPlayer();
  }
  if (score[activePlayer] === 6) {
    // playing = false;
    diceEl.classList.add('.hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }
  //   }
  //   if (score[activePlayer] === 6) {
  //     playing = false;
  //     diceEl.classList.add('.hidden');
  //     document
  //       .querySelector(`.player--${activePlayer}`)
  //       .classList.add('player--winner');

  //     document
  //       .querySelector(`.player--${activePlayer}`)
  //       .classList.remove('player--active');
  //   }
});
