const hrArrow = document.querySelector('.hours');
const minArrow = document.querySelector('.minutes');
const secArrow = document.querySelector('.seconds');

setInterval(function() {
  const curDate = new Date();
  const oneHour = 360 / 24;
  const oneMinute = 360 / 60;
  const oneSecond = 360 / 60;

  const curHours = curDate.getHours() * oneHour + 90;
  const curMinutes = curDate.getMinutes() * oneMinute + 90;
  const curSeconds = curDate.getSeconds() * oneSecond + 90;
  hrArrow.style.transform = `rotate(${curHours}deg)`;
  minArrow.style.transform = `rotate(${curMinutes}deg)`;
  secArrow.style.transform = `rotate(${curSeconds}deg)`;
}, 1000);
