//Tack 1
const colors = ["red", "green", "blue"];

console.log(colors.length);


//Tack 2
const animals = ["monkey", "dog", "cat"];

console.log(animals.at(-1));


//Tack 3
//first way
const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;

console.log(numbers);

//second way
console.log(numbers.splice(0));


//Tack 4
const students = ["Polina", "Dasha", "Masha"];
students.pop()
students.push('Borya')
students['0'] = 'Andrey'

console.log(students);


//Tack 5
const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for(let number of cats){
console.log(number);
}


//Tack 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

let allNumbers = evenNumbers.concat(oddNumbers)

console.log(allNumbers[8]);


//Task 7
const binary0 = [0, 0, 0, 0];
const binary1 = binary0.join('1');

console.log(binary1);








