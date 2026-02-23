// //1
// /*Превратить строку "эЙ, кАК деЛа?" в "Эй, как дела?".*/
// Как я решил.
// let bedString = 'эЙ, кАК деЛа?'
// let lowercase = bedString.toLowerCase()
// let bigLetter = lowercase.slice(0, 1).toUpperCase()
// let newString = bigLetter + lowercase.slice(1)
// console.log(newString)
// //Так решил бы профи.
// let bedString = 'эЙ, кАК деЛа?'
// let newString = bedString.charAt(0).toUpperCase() + bedString.slice(1).toLowerCase()
// console.log(newString)

//2
let accompanied = false
function automaticCinema(age) {
    if (age >= 12 || (age < 12 && accompanied)) {
        return 'Проходите!'
    }
    return 'Прохода НЕТ!'
}

console.log(automaticCinema(13))







