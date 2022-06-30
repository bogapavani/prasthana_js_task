// printing an array
var array = [1, 2, 3, 4, 5];
console.log(array, array[0], array[3]);
//push method
array.push(7);
console.log(array);
// pop method
array.pop();
console.log(array);
// unshift method
array.unshift(0);
console.log(array);
//shift method
array.shift();
console.log(array);
// tostring
var array1 = array.toString();
console.log(array1);
// join method
var array2 = array.join(" * ");
console.log(array2);
// length
console.log(array.length);
// concat method
var array3 = [6, 7, 8, 9];
var array4 = array.concat(array3);
console.log(array4);
// three arrays combination
var a = array1.concat(array2, array3);
console.log(a);
// splice method
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
months.splice(1, 1);
// first parameter used for position secon is use to how many elements have to delete

console.log(months);

months.splice(4, 1, 'May');

console.log(months);
// slice method
const month = ['dec', 'nov', 'oct', 'sep', 'aug'];
const required = month.slice(1, 4);
const required_month = month.slice(2);
console.log(required);
console.log(required_month);
// trim method
const message = '   Hello world!   ';
console.log(message);
console.log(message.trim());
//includes method
const text = "Hello world, welcome to the universe Hello.";
const result = text.includes("world", 6);
console.log(result);
// indexOf
const index = text.indexOf("Hello");
console.log(index);
// lastIndexOf
const lastIndex = text.lastIndexOf("Hello");
console.log(lastIndex);
//replace method
const replaceText = text.replace("Hello", "hi");
console.log(replaceText);
// search method
const searchMethod = text.search("world");
console.log(searchMethod);
// repeat
// const repeat=(searchMethod.repeat(3));
// console.log(repeat);
// let text1 = "Hello world!";
// let result1= text.repeat(2);
// console.log(result1);
//startwith
const startWith = text.startsWith("Hello");
const start = text.startsWith("welcome")
console.log(startWith);
console.log(start);
//subStr
const substr = text.substring(1, 9);
console.log(substr);
// valueOf
const valueOf = text.valueOf();
console.log(valueOf);