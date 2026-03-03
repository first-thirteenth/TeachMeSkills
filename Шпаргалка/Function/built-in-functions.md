# Шпаргалка по встроенным функциям JavaScript

## Проверка значений

### isNaN()
Проверяет, является ли значение **не числом** (`NaN`).
```javascript
isNaN(5)          // false
isNaN('hello')    // true
isNaN(undefined)  // true
```

### isFinite()
Проверяет, является ли число конечным (не Infinity и не NaN).
```javascript
isFinite(5)       // true
isFinite(Infinity) // false
isFinite(NaN)     // false
```

---

## Преобразование значений

### parseInt()
Преобразует строку в целое число.
```javascript
parseInt('42')      // 42
parseInt('42.99')   // 42
parseInt('0xFF')    // 255 (шестнадцатеричная)
parseInt('hello')   // NaN
```

### parseFloat()
Преобразует строку в число с плавающей точкой.
```javascript
parseFloat('3.14')    // 3.14
parseFloat('3.14abc') // 3.14
parseFloat('hello')   // NaN
```

### String()
Преобразует значение в строку.
```javascript
String(123)     // '123'
String(true)    // 'true'
String(null)    // 'null'
```

### Number()
Преобразует значение в число.
```javascript
Number('42')    // 42
Number('3.14')  // 3.14
Number('hello') // NaN
Number(true)    // 1
```

### Boolean()
Преобразует значение в булево значение.
```javascript
Boolean(1)      // true
Boolean(0)      // false
Boolean('')     // false
Boolean('hello') // true
```

---

## Math объект

### Math.abs()
Возвращает абсолютное значение (модуль числа).
```javascript
Math.abs(-5)    // 5
Math.abs(5)     // 5
Math.abs(-3.14) // 3.14
```

### Math.max() и Math.min()
Возвращают максимальное и минимальное значение.
```javascript
Math.max(5, 2, 9, 1)   // 9
Math.min(5, 2, 9, 1)   // 1
Math.max(...[3, 7, 2]) // 7 (с оператором spread)
```

### Math.pow()
Возвращает число в степени.
```javascript
Math.pow(2, 3)   // 8
Math.pow(5, 2)   // 25
Math.pow(2, -1)  // 0.5
```

### Math.sqrt()
Возвращает квадратный корень.
```javascript
Math.sqrt(16)   // 4
Math.sqrt(2)    // 1.414...
Math.sqrt(-1)   // NaN
```

### Math.round(), Math.floor(), Math.ceil()
Округление чисел.
```javascript
Math.round(3.4)   // 3
Math.round(3.7)   // 4

Math.floor(3.9)   // 3 (вниз)
Math.ceil(3.1)    // 4 (вверх)
```

### Math.random()
Возвращает случайное число от 0 (включая) до 1 (не включая).
```javascript
Math.random()           // 0.123456...
Math.random() * 10      // случайное число от 0 до 10
Math.floor(Math.random() * 6) + 1  // случайное число от 1 до 6
```

---

## Методы строк

### split()
Разбивает строку на массив по разделителю.
```javascript
'hello world'.split(' ')   // ['hello', 'world']
'a,b,c'.split(',')         // ['a', 'b', 'c']
'abc'.split('')            // ['a', 'b', 'c']
```

### slice()
Возвращает часть строки (не изменяет оригинал).
```javascript
'hello'.slice(0, 3)  // 'hel'
'hello'.slice(2)     // 'llo'
'hello'.slice(-2)    // 'lo'
```

### substring()
Похож на slice, но не поддерживает отрицательные индексы.
```javascript
'hello'.substring(0, 3)  // 'hel'
'hello'.substring(2)     // 'llo'
```

### indexOf() и lastIndexOf()
Находит позицию подстроки.
```javascript
'hello'.indexOf('l')     // 2
'hello'.indexOf('x')     // -1 (не найдено)
'hello'.lastIndexOf('l') // 3
```

### includes()
Проверяет, содержит ли строка подстроку.
```javascript
'hello'.includes('ell')  // true
'hello'.includes('xyz')  // false
```

### startsWith() и endsWith()
Проверяет начало и конец строки.
```javascript
'hello'.startsWith('hel')   // true
'hello'.endsWith('lo')      // true
```

### toUpperCase() и toLowerCase()
Преобразует регистр.
```javascript
'hello'.toUpperCase()   // 'HELLO'
'HELLO'.toLowerCase()   // 'hello'
```

### trim()
Удаляет пробелы в начале и конце.
```javascript
'  hello  '.trim()   // 'hello'
```

### replace()
Заменяет первое вхождение подстроки.
```javascript
'hello world'.replace('world', 'JS')    // 'hello JS'
'aaa'.replace('a', 'b')                 // 'baa'
```

### repeat()
Повторяет строку.
```javascript
'ab'.repeat(3)   // 'ababab'
```

---

## Методы массивов

### push() и pop()
Добавляет и удаляет элемент с конца.
```javascript
let arr = [1, 2];
arr.push(3);  // arr = [1, 2, 3]
arr.pop();    // 3, arr = [1, 2]
```

### shift() и unshift()
Удаляет и добавляет элемент в начало.
```javascript
let arr = [1, 2, 3];
arr.shift();      // 1, arr = [2, 3]
arr.unshift(0);   // arr = [0, 2, 3]
```

### slice()
Возвращает копию части массива (не изменяет оригинал).
```javascript
[1, 2, 3, 4].slice(1, 3)  // [2, 3]
[1, 2, 3, 4].slice(-2)    // [3, 4]
```

### splice()
Удаляет/добавляет элементы и изменяет массив.
```javascript
let arr = [1, 2, 3, 4];
arr.splice(1, 2);        // [1, 4] (удалил 2 элемента с позиции 1)
arr.splice(1, 0, 'a');   // [1, 'a', 4] (добавил 'a' на позицию 1)
```

### map()
Преобразует каждый элемент массива.
```javascript
[1, 2, 3].map(n => n * 2)        // [2, 4, 6]
[1, 2, 3].map(String)            // ['1', '2', '3']
```

### filter()
Отфильтровывает элементы по условию.
```javascript
[1, 2, 3, 4].filter(n => n > 2)  // [3, 4]
```

### reduce()
Сворачивает массив в одно значение.
```javascript
[1, 2, 3, 4].reduce((sum, n) => sum + n, 0)  // 10
```

### forEach()
Выполняет функцию для каждого элемента.
```javascript
[1, 2, 3].forEach(n => console.log(n))  // выведет: 1, 2, 3
```

### find()
Находит первый элемент, соответствующий условию.
```javascript
[1, 2, 3, 4].find(n => n > 2)  // 3
```

### findIndex()
Находит индекс первого элемента, соответствующего условию.
```javascript
[1, 2, 3, 4].findIndex(n => n > 2)  // 2
```

### includes()
Проверяет, содержит ли массив элемент.
```javascript
[1, 2, 3].includes(2)  // true
[1, 2, 3].includes(5)  // false
```

### indexOf()
Находит индекс элемента.
```javascript
[1, 2, 3, 2].indexOf(2)  // 1
[1, 2, 3].indexOf(5)     // -1 (не найдено)
```

### join()
Объединяет элементы в строку.
```javascript
[1, 2, 3].join('-')  // '1-2-3'
['a', 'b'].join(', ') // 'a, b'
```

### reverse()
Переворачивает массив (изменяет оригинал).
```javascript
[1, 2, 3].reverse()  // [3, 2, 1]
```

### sort()
Сортирует массив (изменяет оригинал).
```javascript
[3, 1, 2].sort()  // [1, 2, 3]
[1, 2, 3].sort((a, b) => b - a)  // [3, 2, 1] (по убыванию)
```

---

## JSON методы

### JSON.stringify()
Преобразует объект в JSON-строку.
```javascript
JSON.stringify({name: 'John', age: 30})  
// '{"name":"John","age":30}'

JSON.stringify([1, 2, 3])  
// '[1,2,3]'
```

### JSON.parse()
Преобразует JSON-строку в объект.
```javascript
JSON.parse('{"name":"John","age":30}')  
// {name: 'John', age: 30}

JSON.parse('[1,2,3]')  
// [1, 2, 3]
```

---

## Object методы

### Object.keys()
Возвращает массив ключей объекта.
```javascript
Object.keys({a: 1, b: 2})  // ['a', 'b']
```

### Object.values()
Возвращает массив значений объекта.
```javascript
Object.values({a: 1, b: 2})  // [1, 2]
```

### Object.entries()
Возвращает массив пар [ключ, значение].
```javascript
Object.entries({a: 1, b: 2})  // [['a', 1], ['b', 2]]
```

---

## Console методы

### console.log()
Выводит значение в консоль.
```javascript
console.log('Hello')
console.log(123, true, {name: 'John'})
```

### console.error()
Выводит ошибку (красный цвет в консоли).
```javascript
console.error('Something went wrong!')
```

### console.warn()
Выводит предупреждение (жёлтый цвет в консоли).
```javascript
console.warn('Be careful!')
```

### console.table()
Выводит массив или объект в виде таблицы.
```javascript
console.table([{name: 'John', age: 30}, {name: 'Jane', age: 25}])
```
