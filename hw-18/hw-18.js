//Базовый уровень
//Задача 1
function getSum (n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return(sum)
}

console.log(getSum(13))


//Задача 2
let interestRate = 17
let numberOfYears = 5

function overpayment (creditAmount, interestRate, numberOfYears) {
    return creditAmount * interestRate * numberOfYears / 100
}

console.log(overpayment(50000, interestRate, numberOfYears));


//Задача 3
function trimString(str, valueFrom, valueBy) {
    return str.slice(valueFrom, valueBy)
}

console.log(trimString('Andrew', 0, 3));


//Задача 4
function getSumNumbers(anyNumber) {
    const numbers = String(Math.abs(anyNumber)).split('').map(Number)
    let SumNumbers = 0
    for (const num of numbers) {
        SumNumbers += num
    }
    return SumNumbers
}

console.log(getSumNumbers(13));


//Задача 5
function getSum(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (roundedA === roundedB) return roundedA;

  let start = Math.min(roundedA, roundedB);
  let end = Math.max(roundedA, roundedB);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(5, 5));


//Задача 6
function fooBoo(boolean, foo, boo) {
   if(boolean) {
    foo()
   }else {
    boo()
   }
}

