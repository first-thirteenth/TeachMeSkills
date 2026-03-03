//Практика.

//Задача 1.
let myName = 'Andrei';
let student = myName;
console.log(myName);
console.log(student);

//Задача 2.
let text = "Hello";
let counter = 100500;
let isOpen = true;
let someValue = null;

let typeText = typeof text;
let typeCounter = typeof counter;
let typeIsOpen = typeof isOpen;
let typeSomeValue = typeof someValue;

console.log(typeText);
console.log(typeCounter);
console.log(typeIsOpen);
console.log(typeSomeValue);

//Задача 3.
String(5); // '5'
String(-2); //'-2'
Boolean('Some string'); //true
Boolean(''); // false
Boolean(' '); // true
String(0); // '0'
String(NaN); // 'NaN'
Number(false); // 0
Number('Hi'); // NaN
Boolean(-25) +' '; // 'true'
Number(' \n \t '); // 0
String(undefined) +null; // 'undefinednull'
Boolean(undefined); // false
Number(undefined); // NaN

//Задача 4.
let firstName = prompt('Введите ваше имя');
let secondName = prompt('Введите вашу фамилию');
alert(myName + ' ' + myLastName);

//Задача 5.
let salaryPavel = 1500;
let salaryOlga = 1200;
let salaryMark = 2100;
let sumSalary = salaryPavel + salaryOlga + salaryMark;
alert(sumSalary);

//Блок 2. Домашнее задание
//Базовый уровень

//Задача 1.
let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;
console.log(sum);

//Задача 2.
let secondsInMinute = 60;
let minuteInHour = 60;
let hourInDay = 24;
let dayInYear = 365;
let myAgeInSeconds = secondsInMinute * minuteInHour * hourInDay * dayInYear * 41;

//Задача 3.
let count = 42;
let userName = '42';
let countString = String(count);
countString = count + '';
let userNameNumber = Number(userName);
userNameNumber = (userName * 1);
console.log(countString);
console.log(userNameNumber);

//Задача 4.
let a = 1;
let b = 2;
let c = 'белых медведей';
console.log(a + '' + b + ' ' + c);

//Задача 5.
let variable1 = 'морпех';
let variable2 = 'наледь';
let variable3 = 'попрек';
let variable4 = 'рубило';
let lengthWords = variable1.length + variable2.length + variable3.length + variable4.length;
console.log(lengthWords);

//Задача 6.
let str = 'six';
let num = 13;
let bool = false;
console.log(`Variable: str have type: ${typeof str}`);
console.log(`Variable: num have type: ${typeof num}`);
console.log(`Variable: bool have type: ${typeof bool}`);

//Задача 7.
nameUser = prompt('Введите ваше имя');
ageUser = prompt('Введите ваш возраст');
console.log(`${nameUser} ${ageUser}`);

//Продвинутый уровень
//Задача 1.
let a = 4;
let b = 3;
// 1 способ
a = a ^ b;
b = b ^ a;
// 2 способ
[a, b] = [b, a];

// Задача 2.
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);

