let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Sergey";
let name2 = name;
console.log(name, name2);
name = "Scherbo";
console.log(name, name2);


const players = ["Wes", "Sarah", "Ryan", "Poppy"];

const team = players;
console.log(team);

// team[3] = "Lux";


const team2 = players.slice();
team2[3] = "Lux";

const team4 = [...players];
console.log(team4);

const team5 = Array.from(players);
console.log(team5);




const person = {
  name: "Sergey Scherbo",
  age: 23
};

// const captain = person;
// captain.age = 99;

const cap2 = Object.assign({}, person, {age: 99});



const sergey = {
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

const dev = Object.assign({}, sergey);
console.log(dev);


const dev2 = JSON.parse(JSON.stringify(sergey));
console.log(dev2);
