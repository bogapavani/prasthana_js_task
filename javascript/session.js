var person = {
    "name": "pavani",
    "age": 24
}
localStorage.setItem("object", JSON.stringify(person));
a = JSON.parse(localStorage.getItem("object"));
localStorage.clear(person);
console.log(a.name);

var person = {
    "name": "pavani",
    "age": 24
}
sessionStorage.setItem("object", JSON.stringify(person));
a = JSON.parse(sessionStorage.getItem("object"));
console.log(a.name);
sessionStorage.clear(person)