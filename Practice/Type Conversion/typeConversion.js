// К числу
console.log(Number('75'))               // 75
console.log(Number('15.17'))            // 15.17
console.log(Number('-15.17'))           // -15.17
console.log(Number('1,35'))             // NaN
console.log(Number(''))                 // 0
console.log(Number('true'))             // 1
console.log(Number('false'))            // 0
console.log(Number('undefined'))        // NaN
console.log(Number('null'))             // 0
console.log(Number({}))                 // NaN
console.log(Number({age: 17}))          // NaN
console.log(Number([]))                 // 0
console.log(Number([1]))                // 1
console.log(Number([1, 2]))             // NaN
console.log(Number(function() {}))      // NaN

// К строке
console.log(String(75))                 // '75'
console.log(String(15.17))              // '15.17'
console.log(String(-15.17))             // '-15.17'
console.log(String(NaN))                // 'Nan'
console.log(String(true))               // 'true'
console.log(String(false))              // 'false'
console.log(String(undefined))          // 'undefined'
console.log(String(null))               // 'null'
console.log(String({}))                 // '[object Object]'
console.log(String({age: 17}))          // '[object Object]'
console.log(String([]))                 // ''
console.log(String([1]))                // '1'
console.log(String([1, 2]))             // '1, 2'
console.log(String(function() {}))      // 'function() {}'

// К логическому типу
console.log(0)                          // false
console.log(Boolean(75))                // true
console.log(Boolean(-15.17))            // true
console.log(Boolean(NaN))               // false
console.log(Boolean(''))                // false
console.log(Boolean('Строка'))          // true
console.log(Boolean('false'))           // true
console.log(Boolean(undefined))         // false
console.log(Boolean(null))              // false
console.log(Boolean({}))                // true
console.log(Boolean({age: 17}))         // true
console.log(Boolean([]))                // true
console.log(Boolean([1]))               // true
console.log(Boolean([1, 2]))            // true
console.log(Boolean(function() {}))     // true

// 1) если используется сравнение: <, <=, >, >=; оба значения будут преобразованы к числу.
// 2) если используется арифметическая операция: -, + (за исключением случаев, если одно значение строка), / или *; оба значение будут преобразованы к строке.
// 3) если используется плюс перед значением: +'2'; значение будет преобразовано к числу.
// 4) если используется двойное равенство ==. тоже к числу.

// 1)Строковое: значения в строку ---> String(value), '' + value, `${value}`, value.toString( );
// 2)Численное: значения в число ---> +value, Number(value), parseInt(value);
// 3)Логическое: значение в false/true ---> Boolean(value), !!value.

if({} + 7 > ([] + +'1') && 'false') {
    console.log('Условие выполняется!')
} else {
    console.log('Условие НЕ выполняется!')
}
//Условие выполняется!