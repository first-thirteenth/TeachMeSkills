# Шпаргалка: Методы массивов в JavaScript

## 📋 Методы для изменения массива

### `push()` - добавить элемент в конец
```javascript
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```

### `pop()` - удалить последний элемент
```javascript
const arr = [1, 2, 3];
arr.pop(); // [1, 2]
```

### `shift()` - удалить первый элемент
```javascript
const arr = [1, 2, 3];
arr.shift(); // [2, 3]
```

### `unshift()` - добавить элемент в начало
```javascript
const arr = [1, 2, 3];
arr.unshift(0); // [0, 1, 2, 3]
```

### `splice()` - добавить/удалить элементы
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // удалить 1 элемент с индекса 2 → [1, 2, 4, 5]
arr.splice(1, 0, 'a', 'b'); // вставить с индекса 1 → [1, 'a', 'b', 2, 4, 5]
```

### `reverse()` - перевернуть массив
```javascript
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

### `sort()` - сортировать массив
```javascript
const arr = [3, 1, 2];
arr.sort(); // [1, 2, 3]

const nums = [10, 5, 40];
nums.sort((a, b) => a - b); // [5, 10, 40]
```

---

## 🔍 Методы для поиска

### `indexOf()` - найти индекс элемента
```javascript
const arr = [1, 2, 3, 2];
arr.indexOf(2); // 1
arr.indexOf(5); // -1 (не найден)
```

### `lastIndexOf()` - найти последний индекс
```javascript
const arr = [1, 2, 3, 2];
arr.lastIndexOf(2); // 3
```

### `includes()` - проверить наличие элемента
```javascript
const arr = [1, 2, 3];
arr.includes(2); // true
arr.includes(5); // false
```

### `find()` - найти первый элемент по условию
```javascript
const arr = [1, 2, 3, 4, 5];
arr.find(x => x > 3); // 4
```

### `findIndex()` - найти индекс по условию
```javascript
const arr = [1, 2, 3, 4, 5];
arr.findIndex(x => x > 3); // 3
```

---

## 🎯 Методы для перебора

### `forEach()` - выполнить функцию для каждого элемента
```javascript
const arr = [1, 2, 3];
arr.forEach(x => console.log(x)); // 1, 2, 3
```

### `map()` - создать новый массив с преобразованиями
```javascript
const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2); // [2, 4, 6]
```

### `filter()` - создать новый массив с отфильтрованными элементами
```javascript
const arr = [1, 2, 3, 4, 5];
const even = arr.filter(x => x % 2 === 0); // [2, 4]
```

### `reduce()` - свернуть массив в одно значение
```javascript
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, x) => acc + x, 0); // 10
```

### `every()` - проверить, все ли элементы соответствуют условию
```javascript
const arr = [2, 4, 6];
arr.every(x => x % 2 === 0); // true
```

### `some()` - проверить, есть ли хотя бы один элемент по условию
```javascript
const arr = [1, 2, 3, 4];
arr.some(x => x > 3); // true
```

---

## 📦 Методы для создания нового массива

### `concat()` - объединить массивы
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2); // [1, 2, 3, 4]
```

### `slice()` - получить часть массива
```javascript
const arr = [1, 2, 3, 4, 5];
arr.slice(1, 4); // [2, 3, 4]
```

### `join()` - объединить элементы в строку
```javascript
const arr = [1, 2, 3];
arr.join('-'); // "1-2-3"
```

### `split()` - разбить строку на массив (метод String)
```javascript
const str = "a,b,c";
str.split(','); // ['a', 'b', 'c']
```

---

## 📊 Информационные методы

### `length` - получить количество элементов
```javascript
const arr = [1, 2, 3];
arr.length; // 3
```

### `at()` - получить элемент по индексу (включая отрицательные)
```javascript
const arr = [1, 2, 3];
arr.at(0); // 1
arr.at(-1); // 3 (последний элемент)
```

### `flat()` - развернуть вложенный массив
```javascript
const arr = [1, [2, 3], [4, [5]]];
arr.flat(); // [1, 2, 3, 4, [5]]
arr.flat(2); // [1, 2, 3, 4, 5]
```

### `flatMap()` - map + flat
```javascript
const arr = [1, 2, 3];
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

---

## 📌 Быстрая справка

| Метод | Изменяет массив | Возвращает |
|-------|-----------------|-----------|
| push() | ✅ | число (новая длина) |
| pop() | ✅ | удалённый элемент |
| shift() | ✅ | удалённый элемент |
| unshift() | ✅ | число (новая длина) |
| splice() | ✅ | удалённые элементы |
| slice() | ❌ | новый массив |
| map() | ❌ | новый массив |
| filter() | ❌ | новый массив |
| concat() | ❌ | новый массив |
| sort() | ✅ | сортированный массив |
| reverse() | ✅ | развёрнутый массив |
