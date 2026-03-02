//Практика
//Задача 1.
let x = 5;
let y = 8;
let z = 13;

console.log(x + y + z);
console.log(z - x);
console.log(x * y);
console.log(z ** y);
console.log(y % x);

//Задача 2.
let someString = prompt("Введите текст") ?? "Default string";
console.log(someString);

//Задача 3.
"" + 1 + 0; // '10'
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // '9px'
"$" + 4 + 5; // '$45'
"4" - 2; // 2
"4px" - 2; // NaN
" -9 " + 5; // '-95'
" -9 " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2

//Задача 4.
let n = prompt("Введите любое число");
if (n % 2 === 0) {
  console.log(`Число ${n} четное`);
} else {
  console.log(`Число ${n} нечетное`);
}
if (n === NaN) {
  alert("Ошибка ввода!");
}

//Задача 5.
let a = 15;
let b = -8;
let c = 23;

if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);
}

//Задача 6.
let squareOfNumbers = 0;
while (squareOfNumbers < 10) {
  console.log(squareOfNumbers ** 2);
  squareOfNumbers++;
}

//Задача 7.
let sum = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 5 === 0 && i !== 0) continue;
  sum += i;
  if (sum > 15) break;
}
console.log(sum);

//Задача 8.
while (true) {
  let input = prompt("Введите число больше 100:");
  if (input === null) {
    console.log(input);
    break;
  }
  if (input > 100) {
    console.log(input);
    break;
  } else {
    input = prompt("Введите число ещё раз:");
  }
}

//Базовый уровень
//Задача 1
let valueTrue = "true";
let valueFalse = false;
let valueNum = 17;
let valueUnd = undefined;
let valueNull = null;

console.log(typeof valueTrue);
console.log(typeof valueFalse);
console.log(typeof valueNum);
console.log(typeof valueUnd);
console.log(typeof valueNull);

//Задача 2
let height = 15;
let width = 20;
if (height > width) {
  console.log(height);
} else {
  console.log(width);
}

//Задача 3
for (let n = 1; n <= 20; n++) {
  if (n % 3 === 0) {
    console.log(n);
  }
}

//Задача 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
if (shouldGoToWork) {
  console.log(shouldGoToWork);
}

//Задача 5
let userNum = Number(prompt("Введите любое число"));
if (userNum % 5 === 0 && userNum % 3 === 0) {
  console.log("FizBuz");
} else if (userNum % 3 === 0) {
  console.log("Buz");
} else if (userNum % 5 === 0) {
  console.log("Fiz");
}

//Задача 6
let age = Number(prompt("Введите ваш возраст"));
if (age > 18) {
  console.log("Попей пивка");
} else if (age >= 16 && age <= 18) {
  console.log("Можешь выкурить сигаретку, только маме не говори");
} else {
  console.log("Пей колу");
}

//Задача 7
let direction = prompt("Куда хотите отправиться? (юг, север, запад, восток)");
switch (direction) {
  case "юг":
    console.log("на юг пойдешь счастье найдешь");
    break;
  case "север":
    console.log("на север пойдешь много денег найдешь");
    break;
  case "запад":
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    console.log("на восток пойдешь разработчиком станешь");
    break;
  default:
    console.log("Попробуй ещё раз");
}

//Продвинутый уровень
//Задача 1
let userName = prompt("Введите ваше имя");
if (userName) {
  let formatted = userName
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  alert(`Привет, ${formatted}!`);
}

//Задача 2
let steps = 7;
for (let i = 1; i <= steps; i++) {
  console.log("_".repeat(i));
}
