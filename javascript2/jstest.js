//maximum number
let arrayE3=[2,5,8,1,0]
console.log(Math.max(...arrayE3))

//swapkey value
let a={a: 5, b: 7}
let b={};
Object.entries(a).forEach(i=>{
    let key=i[0]
    let value=i[1]
    b[value]=key;
})
console.log(b)

//reverse the sentence
let a=(("I love javascript".split(" ")).reverse()).join(" ")
console.log(a)

//closure
function greeting() {
    let message = 'Hello prahasith';
    function sayHi() {
        console.log(message);
    }
    sayHi();
}
greeting();

//callback
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function name() {
    console.log('I am prahasith');
}

greet('prahasith', name);


//promises
//promise all
let promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved After 100 ms");
    }, 100);
  });
  let promise2 = Promise.resolve("First rejected");
  let promise3 = Promise.reject("Second rejected");
  
  let returnPromise = Promise.all([promise1, promise2, promise3]);
  returnPromise.then(e =>{
    console.log(e);
  }).catch(e=>{
    console.log(e)
  });
  
  //promise catch
  let promise = new Promise(function(resolve, reject) {
      reject(new Error('Rejecting a Promise.'));
  });
  
  promise.catch(function(value) {
      console.error(value);
  });
  
  //promise race
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
  
  });
  
  //promise finally
  function checkMail() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject(new Error('Failed to arrive'));
      }
    });
  }
  
  checkMail()
    .then((mail) => {
      console.log(mail);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Experiment completed');
    });

    //nested promise or promise chain
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); 
    return result * 2;
}).then((result) => {
    console.log(result); 
    return result * 3;
}).then((result) => {
    console.log(result); 
    return result * 4;
});