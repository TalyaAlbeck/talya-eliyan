const firstname = document.getElementById("fname").value;
const lastname = document.getElementById("pass").value;
const password = document.getElementById("lname").value;
const user = {
    "firstname":firstname,
    "lastname":lastname,
    "password":password
    
}

if(!localStorage["users"]){
    localStorage.setItem("users",JSON.stringify([]));
}

console.log('user: ', user);
let userArray=JSON.parse(localStorage["users"]);
userArray.push(user);
localStorage["users"]=JSON.stringify(userArray);

let arrUersname=[];

const form = document.getElementById("myForm");
form.addEventListener("submit",userid)
function userid() {

}

