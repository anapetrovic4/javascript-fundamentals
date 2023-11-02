// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('jonas');
// console.log(23);

// let fisrtName = 'matilda';

// console.log(name);
// console.log(name);
// console.log(name);

// let job1 = 'programmer';
// let myFirstJob = 'coder'
// console.log(job1);
// console.log(myFirstJob);

// Conventions for naming variables:

// camelCase
// cannot start with a number
// numbers, letters, underscores and $
// cannot use reserved keywords (new, function)
// *name si a reserved keyword, but it is allowed
// do not use uppercase letter
// constants are written in uppercase because they will never change, like PI = 3.1415
// descriptive names for variables

// true;
// console.log(true);
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2000;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31; //reassigning/mutating the variable

// const birth = 2000;
// // birth = 2002;

// // const job;

// var job = 'programer';
// job = 'teacher';

//Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Petrovic'
// console.log(firstName + ' ' + lastName);

// //Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

//Comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5); //left to right operation

// let x, y;
// x = y = 25 - 10 - 5; //right to left operation
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ' , a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines`);

//18. if else statements
// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving licence 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//20. type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(String(23), 23);

// //20. type coercion
// console.log('I am' + 23 + 'years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean('Jonas')); //true
// console.log(Boolean({})); //true
// console.log(Boolean(''));

// const money = 0;
// //JavaScript pokusava da sve sto se nalazi unutar zagrada prevede u Boolean
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//     console.log('defined');
// } else {
//     console.log('undefined!!');
// }

//21. equality operators
// const age = '18';
// if (age === 18) console.log('you just became an adult STRICT');
// if (age == 18) console.log('you just became an adult LOOSE');

// const favorite = Number(prompt("what's your fav number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is an amazing number');
// } else if (favorite === 7) {
//     console.log('7 is also a cool number');
// } else if (favorite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('number is not 23 or 7');
// }

// if (favorite !== 23) {
//     console.log('why not the 23?');
// }

//24. Logical operators
// const hasDriversLicence = true;
// const hasGoodVision = true;

// console.log(!hasDriversLicence || hasGoodVision);


// if (hasDriversLicence && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

// const isTired = false;
// console.log(hasDriversLicence && hasGoodVision && isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

//26. The Switch Statement
// const day = 'thursday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }

//27. Statements and Expressions
// if (23 > 10) {
//     const str = '23 is bigger';
//     //samo deklarise varijablu
// }

// console.log(`I'm ${2037 - 1991} years old.`);

//28. Ternary Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

//expression
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

