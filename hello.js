

//-----------------------------------let,const, var-----------------------------------------------------------------------------------------------
// let age = 30;
// age = 25;
// console.log(age)
// const brithYear = 1995;
// console.log(brithYear)

//------------------------------------Operators--------------------------------------------------------------------------
// const birthYear = 1995
// // //-----Math Operators
// // let age = 2021-birthYear;
// // console.log(age**2) //** is to the power */
// // const fname = 'Gideon'
// // const lname = 'Kirimanjaro';
// // console.log(fname + lname) //Concatenation
// // //--------Assignment Operators
// // let x = 10+5
// // x+=20
// // x++
// // console.log(x)
// //----------Comparison Operators

// const schoolYear = 2020

// console.log(birthYear>schoolYear)
//challenge-----------------------
// let mark = (mass, height)=>{
//     let markBmi= mass/(height*height)
//     console.log("Mark's BMI is: ", markBmi) 
// }
// let john = (mass, height)=>{
//     let johnBmi= mass/(height*height)
//     console.log("John's BMI is: ", johnBmi) 
// }

// mark(78,1.69);
// john(92,1.95);
//---------------------------------------------Strings & Template Literals---------------------------------------------------------------------------------------
// const birthYear = 1995;
// let firstName = 'Gideon kirimanjaro'
// console.log(`My name is ${firstName} I was born in ${birthYear-10} `)

//-------------------------------------------------------if else ----------------------------------------------------------------------------------------------------------

//Iternary Operatory(if operator)------------------
// const tax = 14;
// const vat = 16;

// tax>vat ? console.log('Tax is less') : console.log("Vat is more")
// if(tax<vat){
//     console.log('Hooray')
// }
// else{console.log('OOps')}
//Challenge---------------------------------
// const markHeight = 1.69;
// const markMass = 78;
// const JohnHeight = 1.95;
// const JohnMass = 92;

// const markBmi = markMass/(markHeight**2);
// const johnBmi = JohnMass/(JohnHeight**2);

// // if(markBmi<johnBmi){
// //     console.log(`Marks Bmi is less than John's at ${markBmi}`)
// // }else {console.log(`John's Bmi is less than Mark's at ${johnBmi}`)}
// markBmi<johnBmi ? console.log(`Marks Bmi is less than John's at ${markBmi}`):
// console.log(`John's Bmi is less than Mark's at ${johnBmi}`)

 // ---------------------------------------------Type Conversion & Coercion-------------------------------------------------------------------------------------------------
//Conversion-------------------
//  let birthYear = '1995'
//  birthYear = Number(birthYear)
//  console.log(20+birthYear )
//Coercion----------------------
// + will concatenate the strings but any other operator will be executed
// console.log('20' + '20') // 2020
// console.log('20' * '20') // 400
// console.log('20' / '20') // 1
// console.log('21' > '20')  //true
//---------------------------------------------------Truthy & falsy-------------------------------------------------------------------

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Gideon'));
// console.log(Boolean({}));

// const alcohol = 10; 
// // The 0 and Undefined means false thus
// 'not an addict , the {} or value defined means true thus an addict '
// if(alcohol){
//     console.log('You are an addict')
// }
// else{console.log('You are not an addict')}

//-------------------------------------------------- == & === ----------------------------------------------------------------------
// let age = '18'
// console.log(18==age); //true
// console.log(18===age); //false This is strict: No type conversions

//----------------------------------------------------------Boolean Logic ------------------------------------------------------------
// const player = (age,height)=>{
//     if(age=== 20 && height> 1.80){
//         console.log("Perfect Player")
//     }
//     else if(age === 20 && height < 1.7){
//         console.log("Lacks height")
//     }
//     else if(age === 21 || height > 2.0){
//         console.log("Prime Player")
//     }
//     else if(age !==20 && height !=1.9){
//         console.log("Search for another player")
//     }

// }
// player(30, 2.1)
//- Challenge
// let dolphinPoints = (150 + 108+89)/3;
// let koalaPoints = (150 + 108+89)/3;
// console.log(`Dolphin Points:  ${dolphinPoints}`)
// console.log(`Koala Points:   ${koalaPoints}`)

// if(dolphinPoints>koalaPoints && dolphinPoints>100){
//     console.log("Dolphins Win")
// }
// else if (koalaPoints>dolphinPoints && koalaPoints>100)
// {console.log('Koala Win')}
// else if (koalaPoints === dolphinPoints && koalaPoints>100 && dolphinPoints>100)
// {console.log('A draw')}

// else{console.log("No team Won")}

//---------------------------------------------- SWITCH STATEMENT----------------------------------------------------------------------
//Strings--------
// const day = 'Wednesday';

// switch(day){
//     case 'Monday':
//         console.log("Today is monday");
//         break;
//     case 'Tuesday':
//         console.log("Today is Tuesday");
//         break;
//     case 'Wednesday':
//         console.log("Today is Wednesday");
//         break;
//     case 'Thursday':
//         console.log("Today is Thursday");
//         break;
//     case 'Friday':
//         console.log("Today is Friday");
//         break;
//     default:
//         console.log("Not a day")

// }
//Numbers------
//switch statements worked for fixed values
// const age = 18;
// switch(age){
//     case (18):
//         console.log("Today is monday");
//         break;
//     case 'Tuesday':
//         console.log("Today is Tuesday");
//         break;
//     case 'Wednesday':
//         console.log("Today is Wednesday");
//         break;
//     case 'Thursday':
//         console.log("Today is Thursday");
//         break;
//     case 'Friday':
//         console.log("Today is Friday");
//         break;
//     default:
//         console.log("Not a day")

// }
//--------------------------------------------------------------ITERNARY OPERATOR----------------------------
//let obj = 24;
// obj>=20 ? console.log("You are above 20"): console.log("You are below")
// obj <=19 ? console.log("Less than 19") : console.log("You are above 19")

// const age = 25;
// let statement = age>20 ? 'Adult': 'Child'
// console.log(statement)
// //Alternative
// console.log(`I am a ${age>20 ? 'Adult': 'Child'}`)
//Challenge---------------
// let bill = 275
// const tip1 = 0.15
// bill>150 && bill<300 && tip1 === 0.15 ? console.log(`The tip is ${0.15*bill} and total is ${1.15*bill}`) 
// : console.log(`The tip is ${0.2*bill} and total is ${1.2*bill}`)
