const signupBtn = document.getElementById("signupBtn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("confirmPassword");
const loginRedirect = document.getElementById('loginRedirect');

//nav bar buttons
const home_btn= document.getElementById("home");
const login_btn= document.getElementById("login");
// const signup_btn= document.getElementById("signup");
const myCart_btn= document.getElementById("my_cart");
const profile_btn= document.getElementById("profile");

profile_btn.addEventListener("click",()=>{
    alert("SignUp First to check your Profile.")
})
myCart_btn.addEventListener("click",()=>{
    alert("SignUp First to go inside your Cart.");
})
home_btn.addEventListener("click",()=>{
    alert("SignUp First to go inside Home.");
})
login_btn.addEventListener("click",()=>{
    location.href="../Login";
})
// signup_btn.addEventListener("click",()=>{
//     location.href="./SignUp"
// })

const cnfPasswordValue = document
  .getElementById("confirmPassword")
  .value.trim();


function saveUser(fName, lName, emailInput, passwordInput) {
  let userObj = {
    firstName: fName,
    lastName: lName,
    email: emailInput,
    password: passwordInput,
  };
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // either array from localStorage or []
  users.push(userObj);
  localStorage.setItem("users", JSON.stringify(users));
  // session storage -> loggedIn user
  sessionStorage.setItem('loggedInUser',JSON.stringify(userObj));
  firstName.value='';
  lastName.value='';
  email.value='';
  password.value='';
  cnfPassword.value='';
  alert('Sign up successfull');
  location.href="../Login";
}

function checkIfUserExist(email) {
  // array of objects
  let users = JSON.parse(localStorage.getItem("users"));
  const obj = users.find((userObj) => {
    return userObj.email === email;
  });
  if (obj) return true;
  else false;
}

signupBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    firstName.value.trim() === "" ||
    lastName.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    cnfPassword.value.trim() === ""
  ) {
    alert("all fields are required");
  } else {
    if (password.value.trim() !== cnfPassword.value.trim()) {
      alert("password not matching");
      password.value = "";
      cnfPassword.value = "";
    } 
    else {
      if (localStorage.getItem("users")) {
        // if my user exist-> alert user already exist
        if (checkIfUserExist(email.value)) {
          alert("email exists");
        } else {
          // here if users array exist in local storage and
          // user is unique
          saveUser(
            firstName.value,
            lastName.value,
            email.value,
            password.value
          );
        }
      } 
      else {
        saveUser(firstName.value, lastName.value, email.value, password.value);
      }
    }
  }
});

loginRedirect.addEventListener('click',()=>{
  location.href='../Login';
})
