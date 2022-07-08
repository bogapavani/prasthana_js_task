let fname=document.getElementById('fname');
let lname=document.getElementById('lname');
let email=document.getElementById('email');
let number=document.getElementById('number');
let span=document.getElementsByTagName('span');
let spane=document.getElementById('spane');
let spannb=document.getElementById('spannb');


fname.onkeydown=function(){
    const reg=/^[a-zA-Z]{2,30}$/
    if(reg.test(fname.value)){
        span[0].innerText="Your Name is validate";
        span[0].style.color="green";

    }
    else{
        span[0].innerText="Not  validate";
        span[0].style.color="red";
    }
    
}
email.onkeydown=function(){
    const regx=/^([\.\_a-zA-Z0-9]+)@([a-zA]+)\.([a-zA-Z]){2,8}$/
    const rege=/^([\.\_a-zA-Z0-9]+)@([a-zA]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/
    if(regx.test(email.value) || rege.test(email.value)){
        spane.innerText="Your email is validate";
        spane.style.color="green";

    }
    else{
        spane.innerText="Not  validate";
        spane.style.color="red";
    }

}
number.onkeydown=function(){
    const regm=/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/
    if(regm.test(number.value)){
        spannb.innerText="Your number is validate";
        spannb.style.color="green";

    }
    else{
        spannb.innerText="Not  validate";
        spannb.style.color="red";
    }
}

// max array
let arr=[2,3,7,8,14,9,19,18,27,6];
let max=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
       max=arr[i];
    }
}
console.log(max);
 // closures example
 // with three nested function
 function func1(a){
    let b=10;
    function func2(c){
        
        function func3(){
            console.log(b,a,c);

        }
        return func3;
    }
    return func2;
 }
 let fun=func1(11)(12);
 fun();
    

 // call back function
 function greet(car, callback) {
    console.log('your'+ "  " + car + "    "+ " is "+"started");
    callback();
}

// callback function
function callMe() {
    console.log('Now you can go on ride');
}

// passing function as an argument
greet('Creata', callMe); 


//debounce
const debounce =(fn , delay)=>{
    let timeoutId;
     return function(...args){
         if( timeoutId){
             clearTimeout(timeoutId);
         }
     timeoutId=    setTimeout(() => {
             fn(...args)
            
         }, delay)
     }
 }
document.getElementById('myid').addEventListener("click", debounce(e=>{
console.log("clicked");
},2000))

// promises 
function buy(){
    return new Promise(function(resolve,reject){
        let a="lenovo";
        if(a="lenovo"){
            console.log('your perfect bought laptop');
            resolve()
        }
        else{
            console.log('Your not bought')
            reject()

        }
    })
}
buy().then(function(){
    console.log('Fullfilled your goal');
}).catch(function(){
    console.log('your Not buyed laptop');
})

// object key and values changing
let obj={
    a:100,
    b:15
}
let swap={

}
Object.entries(obj).forEach(n=>{
    let key=n[0]
    let value=n[1]
    swap[value]=key;

})
console.log(swap);


//string reverse in single line
let str=(("I love javascript".split("")).reverse()).join("");
console.log(str);
