'use strict';

var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down

  ctx.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';
  hue++;
  if (hue === 360) {
    hue = 0;
  }

  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;

  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', function (e) {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', function () {
  return isDrawing = false;
});
canvas.addEventListener('mouseout', function () {
  return isDrawing = false;
});