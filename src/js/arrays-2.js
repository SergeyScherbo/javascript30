const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
people.some(person => person.year < 1998); // if this is true, that means that person.year is older than 19
// Array.prototype.every() // is everyone 19 or older?
people.every(person => person.year < 1998); // if this is true, that means that person.year is older than 19, but in this example if we want to get true, we need every single person in the people object to be older than 19 (in this canse we get false);


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
comments.find(comment => comment.id === 823423);
// I also wanted to make it with for loop
for (let i = 0; i < comments.length; i++) {
  if (comments[i].id === 823423) {
    console.log(comments[i]);
  }
}

// Array.prototype.findIndex()
// Find the comment with this ID
console.log(comments.findIndex(comment => comment.id === 823423));
// Made it with for loop as well
for (let i = 0; i < comments.length; i++) {
  if (comments[i].id === 823423) {
    console.log(comments.indexOf(comments[i]));
  }
}
// delete the comment with the ID of 823423
const myId = comments.findIndex(comment => comment.id === 823423);
if (myId > -1) {
  comments.splice(myId, 1);
}
console.log(comments);
