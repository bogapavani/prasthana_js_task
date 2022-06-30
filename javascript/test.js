// length of an array
var a = [1, 2, 3, 4, 5, 6];
console.log(a.length);

// length of an string
var b = "hello";
console.log(b.length);

// remove duplicate element
var array = [1, 2, 3, 2, 1, 4, 5]
let arr = [...new Set(array)];
console.log(arr);

// unic elements
var array = [1, 2, 3, 2, 1, 4, 5];
var unique = array.filter((v, i) => array.indexOf(v) === array.lastIndexOf(v));
console.log(unique);
//map Method
var a = [1, 2, 3]
let chg = a.map(element => {
    console.log(element);
    return element;
});
console.log(chg)

// forEach mthod
var b = [12, 2, 3]
b.forEach(element1 => {
    console.log(element1)
});




// ascending order

const students = [
    { name: "wpaavani" },
    { name: "shravani" },
    { name: "vijay" },
    { name: "anjali" }
];
students.sort((a, b) => {
    if (a.name < b.name) {
        return 1
    } else {
        return -1
    }
})
// console.log(...students);
for (let i = 0; i < students.length; i++) {
    console.log((students[i].name));
}

// descending order
const employe = [
    { name: "Volvo" },
    { name: "Saab" },
    { name: "BMW" }
];


var peoples = employe.reverse
    (function (a, b) {
        return (a.name - b.name)

    });
console.log(peoples);
for (let i = 0; i < peoples.length; i++) {
    console.log(peoples[i].name)
}

// Maximum value in an array
const numbers = [100, 10, 99, 30, 20];

console.log(Math.max(...numbers));

// find an element from an array

var x = [1, 3, 5, 6, 7];
var y = x.includes(6);
console.log(y);

// substring
var item =["Aeroplane"];
// console.log(item.indexOf("plane"))
var str = item.indexOf("plane");
console.log(str);

let text = "Aeroplane";
let position = text.search("plane");
console.log(position);


var student = [{
    "name": "pavani",
    "marks": 500
},
{
    "name": "shravani",
    "marks": 100
},
{
    "name": "swetha",
    "marks": 20
}]
const result1 = student.filter(function (a) {
    return a.marks > 50;

    // console.log(a.name)
    // return a => a.marks;
});
console.log(result1);
for (let i = 0; i < result1.length; i++) {
    console.log(result1[i].name)
}



// new array
var array6 = [1, 2, 8, 5, 6];
var array7 = array6.splice(0, 3, 1);
console.log(array7);
// origial array
console.log(array6);
// some 
const index = [1, 2, 3, 4, 5];
var output = index.some(function (element3) {
    return element3 > 1;
});
console.log(output);

// every
const index1 = [1, 2, 3, 4, 5];
var output1 = index1.every(function (element4) {
    return element4 > 1;
});
console.log(output1);


