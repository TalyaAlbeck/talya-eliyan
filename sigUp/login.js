
function logIn() {
    let firstname = document.getElementById("name").value;
    let password = document.getElementById("pass").value;

    let usersArray = JSON.parse(localStorage.getItem("users"));
    console.log(usersArray);
    let check = false;
    for (let i = 0; i < usersArray.length; i++) {
        if (firstname === usersArray[i].firstname && password === usersArray[i].password) {
            check = true;
            break;
        }
        console.log(check);
    }
    if (check) {
        alert("welcome " + firstname);
        // window.location.href = "../home.html";

    }
    else {
        alert("name or password are incorrect");
    }

}

let login = document.getElementById("log-in");
login.addEventListener("click", logIn);
