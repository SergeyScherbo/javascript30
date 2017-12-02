'use strict';

var speed = document.querySelector('.speed');
var bar = document.querySelector('.speed-bar');
var video = document.querySelector('.flex');

function handleMove(e) {
  var y = e.pageY - this.offsetTop;
  var percent = y / this.offsetHeight;
  var min = 0.4;
  var max = 4;
  var height = Math.round(percent * 100) + '%';
  var playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
  console.log(height);
}

speed.addEventListener('mousemove', handleMove);