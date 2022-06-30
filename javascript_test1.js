//q-1
let array=["maruthi","volvo","audi"]
console.log(array.length)

let stringE="prahasith kuncham"
console.log(stringE.length)

//q-2
let array1 = [1,3,5,6,7];
let index = array1.findIndex(checkindex);

function checkindex(i) {
  return i == 6;
}
console.log(index)

//q-3
let string = "aeroplane";
let result = string.indexOf("plane");

console.log(result)

//q-4
let student=
[{"name":"prahasith","marks":80},
{"name":"rohit","marks":90},
{"name":"pavani","marks":40},
];

let passStudents = student.filter(function (a) {
    return a.marks > 50;
});

for (let i = 0; i < passStudents.length; i++) {
    console.log(passStudents[i].name)
}


//q-5
let arrayE2=[1,2,8,5,6]
let resultE2=arrayE2.splice(0,3)
console.log(resultE2)
console.log(arrayE2)

//q-6 map
let numbers = [5, 4, 8, 2];
let newArr = numbers.map(myFunction);

function myFunction(num) {
  return num ** 2;
}

console.log(newArr)

let numbersE = [5, 4, 8, 2];
let newArrE = numbersE.map(myFunction);

function myFunction(num) {
  return num ** 2;
}

console.log(newArrE)

//for each
let numbers1 = ["a","b","c"];
numbers1.forEach(
function myFunction(item) {
    console.log(item)
});

//q-7
let a = [1,2,3,2,1,4,5];
let b=[...new Set(a)]
console.log(b)
let unique = a.filter((v, i) => a.indexOf(v) === a.lastIndexOf(v));
console.log(unique);

//q-8
let arrayE3=[2,5,8,1,0]
let resultE3=myArrayMax(array);
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(result)

//q-9
let students=
[{"name":"prahasith"},
{"name":"rohit"},
{"name":"aarvi"},
];
students.sort((a,b)=>{
    if (a.name>b.name){
        return 1
    }else{
        return -1
    }
});
console.log(...students)