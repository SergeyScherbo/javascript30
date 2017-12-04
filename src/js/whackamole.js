const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('.start');
let points;
let lastHole;
let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);

  hole.classList.add('up');
  setTimeout(function() {
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  points = 0;
  peep();
  setTimeout(() => timeUp = true, 10000);
}

function countScore(e) {
  if(!e.isTrusted) return;
  points++;
  this.classList.remove('up');
  scoreBoard.textContent = points;
}

moles.forEach(mole => mole.addEventListener('click', countScore));
startBtn.addEventListener('click', startGame);
