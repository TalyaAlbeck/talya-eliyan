
function logIn() {
    let firstname = document.getElementById("name").value;
    let password = document.getElementById("pass").value;

    let usersArray = JSON.parse(localStorage.getItem("users"));
    console.log(usersArray);
    let check = false;
    for (let i = 0; i < usersArray.length; i++) {
        if (firstname === usersArray[i].firstname && password === usersArray[i].password) {
            check = true;
            alert("is true!")
        }
        console.log(check);
    }
    if (check) {
        // window.location.href = "../home.html";
        alert("welcome " + firstname)
    }
    else {
        alert("Error");
    }
    console.log(check);

}

let login = document.getElementById("log-in");
login.addEventListener("click", logIn);
