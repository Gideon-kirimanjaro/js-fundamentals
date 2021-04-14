"use strict";

//------------------------------------------FUNCTIONS--------------------------------------------------------------------------------------
// function fname(){
//     console.log('Gideon Kirimanjaro')
// }
// fname();
// fname();

//Function inside a function---------------
// function cutFruit(fruit){
//     return fruit* 3
// }
// function fruits(apples, oranges){
//     const cutApples = cutFruit(apples);
//     const cutOranges = cutFruit(oranges);
//     const juice = cutApples + cutOranges
//     console.log(`The juice has ${cutApples} apple pieces and ${cutOranges} Orange pieces for ${juice} mixed fruit juice`)
//     //console.log(`The apple  pieces are ${cutApples} and the Orange pieces are ${cutOranges}`)

// }
// fruits(3,4)
// fruits(2,7)

//Arrow Function------------------------------

// let year = (birthYear)=>{
//     let age = 2021 - birthYear;
//     return age
// }
// console.log(year(1995));
//Arrow functions dont have access to the 'this' keyword

//---Challenge------------------------

// function calcAverage(score1,score2,score3){
//     let average = (score1+score2+score3)/3;
//     return average

// }
// let dolphinsAverage = calcAverage(440,230,710)
// let koalaAverage = calcAverage(65,54,49)

// const checkWinner = (dolphinsAverage, koalaAverage)=>{
//     if(dolphinsAverage > 2*koalaAverage){
//         console.log('Dolphins win')
//     }
//     else if(koalaAverage > 2* dolphinsAverage){
//         console.log("Koala's win")
//     }
//     else{console.log('Nobody Wins')}
// }
// checkWinner(dolphinsAverage, koalaAverage);

//-----------------------------------------------------------------ARRAYS-------------------------------------------------------------

//let cars =  ["Saab", "Volvo", "BMW", "Lambo", "Range"]
//-------------------------length-----
//console.log(cars.length)
//-------------------------- Push-----------
//  cars.push('Toyota')
//---------------------------pop----------
// cars.pop()
//--------------------------shift-------
//cars.shift()
//--------------------------unshift------
//cars.unshift('Ferrari')
//------------------------IndexOf-------
//console.log(cars.indexOf("BMW"))
//-------------------------splice-----
//x.splice(position to delete from, number of items to delete)
//cars.splice(2, 3)
//x.splice(Index to insert, delete 0, insert this)
//cars.splice(3,1)
// cars.splice(1,0, "Added")
// X.splice(index to replace, insert 1, insert this)
//cars.splice(1,1, "Replaced")
//------forEach------
// cars.forEach((item, index)=>{
//     console.log(item, index)
// })
//---------------------challenge-------------------
//let bill = prompt("Enter your bill here: ");
// let bills = [125,555,44];
// bills.forEach((bill)=>{
//     function billCalc(tip,bill){
//         return (tip/100) * bill
//     }
//     function tipCalc(tip){
//         return (tip/100) * bill
//     }
//     const bill1 = billCalc(115, bill);
// const tip1 = tipCalc(15)
// const bill2 = billCalc(120, bill);
// const tip2 = tipCalc(20);
// bill>150 && bill<300? console.log(`Your tip is ${tip1} & total bill: ${bill1}`)
// : console.log(`Your tip is ${tip2} & total bill: ${bill2}`)
//   })

//-----------------------------------------------------------------OBJECTS------------------------------------------

// let student = new Object();
// student['name']= 'Gideon';
// student['Age'] = 25;
// student['Grade'] = 'A';

// console.log(student.name)
// let student = {
//     studentName: 'Gideon',
//     studentAge: 25,
//     studentGrade: 'A',
//     studentYear: 2013,
//     drivingLicense: true,
//     studentHobbies: ['Cycling', 'Football'],
//     studentAlumni(){
//         return this.schoolYears = 2020-this.studentYear
//     },
//     hasDrivingLicense(){
//         console.log(`My name is ${this.studentName} I am ${this.studentAge} and I have a drivers License`)
//     }
//     ,
//     noDrivingLicense(){
//         console.log(`My name is ${this.studentName} I am ${this.studentAge} and I don't a drivers License`)
//     }
//     ,

// }
// console.log(`My best hobbies include ${student.studentHobbies} and my name is ${student.studentName}`)
//student.studentTwitter = '@kirimanjarowakamau'
//console.log(student.studentTwitter)
//------Dot---------
//console.log(student.studentName)
//console.log(student.studentHobbies[0])
//------Bracket------
// const word = 'Age';
// console.log(student['student'+word])

// let quiz = prompt("What do you want to know about me: Name, Age, Grade");
// if(quiz !== ''){
// quiz = quiz[0].toUpperCase() + quiz.slice(1)
// }
// if(quiz=='Name' || quiz=='name'){
//     console.log(`My name is ${student['student' + quiz]}`)
// } else if(quiz=='Age' || quiz=='age'){
//     console.log(`My age is ${student['student' + quiz]}`)
// } else if(quiz=='Grade' || quiz == 'grade')
// {console.log(`My age is ${student['student'+ quiz]}`)}
// else if(quiz ===''){alert('field cannot be empty')}
// else{console.log('Please enter name,age or grade')}

//  console.log(student.studentAlumni())
//  console.log(student.schoolYears)
// if(student.drivingLicense !== true){
//     //console.log(`my name is ${student.studentName} and I am ${student.studentAge} and I have a driver's license`)
//     student.hasDrivingLicense();
// }
// else{
//     //console.log(`my name is ${student.studentName} and I am ${student.studentAge} and I don't have a driver's license`)
//     student.noDrivingLicense();
// }
//-------Challlenge----------

// let mark = {
//     markName: 'Mark',
//     markHeight: 1.69,
//     markWeight: 78,
//     calcMarkBmi:function() {
//          this.markBmi = this.markWeight/(this.markHeight**2);
//          return this.markBmi
//     }
// }
// mark.calcMarkBmi();
// let john = {
//     fname2: 'John',
//     height2: 1.95,
//     weight2: 92,
//     calcBmi2(){
//          return this.johnBmi = this.weight2/(this.height2**2);
//     }
// }
// john.calcBmi2();

// if(mark.markBmi>john.johnBmi){
//     mark.calcMarkBmi();
//     console.log(`${mark.markName}'s has a higher bmi and he weighs ${mark.markWeight} with a Bmi of ${mark.markBmi}` )
// }
// else if(john.johnBmi>mark.markBmi){
//     john.calcBmi2();
//     console.log(`${john.fname2} and he weighs ${john.weight2} with a Bmi of ${john.johnBmi}` )
// }
//-----ALWAYS CALL YOUR FUNCTIONS FOR THEM TO RUN------

// const player = {
//     playerName : 'Lionel Messi',
//     playerTeam: 'FC Barcelona',
//     playerSkills: 5,
//     playerGoals: 780,
//     playerMatches: 800,
//     playerAverage(){
//         this.average = this.playerGoals/this.playerMatches
//         return this.average
//     }
// }
// player.playerAverage();
// console.log(player.average);
// player.PlayerAge = 23;
// console.log(player)

//-------------------------------------------------------------FOR LOOP---------------------------------------------------

// for(let rep=0; rep<10; rep++){
//     console.log(rep)

// }
// const player = ["A","B","C","D"];
// for (let i=0 ; i<player.length; i++){
//     console.log(player[i], typeof player[i] )
// }
// const years = [1991, 1992, 1993, 1994];
// years.forEach(year=>{
//     const ages = [];
//     let age = 2021-year;
//     ages.push(age);
//     console.log(ages);

// })
// const ages = [];
// for(let i=0;i<years.length; i++){
//     const age = 2021-years[i];
//     ages.push(age)
//     console.log(ages)

// }
//---Looping Bakwards---
// for(let i=years.length-1; i>0 ; i--){
//     const age = 2021-years[i];
//     ages.push(age)
//     console.log(ages)
// }
//------While loop---------
// let n=1;
// let x=1;
// while(n<10){
//     console.log('Hello');
//     while(x<=2){
//         console.log('reps');
//         x++
//     }
//     n++;
// }

// let n = Math.floor(Math.random()*5);
// while(n<5){
//     n===3? console.log('You rolled a three'):console.log(n);
//     n++;
// }
//---------Challenge---

// let bills = [22,295,440,137,105,10,1100,85,52];
// let bill=[];
// let tip=[];
// function calcBill(){
//     bills.forEach(item=>{
//         if(item>150 && item<300){
//             const totalBill = 1.15* item;
//             const tip1 = 0.15*item
//             bill.push(totalBill)
//             return tip.push(tip1)

//         }else{
//             const totalBill2 = 1.2*item;
//             const tip2 = 0.15*item
//             bill.push(totalBill2)
//             return tip.push(tip2)
//         }
//     })

// };
// console.log(calcBill())
// console.log(`Total Bills: ${bill}`)
// console.log(`Total tipss: ${tip}`)
// //------AVERAGE BILL---------
// const sumBill = bill.reduce(function(a,b){
//     return a+b
// }, 0)
// console.log(sumBill)

// const averageBill = (a,b)=>{
//  return (a/b.length);
// }
// console.log(averageBill(sumBill,bill))
// //--------AVERAGE TIPS-----
// const sumTips = tip.reduce((a,b)=>{
//     return a+b
// },0)
// console.log(sumTips);

// const averageTips = (a,b)=>{
//     return a/b.length
// }
// console.log(averageTips(sumTips,tip))

//Exercises
//Reverse string
// let x = 'Gideon'
// const s = ()=>{
//     return x.split("").reverse().join("")
// }
// console.log(s())
//Reverse Number
// const reversedNum = (num) =>
//   parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
// const reversedNum = (num) =>
//   parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
// console.log(reversedNum(12))
///----Testing a palindrome-------
// var word = prompt("Enter a Word");
// const checkWord = (word)=>{
//     let word2 = word.split('').reverse().join('')
//     if(word == word2){
//         console.log(`Your word is a palindrome where ${word} reversed is ${word2}`)
//     }else{
//         console.log(`Your word is not a palindrome`)
//     }
// }
// checkWord(word)
