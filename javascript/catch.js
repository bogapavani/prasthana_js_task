let read = false;
let readBook = new Promise(function (resolve, reject) {
setTimeout(function () {
if (read === true) {
resolve("Yes I have read the book");
} else {
reject("I have not read the book");
}
}, 3000);
});

// then
readBook.then((success) => console.log(success));
//catch
readBook.catch((reason) => console.log(reason));
// finally
readBook.finally (console.log("finally!"));
