'use strict';

var addItems = document.querySelector('.add-items');
var itemsList = document.querySelector('.plates');
var items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  var text = this.querySelector('[name=item]').value;
  var item = {
    text: text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList() {
  var plates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var platesList = arguments[1];

  platesList.innerHTML = plates.map(function (plate, i) {
    return '\n      <li>\n        <input type="checkbox" data-index=' + i + ' id="item' + i + '" ' + (plate.done ? 'checked' : '') + ' />\n        <label for="item' + i + '">' + plate.text + '</label>\n      </li>\n    ';
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  var el = e.target;
  var index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);