'use strict';

var triggers = document.querySelectorAll('a');
var highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  var linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  var coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    x: linkCoords.x + window.scrooX,
    y: linkCoords.y + window.scrollY
  };

  highlight.style.width = coords.width + 'px';
  highlight.style.height = coords.height + 'px';
  highlight.style.transform = 'translate(' + coords.x + 'px, ' + coords.y + 'px)';
}

triggers.forEach(function (link) {
  return link.addEventListener('mouseenter', highlightLink);
});