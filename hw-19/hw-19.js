//Tack 1
const human = {
  name: "Andrei",
  age: 41,
};

delete human.name;
delete human.age;

console.log(human);

//Tack 2
const countryName = {
  country: "Belarus",
  city: "Minsk",
};

if ("city" in countryName) {
  console.log(true);
} else {
  console.log(false);
}

//Tack 3
const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

for (const key in student) {
  console.log(key);
}

for (const key in student) {
  console.log(student[key]);
}

//Tack 4
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

//Tack 5
let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  igor: 664,
  alexandra: 199,
};

let sum = 0;
let count = 0;

for (let key in salaries) {
  sum += salaries[key];
  count++;
}

let averageSalary = sum / count;
console.log(averageSalary);


//Tack 6
let registrationLogin = prompt('Register. Enter your login.');
let registrationPassword = prompt('Register. Enter your password');

let user = {
  login: registrationLogin,
  password: registrationPassword,
}

let loginEntry = prompt('Enter your login');
let passwordEntry = prompt('Enter your password');

if (user.login === loginEntry && user.password === passwordEntry) {
  console.log('Welcome!');
  
}else {
  console.log('No entry allowed!');
}