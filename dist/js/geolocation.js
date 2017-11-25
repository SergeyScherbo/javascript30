'use strict';

var arrow = document.querySelector('.arrow');
var speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(function (data) {
  speed.textContent = Math.round(data.coords.speed);
  arrow.style.transform = 'rotate(' + data.coords.heading + 'deg)';
}, function (err) {
  console.log(err);
  alert('Hey, you gotta allow that to happen!');
});