function validation() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var emailId = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobile").value;
    var addressName = document.getElementById("address").value;
    var reg = /^[7-9]\d{9}$/;
    if (reg.test(mobileNumber)) {
        console.log("hello");
        document.getElementById("mobiletext1").innerHTML = " "
    } else {
        console.log("2");
        document.getElementById("mobiletext1").innerHTML = "Invalid";
        document.getElementById("mobiletext1").style.visibility = "visible";
    }
}