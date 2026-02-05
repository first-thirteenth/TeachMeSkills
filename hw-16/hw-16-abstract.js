'use strict' //строгий режим. Переключает JavaScript в современный режим.

// let num = 5
// let str = 7

// if(num === 5 && str === 7) {
//     console.log(`Ты принят! ${num}`)
// }else {
//     console.log(`Иди нахуй, тварь!`)
// }


// Задача 2.
// 🎓 Записать в переменную someString результат ввода из prompt, используя оператор нулевого слияния (??).

// Если пользователь закрыл окно prompt, то значение переменной someString должно быть равно "Default string".
// Результат проверить в консоли.

let someString = prompt('Введите текст') ?? 'Default string'
console.log(someString)

