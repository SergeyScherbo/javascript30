'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var inventors = [{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }, { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }];

var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
var oldInventors = inventors.filter(function (i) {
  return i.year < 1600 && i.year > 1500;
});

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
var inventorsNames = inventors.map(function (i) {
  return i.first + ' ' + i.last;
});

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
var inventorsSort = inventors.sort(function (a, b) {
  return a.year > b.year ? 1 : -1;
});

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
var inventorsOld = inventors.reduce(function (total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);

// 5. Sort the inventors by years lived
var oldest = inventors.sort(function (a, b) {
  var lastGuy = a.passed - a.year;
  var nextGuy = b.passed - b.year;

  return lastGuy > nextGuy ? -1 : 1;
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
//
// const de = links
//               .map(link => link.textContent)
//               .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
var alpha = people.sort(function (lastOne, nextOne) {
  var _lastOne$split = lastOne.split(', '),
      _lastOne$split2 = _slicedToArray(_lastOne$split, 2),
      aLast = _lastOne$split2[0],
      aFirst = _lastOne$split2[1];

  var _nextOne$split = nextOne.split(', '),
      _nextOne$split2 = _slicedToArray(_nextOne$split, 2),
      bLast = _nextOne$split2[0],
      bFirst = _nextOne$split2[1];

  return aLast > bLast ? 1 : -1;
});

// 8. Reduce Exercise
// Sum up the instances of each of these
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

var transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);