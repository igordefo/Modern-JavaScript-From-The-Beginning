// var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// var name: letters, numbers, _, $.
// Can't start with number

// let
let name1 = 'John Doe';
console.log(name1);
name1 = 'Steve Smith';
console.log(name1);

// const

const name2 = 'John Doe';
console.log(name2);
// const greeting; Error - missing assign
// name2 = 'Steve Smith'; Can't reassign  

const person = {
  name3: 'Sarah',
  age: 30
}

person.name3 = 'Derek'; // Reassign const property
person.age = 43;

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

let firstVariable = "Hello World"; // Моя первая переменная
let string = "String data type";
console.log(typeof string);
let number = 101;
console.log(typeof number);
let boolean = true;
console.log(typeof boolean);
let x // Переменная без значения даст undefined
console.log(typeof x);
let empty = null; // Null - это намеренное отсутствие значения объекта.
console.log(typeof null);
/*Все вышеуказанные типы данных являються примитивами*/
let myObject = {}; // Пустой объект
console.log(typeof myObject);
let myArray = [1,2,3];
console.log(typeof myArray);
let today = new Date();
console.log(today);
console.log(typeof today);

// Type conversion
let val;
// Number to string;
val = String(5);
// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4,5]);

//method toString()
val = (5).toString();
val = (true).toString();  

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null); // Not a number
val = Number('Hello') // Not a number

val = parseInt('100.30'); // Преобразует строку в число
val = parseFloat(100.30); // Преобразует строку в число с остатком 
// Output
console.log(val);
console.log(typeof val);
//console.log(val.length); // Only string method
console.log(val.toFixed(2)); // Округляет число и преобразует в строку

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum); // '5' + 6 = 56 (Type coercion/Concatenation)

// Simple math with numbers

const num1 = 100;
const num2 = 50;
let num;

num = num1 + num2;
num = num1 - num2;
num = num1 * num2;
num = num1 / num2;
num = num1 % num2;

// Math Object
num = Math.PI;
num = Math.E;
num = Math.pow(2, 5); // Возведение в степень
num = Math.sqrt(400); // Извлечение корня
num = Math.abs(-100); // Получение абсолютной величины
num = Math.round(9.6); // Округляет в большую
num = Math.round(9.4); // либо в меньшую сторону
num = Math.floor(9.4); // Всегда округляет в меньшую сторону
num = Math.ceil(9.4); // Всегда округляет в большую сторону
num = Math.min(1,2,3,4,5); // Извлекает наименьшее число
num = Math.max(1,2,3,4,5); // Извлекает наибольшее число
num = Math.random(); // Возвращает случайное число от 0 до 1 (не влключая 1)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} // Возвращает целое случайное число в допустимом пределе
console.log(getRandomInt(10, 20));

console.log(num);

// Concatenation
const firstName = 'William';
const lastName = 'Johnson';
const age = 28;
const str = 'Hello, there my name is Igor';
const tags = 'web development, web design, programming'

let concat;
concat = firstName + ' ' + lastName;

// Append
concat = 'Igor ';
concat += 'Posunko';

concat = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Concat method
concat = firstName.concat(' ', lastName);

// Changing case
concat = firstName.toUpperCase();
concat = firstName.toLowerCase();

// Escaping
let ecp = 'That\'s awesome, I can\'t wait'; //Экранирование символов

// Length

let len = firstName.length; // Длина строки

// indexOf()
concat = firstName.indexOf('l'); // Определенние позиции буквы в слове
concat = firstName.lastIndexOf('l'); // Определенние позиции буквы в слове с конца

concat = firstName.charAt('2');
concat = firstName.charAt(firstName.length - 1); // Получить последний символ строки
concat = firstName.substring(0, 4); // Возвращает подстроку строки между двумя индексами

// Slice
concat = firstName.slice(0, 5); // Извлекает часть строки и возвращает новую строку.

// Split
concat = str.split(' ');
concat = tags.split(',');

// Replace
concat = str.replace('Igor', 'Jack');

// Includes
concat = str.includes('Hello'); // Определяет, содержит ли строка определённый элемент

console.log(len);
console.log(ecp);
console.log(concat);

//Template literals;

const userName = 'Igor';
const userAge = '31';
const userJob = 'Trainee';
const userCity = 'Melitopol';
let html;
function hello() {
  return 'Hello';
}


// Without template strings (es5)
html = '<ul>' +
       '<li>Name: ' + userName + '</li>' +
       '<li>Age: ' + userAge + '</li>' +
       '<li>Job: ' + userJob + '</li>' +
       '<li>City: ' + userCity + '</li>';

// With template strings (es6)       
html = `
      <ul>
        <li>Name: ${userName}</li>
        <li>Age: ${userAge}</li>
        <li>Job: ${userJob}</li>
        <li>City: ${userCity}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${userAge > 30 ? 'Over 30' : 'Under 30'}</li>
      </ul>
`;
     
document.body.innerHTML = html;

// Create some arrays
const numbers1 = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let arr;

//Get array length
arr = numbers1.length;
// Check if is array
arr = Array.isArray(numbers1);
// Get single value
arr = numbers1[3];
// Insert into array
numbers1[2] = 100;
// Find index of value
arr = numbers1.indexOf(100);
// Mutating arrays
// Add on to end
numbers1.push(250);
// Add in to front 
numbers1.unshift(120);
// Take off from end
numbers1.pop(); // Удаляет последний элемент из массива и возвращает его.
// Take off from front
numbers1.shift(); // Удаляет первый элемент из массива
// Splice values
numbers1.splice(1,3); // Удаляет выбранные элементы из массива
// Reverse array
numbers1.reverse(); // Изменяет порядок элементов в Array на обратный.
// Concatenate array
arrconcat = numbers1.concat(numbers2);

// Sorting arrays
arr = fruit.sort();
arr = numbers1.sort();

// Use the 'compare function'
arr = arrconcat.sort(function(x,y){
  return x - y;
});

// Reverse sort
arr = arrconcat.sort(function(x,y){
  return y - x;
});

// Find
function under50(numb){
  return numb < 50;
}
arr = numbers1.find(under50); // Возвращает наименьшее число меньше 50

console.log(numbers1);
console.log(arr);

// Object literals
const personObj = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  adress: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
} 
let obj;
obj = personObj;

// Get specific value
obj = personObj.firstName;
obj = personObj['lastName'];
obj = personObj.age;
obj = personObj.hobbies[1];
obj = personObj.adress.state;
obj = personObj.getBirthYear();

console.log(obj);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 20},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// Date and time
let time;

const dateToday = new Date();
const birthday = new Date('9/10/1981');

time = dateToday.getMonth();
time = dateToday.getDate();
time = dateToday.getDay();
time = dateToday.getFullYear();
time = dateToday.getHours();
time = dateToday.getMinutes();
time = dateToday.getSeconds();
time = dateToday.getMilliseconds();
time = dateToday.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(03);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

// If statements and comparison operator

/*if (something true) {
  do something
} else {
  do something else
}*/
const id = 100;
// Equal to
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT')
}
// Not equal to
if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT')
}
// Equal to value & type
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT')
}

if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT')
}
// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log(`NO ID`);
}
// Greater or less than
if (id > 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT')
}
// If else 
const color = 'yellow';

if (color === 'red') {
  console.log('Color is red')
} else if (color === 'blue') {
  console.log('Color is blue')
} else {
  console.log('Color is not red or blue');
}
// Logical operators
const logName = 'Steve';
const logAge = 4;
// AND &&
if (logAge > 0 && logAge < 12) {
  console.log(`${logName} is a child`);
} else if (logAge >= 13 && logAge <= 19){
  console.log(`${logName} is a teenager`)
} else {
  console.log(`${logName} is an adult`);
}
// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`)
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Switches
switch(color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let nDay;
switch(new Date().getDay()) {
  case 0:
    nDay = 'Sunday';
    break;
  case 1:
    nDay = 'Monday';
    break;
  case 2:
    nDay = 'Tuesday';
    break;
  case 3:
    nDay = 'Wednesday';
    break;
  case 4:
    nDay = 'Thursday';
    break;
  case 5:
    nDay = 'Friday';
    break;
  case 6:
    nDay = 'Saturday';
    break;
}

console.log(`Today is ${nDay}`);