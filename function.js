"use strict";
//-----------------------------------------------FUNCTIONS--------------------------
//-----------------DEFAULT PARAMETERS
// const flight = [];
// const createFlight = function (
//   flightNum,
//   passengers,
//   price = 2000 * passengers
// ) {
//   const booking = {
//     flightNum,
//     passengers,
//     price,
//   };
//   flight.push(booking);
//   console.log(flight);
// };
// createFlight("AN45", 245);

// const flightNumber = "D345";
// const person = {
//   fName: "Gideon Kirimanjaro",
//   passport: 32441842,
// };

// const passengerDetails = function (fNumber, passenger) {
//   const passport = passenger.passport;
//   passenger.fName = "Mr " + passenger.fName;
//   if (passport === 32441842) {
//     console.log(passenger.fName);
//   } else {
//     console.log("Passenger does not exist");
//   }
// };
// passengerDetails(flightNumber, person);

//-------------------Higher Order Functions

// const reverse = function (word) {
//   return word.split("").reverse().join("");
// };

// const upper = function (word) {
//   return word[0].toUpperCase() + word.slice(1);
// };

// const transformer = function (str, fn, fn2) {
//   console.log(fn(str));
//   console.log(fn2(str));
// };

// const employeeName = "Kirimanjaro";
// transformer(employeeName, reverse, upper);

//Thet work the same as eevent listeners

// document.getElementById("btn").addEventListener("click", greet);
// function greet() {
//   console.log("🎈 🎂 🎂 ");
// }

//-------------Encapsulated Functions

// const greeting = function (phrase) {
//   const example = function (name) {
//     console.log(`${phrase} ${name}`);
//   };
//   return example("Gideon");
// };
// greeting("Hello");

//Variation 2
// const greeting = (phrase) => {
//   return (name) => {
//     console.log(`${phrase} ${name}`);
//   };
// };
// //greeting("Hello")("Kirimanjaro");

// //Using Closures
// const greetings = greeting("Hey");
// greetings("Kirimanjaro");

// const passenger = {
//   fName: "Kirimanjaro",
//   visa: 234544,
//   country: "Kenya",
//   flights: [],
//   booking(to) {
//     console.log(
//       `Passenger: ${this.fName}  visa: ${this.visa}  from country: ${this.country} to ${to}`
//     );
//     this.flights.push({
//       name: this.fName,
//       visa: this.visa,
//       country: this.country,
//     });
//     console.log(...this.flights);
//   },
// };
// //passenger.booking("Dubai");

// const newPassenger = {
//   fName: "Chloe",
//   visa: 234544,
//   country: "Kenya",
//   flights: [],
// };
// const flightBookings = passenger.booking;
// flightBookings.call(newPassenger, "Paris");

// const student = {
//   firstName: "Chloe Bailey",
//   year: 3,
//   gender: "Female",
//   details(n) {
//     console.log(
//       `The student's name is ${this.firstName} in year ${this.year} and a ${this.gender} student studying in ${n}`
//     );
//   },
// };
// const studentDetails = student.details;

// const student2 = {
//   firstName: "Gideon Kirimanjaro",
//   year: 2,
//   gender: "Male",
// };
// studentDetails.call(student2, "St John's University ");

// const player = {
//   height: 1.78,
//   weight: 76,
//   bmi() {
//     return this.weight / this.height ** 2;
//   },
// };
// const bmi = player.bmi();
// const details = {
//   firstName: "Kirimanjaro",
//   levels: "Ok",
//   message(fn) {
//     console.log(
//       `The client is ${this.firstName} and his levels are ${this.levels} at ${fn}`
//     );
//   },
// };
// console.log(details.message(bmi));

// const greeting = (nm) => {
//   console.log(`Hello ${nm}`);
// };
// const fName = (nm, fn) => {
//   console.log(fn(nm));
// };
// fName.call("Sexy", greeting);

//-----------------------------Very Important------------
//----------------------------CALL---------------
//Example 1-------
// const flights = {
//   region: "America",
//   plane: "12323",
//   passengers: 245,
//   book(destination, departure) {
//     console.log(
//       `The plane number ${this.plane} carries ${this.passengers} passengers enroute to ${destination} from ${departure}`
//     );
//   },
// };

// const bookings = flights.book;

// const flights2 = {
//   region: "Europe",
//   plane: "5678",
//   passengers: 245,
// };

// //The first value is where the 'this' keyword will point to
// //works
// bookings.call(flights, "Rome", "London");
// bookings.call(flights2, "Nairobi", "Kisumu");

//Example 2

// const nba = {
//   league: "NBA",
//   region: "America",
//   areas: ["western Conference", "Eastern Conference"],
//   stats(height) {
//     console.log(
//       `The players in the ${this.league} play in ${this.region} with an average height of ${height}`
//     );
//   },
// };
// const epl = {
//   league: "EPL",
//   region: "UK",
// };
// const stats = nba.stats;
// stats.call(nba, "6'8");
// stats.call(epl, "6'2");

//-----------------BIND--------------------
//Creates a function from another function
//Form Example 2

// const f = nba.stats.bind(epl);
// console.log(f("5'10"));
// const stats = nba.stats;
// const fNba = stats.bind(epl, "6'8");
// console.log(fNba());

// const eplStats = nba.stats;
// const epl1 = eplStats.bind(epl);
// console.log(epl1("6'5"));
//

// const nbaMethod = nba.stats;
// const fn = nbaMethod.bind(nba, "6'10");
// console.log(fn());

//Example 3 ###General Practice

// const constructIt = {
//   region: "Nairobi",
//   workers: {
//     worker1: {
//       fullName: "Kevin Obienga",
//       jobGroup: "C",
//       age: 30,
//     },
//     worker2: {
//       fullName: "Francis Ondiek",
//       jobGroup: "B",
//       age: 37,
//     },
//   },
//   employees(jina) {
//     console.log(`The ${this.region} region has ${jina} as employees `);
//   },
// };
// let { worker1, worker2 } = constructIt.workers;
// const all = [worker1, worker2];
// const entries = Object.values(all);
// const names = [];
// for (let x of entries) {
//   const majina = x.fullName;
//   constructIt.employees(majina);
// }

// const firstYear = {
//   fullNames: "Chloe Muthoni",
//   year: 2,
//   grade: "A",
//   details(school) {
//     console.log(
//       `${this.fullNames} is in year ${this.year} and has an ${this.grade} studying at ${school}`
//     );
//   },
// };
//call
// const details = firstYear.details;
// const final = details.call(firstYear, "Strathmore");
// console.log(final);

//bind
// const details = firstYear.details;
// const final = details.bind(firstYear, "Maseno");
// console.log(final());

// const bmi = (weight, height) => {
//   return weight / height ** 2;
// };

// const final = bmi.call(null, 75, 1.78);
// console.log(final);

// const final = bmi.bind(null, 76);
// console.log(final(1.78));

// setTimeout(function () {
//   console.log("WON");
// }, 4000);

// let f, b;

// const marks = (n) => {
//   const avg = n / 5;
//   f = () => {
//     console.log(avg * 3);
//   };
// };
// b = (x) => {
//   console.log(x * 5);
// };
// marks(2000);
// f();
// b(3);
