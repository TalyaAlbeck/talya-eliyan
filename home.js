



let arrUersname = [];

const form = document.getElementById("myForm");
// form.addEventListener("submit",userid)


function signup() {
    const firstname = document.getElementById("fname").value;
    const lastname = document.getElementById("pass").value;
    const password = document.getElementById("lname").value;
    const user = {
        "firstname": firstname,
        "lastname": lastname,
        "password": password

    }

    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }
    console.log('user: ', user);
    let userArray = JSON.parse(localStorage.getItem("users"));
    userArray.push(user);
    localStorage.setItem("users", JSON.stringify(userArray));
}
let submit = document.getElementById("submit");
submit.addEventListener("click", signup);