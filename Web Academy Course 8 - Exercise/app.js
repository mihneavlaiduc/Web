//Make a function that converts m to km

function convertToKm(meters) {
    return meters / 1000;
}

//console.log(convertToKm(1234))


//Rewrite the above as an arrow function

const convert = (meters) => {
    return meters / 1000;
}

//console.log(convert(23456))

//Write two functions. One returns the sum of two numbers, and the other prints to the console the result. Write the functions in a way to exemplify hoisting.

//printSum(sum(1,2))

function printSum() {
    console.log(sum(1,2));
}
function sum(num1, num2) {
    return num1 + num2;
}

//Make an object that has a getVal function that makes use of this.operation and returns arg - 10

const obj = {
    getVal: function (arg) {
        return this.operation(arg);
    },
};
function operation(arg) {
    return arg - 10;
}
operation(10)
const bindedObj = obj.getVal.bind(this);
//console.log(bindedObj(44));


//Make a function that converts an array of numbers to an array of the text representation.
//E.g. [2, 0, 4, 6] -> [‘two’, ‘zero’, ‘four’, ‘six’]

const textNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const numbers = [2,0,4,6,5,3]

const convertNumberToText = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        console.log(textNumbers[numbers[i]])
    }
}
//convertNumberToText(numbers)

//Similar to the previous problem make a function that transforms a number to the text representation

var numberInput = 16725335;

const numberInputToText = (input) => {

    input = Number(String(input).split('').reverse().join(''));
    while (input) {
        console.log(textNumbers[input % 10]);
        input = Math.floor(input / 10);
    }
}

//numberInputToText(numberInput)
