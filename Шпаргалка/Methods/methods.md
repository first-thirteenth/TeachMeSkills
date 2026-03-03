# Шпаргалка по часто употребляемым методам JavaScript

---

## Array.prototype.concat()
Объединяет два или более массива.
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2); // [1, 2, 3, 4]
```

---

## Array.prototype.filter()
Создаёт новый массив, включающий элементы, прошедшие проверку.
```javascript
let numbers = [1, 2, 3, 4];
let even = numbers.filter(n => n % 2 === 0); // [2, 4]
```

---

## Array.prototype.forEach()
Выполняет функцию для каждого элемента массива.
```javascript
let arr = [1, 2, 3];
arr.forEach(item => console.log(item)); // 1 2 3
```

---

## Array.prototype.includes()
Проверяет, содержит ли массив определённый элемент.
```javascript
let arr = [1, 2, 3];
arr.includes(2); // true
```

---

## Array.prototype.join()
Объединяет все элементы массива в строку.
```javascript
let arr = ['a', 'b', 'c'];
arr.join('-'); // "a-b-c"
```

---

## Array.prototype.map()
Создаёт новый массив с результатом вызова функции для каждого элемента.
```javascript
let arr = [1, 2, 3];
let squared = arr.map(x => x * x); // [1, 4, 9]
```

---

## Array.prototype.pop()
Удаляет последний элемент массива и возвращает его.
```javascript
let arr = [1, 2, 3];
let last = arr.pop(); // last = 3, arr = [1, 2]
```

---

## Array.prototype.push()
Добавляет элемент(ы) в конец массива.
```javascript
let arr = [1, 2];
arr.push(3); // arr = [1, 2, 3]
```

---

## Array.prototype.shift()
Удаляет первый элемент массива и возвращает его.
```javascript
let arr = [1, 2, 3];
let first = arr.shift(); // first = 1, arr = [2, 3]
```

---

## Array.prototype.slice()
Возвращает новый массив, содержащий копию части исходного массива.
```javascript
let arr = [1, 2, 3, 4];
let part = arr.slice(1, 3); // [2, 3]
```

---

## Array.prototype.splice()
Изменяет содержимое массива, удаляя или добавляя элементы.
```javascript
let arr = [1, 2, 3, 4];
arr.splice(1, 2); // arr = [1, 4]
```

---

## Array.prototype.unshift()
Добавляет элемент(ы) в начало массива.
```javascript
let arr = [2, 3];
arr.unshift(1); // arr = [1, 2, 3]
```

---

## String.prototype.includes()
Проверяет, содержит ли строка подстроку.
```javascript
let str = "hello";
str.includes("ell"); // true
```

---

## String.prototype.replace()
Заменяет часть строки на другую.
```javascript
let str = "Hello, world!";
let newStr = str.replace("world", "JS"); // "Hello, JS!"
```

---

## String.prototype.slice()
Возвращает часть строки.
```javascript
let str = "abcdef";
let part = str.slice(1, 4); // "bcd"
```

---

## String.prototype.split()
Разбивает строку на массив по разделителю.
```javascript
let str = "a,b,c";
let arr = str.split(","); // ["a", "b", "c"]
```

---

## String.prototype.toLowerCase()
Преобразует строку в нижний регистр.
```javascript
let str = "HELLO";
str.toLowerCase(); // "hello"
```

---

## String.prototype.toUpperCase()
Преобразует строку в верхний регистр.
```javascript
let str = "hello";
str.toUpperCase(); // "HELLO"
```


## Методы для работы с объектами

**Object.keys(obj)** — возвращает массив ключей объекта.
```javascript
const user = {name: "Иван", age: 25};
Object.keys(user); // ["name", "age"]
```

**Object.values(obj)** — возвращает массив значений объекта.
```javascript
Object.values(user); // ["Иван", 25]
```

**Object.entries(obj)** — возвращает массив пар [ключ, значение].
```javascript
Object.entries(user); // [["name", "Иван"], ["age", 25]]
```

**Object.assign(target, ...sources)** — копирует свойства из одного или нескольких объектов в целевой объект.
```javascript
const a = {x: 1};
const b = {y: 2};
Object.assign(a, b); // {x: 1, y: 2}
```

---

## Методы Math

**Math.round(num)** — округляет до ближайшего целого.
```javascript
Math.round(2.6); // 3
```

**Math.floor(num)** — округляет вниз.
```javascript
Math.floor(2.9); // 2
```

**Math.ceil(num)** — округляет вверх.
```javascript
Math.ceil(2.1); // 3
```

**Math.random()** — возвращает случайное число от 0 до 1.
```javascript
Math.random(); // например, 0.345
```

**Math.max(a, b, ...)** — возвращает наибольшее число.
```javascript
Math.max(1, 5, 3); // 5
```

**Math.min(a, b, ...)** — возвращает наименьшее число.
```javascript
Math.min(1, 5, 3); // 1
```

---

## Методы Date

**new Date()** — создаёт объект текущей даты и времени.
```javascript
const now = new Date();
```

**getFullYear()** — возвращает год.
```javascript
now.getFullYear(); // например, 2026
```

**getMonth()** — возвращает месяц (0 — январь, 11 — декабрь).
```javascript
now.getMonth(); // например, 1 (февраль)
```

**getDate()** — возвращает день месяца.
```javascript
now.getDate(); // например, 12
```

**toLocaleDateString()** — возвращает дату в локальном формате.
```javascript
now.toLocaleDateString(); // например, "12.02.2026"
```

---

## Методы JSON

**JSON.stringify(obj)** — преобразует объект в строку JSON.
```javascript
const user = {name: "Иван"};
JSON.stringify(user); // '{"name":"Иван"}'
```

**JSON.parse(str)** — преобразует строку JSON в объект.
```javascript
const str = '{"name":"Иван"}';
JSON.parse(str); // {name: "Иван"}
```

---

## Методы поиска в массиве

**Array.find(fn)** — возвращает первый элемент, подходящий по условию.
```javascript
const arr = [1, 2, 3, 4];
arr.find(x => x > 2); // 3
```

**Array.findIndex(fn)** — возвращает индекс первого подходящего элемента.
```javascript
arr.findIndex(x => x > 2); // 2
```

**Array.indexOf(value)** — возвращает индекс первого вхождения значения.
```javascript
arr.indexOf(2); // 1
```

**Array.lastIndexOf(value)** — возвращает индекс последнего вхождения значения.
```javascript
const arr2 = [1, 2, 3, 2];
arr2.lastIndexOf(2); // 3
```

---

## Методы проверки в массиве

**Array.every(fn)** — возвращает true, если все элементы проходят проверку.
```javascript
[2, 4, 6].every(x => x % 2 === 0); // true
```

**Array.some(fn)** — возвращает true, если хотя бы один элемент проходит проверку.
```javascript
[1, 2, 3].some(x => x > 2); // true