//-------------------------this keyword
// const student = {
//   name: "Gideon",
//   dob: 1995,
//   age() {
//     const ageToday = 2021 - this.dob;
//     return ageToday;
//   },
// };
// console.log(student.age());
// let radius = [7, 14, 21];
// const area = (r) => {
//   return 3.142 * r ** 2;
// };
// radius.forEach((r) => {
//   console.log(area(r));
// });

// ----------------sort---------

// const names = ["Gideon", "Anne", "Charles"];
// names.sort((a, b) => {
//   let B = a.toUpperCase();
//   let A = b.toUpperCase();

//   if (A > B) {
//     return -1;
//   } else if (B < A) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(names);
//-------------------------Primitives
// let fname = "Gideon";
// let newName = "Mwangi";
// fname = "Kamau";
// console.log(fname);
// console.log(newName);

//--------------------Primitive assignment

// let anne = {
//   fname: "anne",
//   lname: "lee",
// };
// const marriedAnne = Object.assign({}, anne);
// marriedAnne.lname = "Kirimanjaro";

// console.log(anne.lname);
// console.log(marriedAnne.lname);

//-----------------------------------------------------Destructuring
//--------Destructuring arrays
// [a, b] = [10, 20];
// console.log(a + b);
// //---------
// const foo = ["One", "three", "two"];
// const [red, yellow, green] = foo;
// console.log(yellow);
//-------
// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a);
// const names = ["Gideon", "Kirimanjaro"];
// const [a, b] = names;
// console.log(a);

// const restaurant = {
//   name: "Kamae Restaurant",
//   location: "Naivasha",
//   categories: ["Choma", "Fried", "Wet"],
//   starterMenu: ["Soup", "Mutura", "Samosa"],
//   mainMenu: ["Mbuzi Choma", "Ngombe Choma", "Kichwa", "Matumbo"],
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };
// ----------changing the position in an array
// let [first, second] = restaurant.categories;
// [firt, second] = [second, first];
// console.log([firt, second]);

// let [a, b] = restaurant.mainMenu;
// [a, b] = [b, a];
// console.log([a, b]);

// //---------------mapping with array position
// [second, b] = restaurant.order(1, 2);
// console.log([second, b]);
//---------receive 2 return values form a function
// let [first, second] = restaurant.starterMenu;
// [first, second] = [second, first];
// console.log(restaurant.order(1, 2));

// let nested = [1, 2, [3, 4]];
// // nested.forEach((i) => {
// //   console.log(i);
// // });
// let [a, , [x, y]] = nested;
// console.log(a, [x, y]);

//----assigned destructuring
// let [a, b = 3, c = 4] = [2];
// console.log([a, b, c]);

//---------------------------------------Destructuring objects
// const restaurant = {
//   restaurantName: "Kamae Restaurant",
//   location: "Naivasha",
//   categories: ["Choma", "Fried", "Wet"],
//   starterMenu: ["Soup", "Mutura", "Samosa"],
//   mainMenu: ["Mbuzi Choma", "Ngombe Choma", "Kichwa", "Matumbo"],
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   hours: {
//     mon: {
//       open: 12,
//       close: 10,
//     },
//     Tue: {
//       open: 12,
//       close: 10,
//     },
//   },
// };
//declare objects
// let { restaurantName , mainMenu } = restaurant;
// console.log(restaurantName, mainMenu);

//------rename object names
// let { restaurantName: fname, mainMenu: menu } = restaurant;
// console.log(fname, menu);

//Catching empty objects

// const { menu = {}, location: area = {} } = restaurant;
// console.log(menu);

//reassigning object values
// let a = 3;
// let b = 4;

// let obj = { a: 10, b: 20 };
// ({ a, b } = obj);
// console.log(obj);
// const { mon } = restaurant.hours;
// console.log(mon);
// const alphabet = ["a", "b", "c"];
// const alphabet2 = ["d", "e"];
// const newArray = [...alphabet, ...alphabet2];
// console.log(newArray);
// function operate(a, b) {
//   return [a * b];
// }
// let [sum] = operate(2, 3);
// console.log(sum);

// const student = {
//   fname: "Gideon",
//   sname: "Kirimanjaro",
//   hobbies: { tv: "videos", physical: "weights" },
//   friends: ["Christine", "Marion", "Joan"],
// };

// const { fname: jina, sname } = student;
// const { tv } = student.hobbies;
// const [first, , second] = student.friends;
// console.log([first, second]);

//------------------------Spread OPerator
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const newArray = [...first, ...second];
// console.log(newArray);
// console.log(...newArray); //logs individual arrays
///Example---
// const restaurant = {
//   restaurantName: "Kamae Restaurant",
//   location: "Naivasha",
//   categories: ["Choma", "Fried", "Wet"],
//   starterMenu: ["Soup", "Mutura", "Samosa"],
//   mainMenu: ["Mbuzi Choma", "Ngombe Choma", "Kichwa", "Matumbo"],
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   menu(ing1, ing2) {
//     console.log(`Your meal is made of ${ing1} and ${ing2}`);
//   },
//   hours: {
//     mon: {
//       open: 12,
//       close: 10,
//     },
//     Tue: {
//       open: 12,
//       close: 10,
//     },
//   },
// };

// const add = [...restaurant.mainMenu, "Chapo"];
// console.log(add);
// const newMainMenu = [...restaurant.mainMenu];
// const newStarterMenu = [...restaurant.starterMenu];
// const completeMenu = [...newMainMenu, ...newStarterMenu];
// console.log(completeMenu);
// const ingredients = ["cheese", "toppings"];
// restaurant.menu(...ingredients);

// const chooseCategory = prompt(
//   "Choose category from 1. Choma 2. Fired 3. Wet: "
// );
// if (chooseCategory == 1) {
//   console.log(restaurant.categories[0]);
// } else if (chooseCategory == 2) {
//   console.log(restaurant.categories[1]);
// } else if (chooseCategory == 3) {
//   console.log(restaurant.categories[2]);
// } else {
//   console.log("Choose 1,2 or 3");
// }
// restaurant.restaurantName = "Kirimanjaro";
// const newRestaurant = { ...restaurant, founder: "Gideon Kirimanjaro" };
// console.log(newRestaurant);
///-------------Rest OPerator
// const newRes = { ...restaurant, founder: "Kamau" };
// // console.log(newRes);
// const [a, , ...b] = [...restaurant.mainMenu];
// console.log(...b);

// const { mon, ...others } = { ...restaurant.hours };
// console.log(others);

//Using a rest operator in a function
// const numbers = (...value) => {
//   console.log(...value);
//   value.forEach((item) => {
//     total = item * 2;
//     console.log(total);
//   });
// };
// numbers(2, 4);

// const meal = (ingr1, ...ingr2) => {
//   console.log(`Your meal is made up of ${ingr1} and ${ingr2} `);
// };
// const [a, ...cheese] = ["Broci", "Home"];
// meal([a, ...cheese], "Hot");
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//SOLUTION

// const [player1, player2] = game.players;
// //Q2
// const [gk, ...fieldPlayers] = player1;
// console.log(gk);
// //Q3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
// //Q4
// const playersFinal = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(playersFinal);
// //Q5
// const { team1, x, team2 } = game.odds;
// console.log(team1, x, team2);
// //Q6
// const [...scorers] = game.scored;
// function printGoals(athletes, goalScorer) {
//   console.log(
//     `The players are - ${athletes} and the goal Scorers are ${goalScorer}-`
//   );
// }
// printGoals(allPlayers, scorers);

//-------------------FOR---OF
// const [a, b] = game.players;
// // for (let player of b) {
// //   console.log(`The players: ${player}`);
// // }
// b.forEach((player, index) => {
//   console.log(`${index}: ${player}`);
// });

// const hours = {
//   mon: {
//     start: "3:45",
//     end: "5:45",
//   },
//   tue: {
//     start: "3:45",
//     end: "5:45",
//   },
// };

// game.hours = hours;
// const newGame = { ...game, ...hours };
//console.log(newGame);
//-----------------------------------------------Object keys
// const [a, b] = game.players;
// b.forEach((player, number) => {
//   console.log(`${number} ${player}`);
// });
// for (let player of Object.keys(b)) {
//   console.log(`Hawa wasee ${player}`);
// }

// const [a, b] = game.players;
// const key = Object.keys(b);
// key.forEach((item) => {
//   console.log(item);
// });
// const teams = {
//   knockout: {
//     semi: {
//       fixture1: { home: "Manchester United", away: "West Bromwich" },
//       fixture2: {
//         home: "Arsenal",
//         away: "Leicester",
//       },
//     },
//     final: {
//       home: "Arsenal",
//       away: "Manchester United",
//     },
//   },
// };

// let semiTeams = teams.knockout.semi;
// let finalTeams = teams.knockout.semi;
// semi = { ...semiTeams };
// final = { ...finalTeams };
// // console.log("final Teams", final);
// // console.log("Semi teams", semi);

// function stageGroup(stageTeam) {
//   const play = [];
//   const key = Object.keys(stageTeam);
//   console.log("The teams are", stageTeam);
//   key.forEach((item) => {
//     play.push(item);
//   });
//   console.log(play);
//   for (a of play) {
//     console.log(a);
//   }
// }
// stageGroup(semi);

// console.log(teams);

// let { final, semi } = teams.knockout;
// final = teams.knockout.final;

// function finalTeams(nextTeams) {
//   const newTeams = [];
//   const progressTeams = [];
//   newTeams.push(nextTeams);
//   newTeams.forEach((item) => {
//     progressTeams.push({
//       homeTeam: item.home,
//       awayTeam: item.away,
//     });
//   });
//   progressTeams.forEach((item) => {
//     console.log("Home Team: ", item.homeTeam, "Away Team: ", item.awayTeam);
//   });
// }
// finalTeams(final);

//--------------------------------------OBJECT.VALUES
// let knockout = teams.knockout;
// let { semi, final } = teams.knockout;
// semi = { ...knockout.semi };

// function semiTeams(sTeams) {
//   const all = Object.entries(sTeams);
//   const data = Object.values(sTeams);
//   const key = Object.keys(sTeams);
//   for (let x of all) {
//     console.log("Get in", x);
//   }
//   console.log("Entries ni: ", all);
//   const progressTeams = [];
//   finalTeams = [];
//   progressTeams.push(...data);
//   console.log("Hawa", progressTeams);
//   progressTeams.forEach((item) => {
//     finalTeams.push({
//       homeTeam: item.home,
//       awayTeam: item.away,
//     });
//   });
//   finalTeams.forEach((item) => {
//     console.log(item.homeTeam);
//   });
// // }
// semiTeams(semi);

// function semiTeams(newTeams) {
//   const entries = Object.values(newTeams);
//   const key = Object.keys(newTeams);
//   const semiArray = [];
//   for (let x of entries) {
//     console.log("entered Teams", x);
//   }
//   console.log(...semiArray);
// }
// semiTeams(semi);
// console.log(game);
//Q1----
// const scorers = [...game.scored];

// function goalScorers(scorer) {
//   const value = Object.values(scorer);
//   const y = Object.keys(scorer);
//   for (let name of value) {
//     console.log(`${name} scored 1 goal`);
//   }
// }
// goalScorers(scorers);

//Q2 the reduce es6 function

// let odds = Object.values(game.odds);
// console.log(odds);
// // let average = (odds) => odds.reduce((a, b) => a + b) / odds.length;
// // console.log(average(odds));
// const total = odds.reduce((a, b) => {
//   return a + b;
// }, 0);
// const avg = total / odds.length;
// console.log(avg);
//Q3
// let odds = Object.entries(game.odds);
// console.log(odds);
// for ([key, value] of odds) {
//   console.log(`${key} has an odd of ${value}`);
// }
// let entries = Object.entries(game.scored);
// for ([index, value] of entries) {
//   console.log(value);
// }
// console.log(restaurant);
// const entries = Object.entries(restaurant.hours);
// console.log(entries);
// for (let [index, { open, close }] of entries) {
//   console.log(`The hotel opens on ${index} at ${open} and closes at ${close} `);
// }

// for (let [index, value] of Object.entries(restaurant.mainMenu)) {
//   console.log(value);
// }
// console.log(restaurant);
// let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// const entries = Object.entries(menu);
// console.log(entries);
// for ([index, value] of entries) {
//   console.log(value);
// }
// const entries = Object.entries(restaurant.hours);
// for (let [index, value] of entries) {
//   console.log(value);
// }

//-------------------SETS------------------
// const meals = ["Mutura", "Mutura", "Kichwa", "Choma"];
// const newOrders = new Set(meals);
//console.log(...newOrders);
//has
// let test = newOrders.has("Mutura");
// console.log(test);
//clear
// let test2 = newOrders.clear();
// console.log(newOrders.has("Kichwa"));

//Delete
// let test3 = newOrders.delete("Kichwa");
// console.log(newOrders);

//add
// let test4 = newOrders.add("Mayai");
// console.log(newOrders);

//size
//console.log(newOrders.size);

//Iterating through sets
// for (x of newOrders) {
//   console.log(x);
// }
// const newMeals = [...newOrders];
// newMeals.push("Samosa");
// console.log(newMeals);

// const person = {
//   fname: "Gideon",
//   friends: ["Me", "Myself", "I", "Me"],
// };

// let entry = Object.entries(person);
// let friends = person.friends;
// const friendSet = new Set(friends);
// console.log(friendSet.add("Chloe"));
// const test = friendSet.delete("Me");
// console.log(friendSet);
// const test3 = friendSet.size;
// console.log(test3);
// console.log(friendSet.has("Chloe"));

//console.log(new Set("Kirimanjaro").size);
// const fname = "Kirimanjaro";
// let splitName = fname.split("");
// console.log(splitName.length);
//-=------------------------------Map------------------
// const final = new Map();
// final.set("girls", { weight: 80, height: 1.8, school: "Graduate School" });
// final.delete("girls");
// console.log(final.has("girls"));
// final.set("boys", { weight: 80, height: 1.9, school: "Phd" });
// console.log(final.get("boys"));

// const playerScore = [...scored];

// const team = new Map();
// const attackers = ["Cavani", "Greenwood", "Rashford", "Martial"];
// const strikers = [...attackers];
// //--------set
// let newTeam = team
//   .set("players", strikers)
//   .set("date", "20/10/2021")
//   .set("Wins", 12)
//   .set("draws", 10);
//-------get
// const goalDifference = team.get("Wins") - team.get("draws");
// console.log(goalDifference);
// console.log(newTeam.get("date"));
// //has
// console.log(team.has("Wins"));
// //delete
// team.delete("Wins");
// console.log(team);
// //size
// console.log(team.size);
// //clear
// team.clear();
// console.log(team);

//console.log(...champions);

//-------------------------------------Map Iteration
// let player = {
//   plays: {
//     wins: 25,
//     draw: 5,
//     losses: 7,
//   },
//   teams: ["Arsenal", "Liverpool"],
// };
// const [...a] = player.teams;
// console.log(a);

// const data = new Map([
//   [1, "Java"],
//   [2, "C#"],
//   [3, "Java Script"],
// ]);

// for ([key, value] of data) {
//   const num = prompt("Which");
//   if (num === key) {
//     console.log(`You selected ${key} for ${value}`);
//   }
// }

// for (x of data) {
//   console.log(x);
// }

// const team = new Map([
//   ["name", "Manchester United"],
//   ["players", ["Rashford", "Cavani"]],
// ]);
// const { plays } = player;
// console.log(plays);
// let keys = Object.values(plays);
// const newKeys = [...keys];
// for (x of newKeys) {
//   console.log(x);
// }
// console.log(newKeys);
// for ({ key, value } of finalPlayer) {
//   console.log(key);
// }
// for ([key, value] of team) {
//   console.log(key);
// }

// const entry = Object.entries(player.plays);
// const values = Object.values(player);
// const keys = Object.keys(player);
// console.log("entry: ", entry);
// console.log("values: ", values);
// console.log("Keys: ", keys);

// const newPlayer = new Map(entry);
// let final = [...newPlayer];

// console.log(final);
// for (x of final) {
//   console.log(x);
// }
// const usersApi = "'https://jsonplaceholder.typicode.com/todos/1";
// async function getData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => {
//         const entries = Object.values(json);
//         console.log(entries);
//         const details = [];
//         for (x of entries) {
//           details.push({
//             jina: x.name.charAt(0).toUpperCase() + x.name.slice(1),
//             city: x.address.city,
//             geo: x.address.geo.lat,
//             email: x.email,
//           });
//         }
//         console.log("Hawa", details);
//       });
//   } catch {
//     console.log("There is an error");
//   }
// }

// getData();

//---------WORKING WITH STRINGS--------------

const airplane = "Kenya Airways";
const plane = "ABR";
let index = 2;

//string Methods

// console.log(plane.length);
// console.log(plane[0]);
// console.log(plane.indexOf("T"));
// console.log(plane.lastIndexOf("T"));
//console.log(plane.slice(4));
//console.log(plane.charAt(index));
// console.log(plane.concat("", airplane));
//console.log(plane.slice(2, plane.lastIndexOf(-2)));
//console.log(new String("Kirimanjaro"));
// console.log(plane.lastIndexOf("T"));

// const parent = "me";
// function palindrome(name) {
//   const check = name.split("").reverse().join("");
//   if (name === check) {
//     console.log("This is a palindrome");
//   } else {
//     console.log("This is not a palindrome");
//   }
//   return check;
// }
// palindrome(parent);

// const newPlane = plane.split("").reverse().join("");
// console.log(newPlane);
// const upper = plane.toLowerCase();
// const newPlane = upper.charAt(0).toUpperCase() + upper.slice(1);
// console.log(newPlane);

// const userMails = ["  Gideonkirimanjaro@gmail.com", "  chloeBailey@gmail.com"];
// for (mail of userMails) {
//   const lower = mail.toLowerCase().trim();
//   console.log("Your mails are: ", lower);
// }
//replace
// const weight = "450 pounds";
// const weightKg = weight.replace("pounds", "Kilos");
// console.log(weightKg);
// const customers = {
//   name: "Moses",
//   weight: [
//     ["may", 95],
//     ["august", 89],
//     ["december", 83],
//   ],
// };
//replace
//onst weight = customers.weight;
// for ([key, value] of weight) {
//   console.log(key.replace("may", "july"));
// }

//replaceALL

// let word = "The big brown fox jumped over the small white fox";
// word = word.replaceAll("fox", "dog");
// console.log(word);

// const firstName = "gideon";
// const lastName = " kirimanjaro";

// // function upper(fName, sName) {
// //   const capital = fName[0].toUpperCase() + fName.slice(1);
// //   const capital2 = sName[0].toUpperCase() + sName.slice(1);
// //   const capitalised = capital + capital2;
// //   console.log(capitalised);
// // }
// // upper(firstName, lastName);

// const creditCard = "234434334";

// const newCard = creditCard.slice(-4).padStart(creditCard.length, "*");
// console.log(newCard);

const word = "My name is Gideon Kirimanjaro";
const job = "  Software Engineer";
let creditCard = 14343343;
creditCard = "14343343";
// console.log(word.includes("name"));
// console.log(word.concat(" ", job));
// const final = creditCard.slice(-4).padStart(creditCard.length, "*");
// console.log(final);
// console.log(job.charAt(4));
// console.log(job.indexOf("Engineer"));
//console.log(job.replace("Engineer", "Developer"));
// console.log(job.trim());
