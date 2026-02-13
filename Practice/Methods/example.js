//1
let a = Number(prompt('Введите первое число.'))
let b = Number(prompt('Введите второе число.'))
function comparisonOfNumbers (a, b) {
    if (a > b) {
    console.log(`Число ${a} больше чем число ${b}`)
    }else if (a < b) {
    console.log(`Число ${b} больше чем число ${a}`) 
    }else {
        console.log('Эти числа равны.')
    }
    return
}


//2
let c = Number(prompt('Enter number'))
function numberСheck (c) {
    if (c % 2 === 0) {
        return(`Number: ${c} - even`)
    }else {
        return(`Number: ${c} - odd`)
    }
}

console.log(numberСheck(c));


//3
/*Сумма двух чисел
Напиши функцию, которая принимает два числа и возвращает их сумму.*/
function sumNumber (numberOne,  numberTwo) {
   return numberOne + numberTwo
}

console.log(sumNumber(5, 5));


//4
/*Удвоение числа
Создай функцию, которая принимает число и возвращает его удвоенное значение.*/
function doublingTheNumber (x) {
    return x * 2
}

console.log(doublingTheNumber(10));


//5
/*Обрезка строки с начала
Функция принимает строку и число N, возвращает первые N символов строки.*/
function lineTrimming (thisString, numberN) {
    let result = thisString.slice(0, numberN)
    return result
}

console.log(lineTrimming('привет', 6));


//6
/*Сумма двух цифр
Функция принимает двухзначное число и возвращает сумму его цифр.*/
function sumOfTwoDigits (sumNum) {
    let digits = sumNum.toString().split('').map(Number);
    return digits[0] + digits[1];
}

console.log(sumOfTwoDigits(55));

//7
/*Произведение чисел от 1 до N
Напиши функцию, которая принимает число N 
и возвращает произведение всех чисел от 1 до N (факториал).*/
                        





//8
/*Определение чётности числа
Создай функцию, которая принимает число и возвращает строку 
"Чётное", если число чётное, и "Нечётное", если нечётное.*/


//9
/*Минимальное из двух чисел
Функция принимает два числа и возвращает наименьшее из них.*/


//10
/*Проверка, входит ли число в диапазон
Функция принимает три параметра: число, начало диапазона и конец диапазона. 
Возвращает true, если число входит в диапазон (включительно), иначе false.*/


//11
/*Первая и последняя буква строки
Функция принимает строку и возвращает новую строку, 
состоящую из первой и последней буквы исходной строки.*/