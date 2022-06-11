"use strict"

// if (1) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if  (num > 100) {
//     console.log('mnogo');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('ok!') : console.log('Error');


const num = 50;

switch (num) {
    case 49:
        console.log('incorrect');
        break;
    case 100:
        console.log('incorrect');
        break;
    case 50:
        console.log('evrica!');
        break;
    default:
        console.log('another time');
        break;

};