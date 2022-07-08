// Maximum value in an array
const numbers = [100, 10, 99, 30, 20];

console.log(Math.max(...numbers));


var str = 'I love javascript';
var string = str.split(" ");
var ReverseStr = string.reverse();
console.log(string.join(" "));

// const f = obj => Object.fromEntries(Object.entries(obj).map(a => a.reverse()))
// var obj = {
//     a: 5, b: 7
// }
// console.log(f(obj))
//
let myObject = {
    a: 5, b: 7
};

let newObject = {};

Object.entries(myObject).forEach(entry =>{
    let key = entry[0];
    let value = entry[1];
    newObject[value] = key;
});

console.log(newObject);
//Closure

function outer() {
    let a = 10, b = 20;
    function inner() {
        console.log(a);
        console.log(b)
    } inner();
    console.log(a);
    console.log(b)
} outer();

//Callback

function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    var name = ('Please enter your name.');
    callback(name);
}

processUserInput(greeting);

// promise race
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});


Promise.race([p1, p2])
    .then(value => console.log(value))
    .catch(reason => console.log(reason));

// promise all
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise');
        resolve(10);
    }, 1 * 1000);

});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise');
        resolve(20);
    }, 2 * 1000);
});


Promise.all([promise1, promise2])
    .then(value1 => console.log(value1))
    .catch(reason1 => console.log(reason1));

// finally
let array1 = new Promise((resolve, reject) => {
    let age = 18;
    if (age <= 18) {
        resolve("child")
    }
    else {
        reject("young")
    }

})
array1.then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
    .finally(() => {
        console.log("It will be the age of person")
    })

// catch 
const prom = new Promise((resolve, reject) => {

    var num = 10;
    if (num > 10) {
        resolve("success");
    } else {
        reject("failure")
    }
});

prom.catch((error) => {
    console.error(error);
});

// nested promise

function res() {
    return new Promise((resolve) => {
        resolve(5)
    })
} function squareNumber(numb) {
    return new Promise((resolve, reject) => {
        if (numb < 5) {
            resolve(numb * numb)
        } else {
            reject('number is not less than five')
        }
    })
}

res().then((numb) => {
    squareNumber(numb).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
}).catch((err) => {
    console.log(err)
})

