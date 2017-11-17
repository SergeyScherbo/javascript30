const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

let isPlay = false;
let i = 0;
let playID;

function togglePlay () {
  if (video.paused === true) {
    video.play();
    console.log('played');
  } else {
    video.pause();
    // clearInterval(playID);
    console.log('paused');
  }
}

function updateBtn () {
  console.log('Update button');
}

function skip () {
  const currentSkip = Number(this.getAttribute('data-skip'));
  video.currentTime += currentSkip;
}

function handleRangeUpdate () {
  video[this.name] = this.value;
  console.log(this.name);
  console.log(this.value);
}

function handleProgress () {
  const percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mouseMove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
