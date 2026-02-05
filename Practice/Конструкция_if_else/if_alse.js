//1
let age = 41
if (age >= 18) {
    console.log('Взрослый')
}else {
    console.log('Ребёнок')
}

//2
for (let num = 1; num <= 5; num++) {
    console.log(num)
}

//3
let n = 0
while (n <= 5) {
    console.log(n)
    n++
}


//1
let number = 41
if (number % 3 === 0) {
    console.log(`${number} - кратно 3!`)
}else {
    console.log(`${number} - не кратно 3!`)
}

//2
for (let num = 1; num <= 5; num++) {
    console.log(num * num)
}

//3
let nu = 10
while (nu <= 15) {
    console.log(nu)
    nu++
}

//1
let arr = [2, 7, 10, 15, 22];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

//2
let sum = 0;
let num;
while (true) {
  num = Number(prompt("Введите число (0 — закончить):"))
  if (num === 0) break
  sum += num
}
console.log("Сумма всех введённых чисел:", sum)

//3
for (let n = 1 ; n <=20; n++) {
    if (n % 4 === 0) {
    console.log(n)
    }
}









