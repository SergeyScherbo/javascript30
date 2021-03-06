'use strict';

var list = document.querySelector('#bands');

var bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

var sortBands = bands.sort(function (a, b) {
  return strip(a) > strip(b) ? 1 : -1;
});

for (var i = 0; i < sortBands.length; i++) {
  list.innerHTML += '<li>' + bands[i] + '</li>';
}