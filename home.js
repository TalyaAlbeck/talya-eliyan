
// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }


// {key, value}

// console.log('lastname: ', lastname);

// console.log('password: ', password);



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

const firstname = document.getElementById("fname").value;
const lastname = document.getElementById("pass").value;
const password = document.getElementById("lname").value;
const user = {
    firstname,
    lastname,
    password
    
}

console.log('user: ', user);

const arrayuser = [user];
const arrUersname=[];

const form = document.getElementById("myForm");
form.addEventListener("submit",userid)
function userid() {

}


function