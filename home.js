let arrUersname = [];

const form = document.getElementById("myForm");
// form.addEventListener("submit",userid)


function signup() {
    const firstname = document.getElementById("fname").value;
    const password = document.getElementById("pass").value;
    const user = {
        "firstname": firstname,
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
let logIn = document.getElementById("submit");
logIn.addEventListener("click", signup);
