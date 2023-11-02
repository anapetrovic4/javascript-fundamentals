// Assingment 1:
// LECTURE: Values and Variables

// const country = 'Serbia';
// const continent = 'Europe';
// const population = 130000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// Assingment 2:
// LECTURE: Data Types

// const isIsland = false;
// const language = 'Serbian';
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(continent)


// // Assingment 3:
// // LECTURE: let, const and var

// console.log(language);
//country = 'Switzerland';

// Assingment 4:
// LECTURE: Basic Operators

// task 1
// let firstHalf, secondHalf = 0;
// firstHalf = secondHalf = population / 2;
// console.log(firstHalf, secondHalf);

// // task 2
// population += 1;
// console.log(population);

// // task 3
// let populationFinland = 6000000;
// console.log(population > populationFinland);

// // task 4
// let populationAverage = 33000000;
// console.log(population > populationAverage);

// task 5
// const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
// console.log(description);

// Assingment 5:
// LECTURE: Strings and Template Literals

// const description = `${country} is in ${continent} and its ${population} people speak ${language}`
// console.log(description);

// Assingment 6:
// LECTURE: Type Conversion and Coercion
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// Assingment 7:
// LECTURE: Equality Operators: == vs. ===

// const numNeighbours = prompt('how many neighbour countries does your country have?');

// if (Number(numNeighbours) === 1) {
//     // ovo ce biti false jer je rezultat iz prompta string a poredimo sa brojem
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// Assignment  8:
// LECTURE: Logical operators

// if (language === 'english' && population < 500000000 && !isIsland) {
//     console.log('you should live in serbia');
// } else {
//     console.log('serbia does not meet your criteria');
// }

// Assignment 9:
// LECTURE: The Switch Statement

// const language = 'serbian';

// switch (language) {
//     case 'chinese':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5h most spoken language');
//         break;
//     default:
//         console.log('Great language too');
// }

// Assignment 10:
// LECTURE: The Conditional Operator

population >= 33000000 ? console.log("Serbia's population is above average") : console.log("Serbia's population is below average");

