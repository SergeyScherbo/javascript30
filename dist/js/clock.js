'use strict';

var hrArrow = document.querySelector('.hours');
var minArrow = document.querySelector('.minutes');
var secArrow = document.querySelector('.seconds');

setInterval(function () {
  var curDate = new Date();
  var oneHour = 360 / 24;
  var oneMinute = 360 / 60;
  var oneSecond = 360 / 60;

  var curHours = curDate.getHours() * oneHour + 90;
  var curMinutes = curDate.getMinutes() * oneMinute + 90;
  var curSeconds = curDate.getSeconds() * oneSecond + 90;
  hrArrow.style.transform = 'rotate(' + curHours + 'deg)';
  minArrow.style.transform = 'rotate(' + curMinutes + 'deg)';
  secArrow.style.transform = 'rotate(' + curSeconds + 'deg)';
}, 1000);