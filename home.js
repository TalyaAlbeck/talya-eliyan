
// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }


// {key, value}
const firstname = document.getElementById("fname").value;
const lastname = document.getElementById("pass").value;
// console.log('lastname: ', lastname);
const password = document.getElementById("lname").value;
// console.log('password: ', password);


const user = {
    firstname,
    lastname,
    password
    
}

console.log('user: ', user);

// const LSFake = [

//     {
//         firstname: "shir",
//         lastname: "alima",
//         password: "z10m"

//     },

//     {
//         firstname: "eliyan",
//         lastname: "mu",
//         password: "1324"

//     }
// ]

// const newUser = {
//     firstname: "shir1",
//     lastname: "alima1",
//     password: "z"

// }


const arrayuser = [user];


const form = document.getElementById("myForm");
form.addEventListener("submit",userid);
function userid() {

}
