// Tack 1
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

//first way
function arrayElementsDeclaration(value) {
   console.log('value ', value);
}

fibonacci.forEach(arrayElementsDeclaration);

//second way
const arrayElementsArrow = fibonacci.forEach((value) => {
    console.log('value: ', value);
})

     
//Tack 2
const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
 
//first way
function methodMap(user, index) {
    return `member, ${index + 1}: ${user}`;
}

const member1 = users.map(methodMap)
console.log(member1);

//second way
const member2 = users.map((user, index) => `member ${index + 1}: ${user}`);

console.log(member2);


//Tack 3
const numbers = [7, -4, 32, -90, 54, 32, -21];

//first way
function positiveNumbers1(number) {
    return number >= 0;
}

const number1 = numbers.filter(positiveNumbers1);
console.log(number1);

//second way
const number2 = numbers.filter((number) => number >= 0);
console.log(number2);


//Tack 4
const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

//first way
function sumNumbers(accum, value) {
    return accum + value;
}

const sumNumbers1 = fibonacci.reduce(sumNumbers);
console.log(sumNumbers1);

//second way
const sumNumbers2 = fibonacci.reduce((accum, value) => accum + value);
console.log(sumNumbers2);


//Tack 5
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

//first way
function firstEvenNumber(value) {
    return value % 2 === 0
}

const firstEvenNumber1 = numbers.find(firstEvenNumber);
console.log(firstEvenNumber1);

//second way
const firstEvenNumber2 = numbers.find((value) => value % 2 === 0);
console.log(firstEvenNumber2);












