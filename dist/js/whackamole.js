'use strict';

var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
var startBtn = document.querySelector('.start');
var points = void 0;
var lastHole = void 0;
var timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  var idx = Math.floor(Math.random() * holes.length);
  var hole = holes[idx];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  var time = randomTime(200, 1000);
  var hole = randomHole(holes);

  hole.classList.add('up');
  setTimeout(function () {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  points = 0;
  peep();
  setTimeout(function () {
    return timeUp = true;
  }, 10000);
}

function countScore(e) {
  if (!e.isTrusted) return;
  points++;
  this.classList.remove('up');
  scoreBoard.textContent = points;
}

moles.forEach(function (mole) {
  return mole.addEventListener('click', countScore);
});
startBtn.addEventListener('click', startGame);