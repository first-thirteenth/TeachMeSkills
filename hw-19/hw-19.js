//Tack 1
const user = {
  name: "Andrei",
  age: 41,
};

delete user.name;
delete user.age;

console.log(user);

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
