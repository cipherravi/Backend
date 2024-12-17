// function greet() {
//   console.log("Hello World");
// }
// greet();

// function greet(name) {
//   console.log(name);
// greet("Ravi");
// function add(x, y) {
//   add = x + y;
//   console.log(add);
// add(10, 10);
// const greetings = function (name) {
//   console.log(`Hello ${name}`);
// };
// greetings("Ravi");
//Callback
// function showCallFunc(fn) {
//   let value = 10;
//   fn(value);
// const res = function fn(value) {
//   console.log(value);
// showCallFunc(res);
// function square(number, cb) {
//   let a = number;
//   return cb(a);
// function cb(a) {
//   return a * 365;
// let res = square(1.1, cb);
// console.log(res);
//
// method
// let person = {
//   name: "Ravi",
//   wife: "Buchal",
//   duration: "7 Months",
//   intro: () => {
//     return `I am ${person.name} and my wife is ${person.wife} and we are together since ${person.duration}`;
//   },
// console.log(person.intro());
//   intro,
// function intro() {
//   return `I am ${person.name} and my wife is ${person.wife} and we are together since ${person.duration}`;
////  JSON
// let info = {
//   name: "ravi",
//   work: "programmer",
// let infoo = JSON.stringify(info);
// console.log(typeof infoo);
// infoo = JSON.parse(infoo);

//// Time

// let timee = new Date(2023, 6, 19, 17, 15, 54, 0);
// let time = new Date();
// console.log(time.getDate());
// console.log(time.getFullYear());
// console.log(time.getMonth());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());
// console.log(time.getDate());
// console.log(time.getHours() - 12);
// console.log(time);
// console.log(timee);

// console.log(time.toLocaleString());

//// SetInterval && SetTimeout

// setInterval(() => {
//   console.log("first");
// }, 2000);

//

// setTimeout(() => {
//   console.log("second");
// }, 2000);

//

// let timer = setInterval(() => {
//   console.log("third");
// }, 2000);

// setTimeout(() => {
//   clearInterval(timer);
//   console.log("stopped");
// }, 4000);

//

// greet = (name) => {
//   return `hello ${name}`;
// };
// console.log(greet("Ravi"));

// function defaultValue(value = true) {
//   if (value === true) {
//     for (let i = 0; i < 10; i++) {
//       console.log(i);
//     }
//   } else {
//     console.log("Value Erorr");
//     0;
//   }
// }
// defaultValue(false);

//// Destructuring

// let person = {
//   name: "Ravi",
//   work: "programmer",
// };
// let objdes = ({ name: NAME, work } = person);
// console.log(work);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let arrdes = ([a, b, c, d, e, f, g] = arr);
// console.log(arrdes[a]);//
// [a, , c, d, e, f, g] = arr;
// console.log(c);
//
// for (const index in arr) {
//   console.log(`${index} ${arr[index]}`);
// }

//

// function value() {
//   return [1, 2, 3];
// }
// [a, , b] = value();
// console.log(b);

//
// let obj1 = {
//   name: "ball",
//   color: "black",
// };
// function menu({ name: Name, color }) {
//   console.log(Name);
//   console.log(color);
// }
// menu(obj1);

//

// let obj2 = {
//   name1: "ball",
//   color1: "blackkk",
// };
// let obj3 = {
//   name2: "footlball",
//   color2: "pink",
// };
// let obj2copy = { ...obj2, ...obj3 };
// console.log(obj2copy);

//

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = ["a", "b", "c", "d", "e", "f", "g"];
// let new1 = [...arr1, ...arr2];
// console.log(new1);

//// for loops

// let names = {
//   name1: "Ravi",       ** DO NOT work with obj
//   name2: "Buchal",
// };
//

// let names = ["Ravi", "Buchal", "Love"];
// for (const name of names) {
//   console.log(name);
// }

//// ADVANCE Arrays

// ForEach

// let colors = ["red", "yellow", "green", "pink"];
// colors.forEach((color) => {
//   console.log(color);
// });
// console.log("--------------------");
// let color = ["red", "yellow", "green", "pink"];

// const capWords = color.forEach((color, index, arr) => {
//   arr[index] = color[0].toUpperCase() + color.substring(1);
// });
// console.log(color);

//MAP

// let numbers = [2, 4, 6];
// let double = numbers.map((num) => {
//   return num * 2;
// });
// console.log(double);

//

// let peoples = [
//   {
//     name: "Ravi",
//     surName: "Yadav",
//   },

//   {
//     name: "Buchal",
//     surName: "Yadav",
//   },
// ];
// const result = peoples.map((person) => {
//   return [person.name, person.surName];
// });
// console.log(result);

//filter

// const balls = [
//   { name: "casco", MRP: 50 },
//   { name: "belly", MRP: 55 },
//   { name: "daynight", MRP: 60 },
// ];
// const res = balls.filter((ball) => {
//   return ball.MRP > 50;
// });
// console.log(res);

//
// let numbers = [20, 65, 45, 67, 55, 90, 20, 32];

// const res = numbers.filter((number) => {
//   return number > 50;
// });
// console.log(res);

//OR

// function number(number) {
//   return number > 50;
// }
// const res = numbers.filter(number);
// console.log(res);

//find

// let numbers = [20, 65, 45, 67, 55, 90, 20, 32];

// let res = numbers.find((number) => {
//   return number === 20;
// });
// console.log(res);

// every some

// let number1 = [20, 65, 45, 67, 55, 90, 27, 32];
// let res1 = number1.every((number) => {
//   return number > 20;
// });
// console.log(res1);
// let number2 = [20, 65, 45, 67, 55, 90, 27, 32];
// let res2 = number2.some((number) => {
//   return number > 20;
// });
// console.log(res2);

//reduce

// let numbers = [20, 65, 45, 67, 55, 90, 27, 32];
// let res = numbers.reduce((p, c) => {
//   return p + c;
// });
// console.log(res);

//// MAP Data Structure

// const map = new Map();
// const keyone = "color";
// map.set(keyone, "red");
// map.set("fruit", "mango");

// map.delete("fruit");

// console.log(map);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.size);

//// SET
// const myset = new Set();
// myset.add("apple");
// myset.add("banana");
// myset.add(123);
// myset.add(true);

// myset.delete("apple");
// myset.clear();
// myset.

// console.log(myset);
// console.log(myset.has("apple"));

//// Symobl
// const mySymbol = Symbol("Test");
// console.log(mySymbol);
// const symbol1 = Symbol("test");
// const symbol2 = Symbol("test");
// console.log(symbol1 === symbol2);

////DOM ---> NEXT in Practice 2
