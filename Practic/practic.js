// //1
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(isEven(4));

//2
// function getMax(a, b) {
//     if (a > b) {
//         return a;
//     }else {
//         return b;
//     }
// }

// console.log(getMax(3, 8));

// //3
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum
// }

// console.log(sumTo(20));

// //4
// function getFirst(arr) {
//     return arr[0];
// }

// console.log(getFirst([7, 3, 13]));

// //5
// function sumArray(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }

// function sumArray(arr) {
//     return arr.reduce((acc, value) => acc + value, 0);
// }

// console.log(sumArray([3, 5, 13]));

// console.log(sumArray([5, 3, 13]));

// function sumArray(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([5, 3, 13]));

// //6
// function contains(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(contains([2, 4, 5, 6, 8], 42));

//7
// const person = {firstName: 'Иван', lastName: 'Петров'};

// function getFullName(person) {
//   return person.firstName + ' ' + person.lastName;
// }

// console.log(getFullName(person));

// //8
// function getEvens(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(getEvens([1, 2, 3, 4]));

// //9
// function sumArr(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArr([5, 4, 5, 13]));

// //10
// function getMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// console.log(getMin([5, 5, 3, 5, 5]));

// //11
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString('Анастасия'));

// //12
// function countVowels(str) {
//   let count = 0;
//   let vowels = 'aeiou';
//   for (let symbol of str.toLowerCase()) {
//     if (vowels.includes(symbol)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('Hello'));
 
//13
function isPalindrome(str) {
  for (let palindrome of str) {
    
  }
}



//Мне нужна функция. Она принимает массив. Я прохожу по каждому элементу. Складываю всё в переменную. Возвращаю результат.
