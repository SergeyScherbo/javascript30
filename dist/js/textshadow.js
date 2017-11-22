'use strict';

var hero = document.querySelector('.hero');
var text = hero.querySelector('h1');
var walk = 50;

function shadow(e) {
  var width = hero.offsetWidth;
  var height = hero.offsetHeight;

  var x = e.offsetX;
  var y = e.offsetY;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  var xWalk = Math.round(x / width * walk - walk / 2);
  var yWalk = Math.round(y / height * walk - walk / 2);

  console.log(xWalk, yWalk);

  text.style.textShadow = '\n    ' + xWalk + 'px ' + yWalk + 'px 0 #259F6C,\n    ' + xWalk * -1 + 'px ' + yWalk + 'px 0 #EF7E56,\n    ' + xWalk + 'px ' + yWalk * -1 + 'px 0 #3F6699\n  ';
}

hero.addEventListener('mousemove', shadow);