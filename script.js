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