'use strict';

var keys = document.querySelectorAll('.drums__el');

function playSound(e) {
  var sound = document.querySelector('audio[data-key=\'' + e.keyCode + '\']');
  var key = document.querySelector('.drums__el[data-key=\'' + e.keyCode + '\']');
  if (sound === null) return;

  sound.currentTime = 0;
  sound.play();
  key.classList.add('play');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('play');
};

window.addEventListener('keydown', playSound);
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});