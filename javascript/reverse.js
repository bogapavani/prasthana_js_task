const reverseString=(str)=>{
const splitletters =str.split("")
const reverseArray=splitletters.reverse();
const reverseString=reverseArray.join("");
return reverseString;
}
console.log(reverseString("i love javascript"));



