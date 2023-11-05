"use strict";
let age;
age = 12;
console.log(age);
age = 30;
console.log(age);
// age = 'Kamal';
//string type
let fName = 'John';
console.log(fName);
let newName = fName.toUpperCase();
console.log(newName);
// fName = 10;
//boolean type
let isValid = 10 > 5;
console.log(isValid);
//
// isValid = 10;
// isValid = 'Kamal';
//array type
let markList = [10, 20, 30, 40];
console.log(markList);
console.log(markList[0]);
let total = 0;
for (let i = 0; i < markList.length; i++) {
    total += markList[i];
}
console.log('total:' + total);
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let color = 2;
switch (color) {
    case Color.Blue:
        console.log('Selected color is Blue');
        break;
    case Color.Green:
        console.log('Selected color is Green');
        break;
    case Color.Red:
        console.log('Selected color is Red');
        break;
    default:
        console.log('Invalid Color');
        break;
}
//any type
let randomValue = 10;
console.log(randomValue);
randomValue = 'kamal';
console.log(randomValue);
randomValue = true;
console.log(randomValue);
3;
