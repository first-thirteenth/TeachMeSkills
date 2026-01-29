// Число
console.log(5)
console.log(3.14)
console.log(Infinity)
console.log(NaN)

// Большое число - BigInt
console.log(314456687697968554797876)
console.log(314456687697968554797876n)

// Строка
console.log('Строка')

// Логическое значение - boolean
console.log(true)
console.log(false)

//Символ
console.log(Symbol('Строка'))

//Пример использования. 
// С помощью Symbol можно создавать уникальные значения
let value1 = Symbol('Строка')
let value2 = Symbol('Строка')

console.log(value1 === value2)

// Значение - undefined
console.log(undefined)

let age
console.log(age)

function getAge(year) {
    return 2026 - year 
}
console.log(getAge(1985))

//Значение - null(ничего)
console.log(null) 

//Объекты
console.log({})
console.log([])
console.log(function(){})

// typeof - позволяет определить тип значения
// Возвращает строку, содержащую тип.


