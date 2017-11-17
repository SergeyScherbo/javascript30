'use strict';

var player = document.querySelector('.player');
var video = document.querySelector('.viewer');
var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.progress__filled');
var toggle = document.querySelector('.toggle');
var skipButtons = document.querySelectorAll('[data-skip]');
var ranges = document.querySelectorAll('.player__slider');

var isPlay = false;
var i = 0;
var playID = void 0;

function togglePlay() {
  if (video.paused === true) {
    video.play();
    console.log('played');
  } else {
    video.pause();
    // clearInterval(playID);
    console.log('paused');
  }
}

function updateBtn() {
  console.log('Update button');
}

function skip() {
  var currentSkip = Number(this.getAttribute('data-skip'));
  video.currentTime += currentSkip;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.name);
  console.log(this.value);
}

function handleProgress() {
  var percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = percent + '%';
}

function scrub(e) {
  var scrubTime = e.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(function (skipBtn) {
  return skipBtn.addEventListener('click', skip);
});

ranges.forEach(function (range) {
  return range.addEventListener('change', handleRangeUpdate);
});
ranges.forEach(function (range) {
  return range.addEventListener('mouseMove', handleRangeUpdate);
});

var mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', function (e) {
  return mouseDown && scrub(e);
});
progress.addEventListener('mousedown', function () {
  return mouseDown = true;
});
progress.addEventListener('mouseup', function () {
  return mouseDown = false;
});