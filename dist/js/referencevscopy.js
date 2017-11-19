"use strict";

var age = 100;
var age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

var name = "Sergey";
var name2 = name;
console.log(name, name2);
name = "Scherbo";
console.log(name, name2);

var players = ["Wes", "Sarah", "Ryan", "Poppy"];

var team = players;
console.log(team);

// team[3] = "Lux";


var team2 = players.slice();
team2[3] = "Lux";

var team4 = [].concat(players);
console.log(team4);

var team5 = Array.from(players);
console.log(team5);

var person = {
  name: "Sergey Scherbo",
  age: 23
};

// const captain = person;
// captain.age = 99;

var cap2 = Object.assign({}, person, { age: 99 });

var sergey = {
  name: "Sergey",
  age: 23,
  social: {
    vk: "cepreu_c",
    twitter: "@scherbo",
    facebook: "sergeyscherbo"
  }
};

console.clear();
console.log(sergey);

var dev = Object.assign({}, sergey);
console.log(dev);

var dev2 = JSON.parse(JSON.stringify(sergey));
console.log(dev2);