

const form = document.getElementById("myForm");


function signup(e) {
    e.preventDefault();
    const firstname = document.getElementById("name").value;
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

    window.location.href = "./home_page/home.html";
    alert("welcome " + firstname);
}
let submit = document.getElementById("submit");
submit.addEventListener("click", signup);

