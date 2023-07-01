
const home_btn= document.getElementById("home");
const login_btn= document.getElementById("login");
const signup_btn= document.getElementById("signup");
const myCart_btn= document.getElementById("my_cart");
const profile_btn= document.getElementById("profile");
const login_btn2= document.getElementById("login_btn");
const signup_btn2= document.getElementById("signup_btn");

profile_btn.addEventListener("click",()=>{
    alert("LogIn First to check your Profile.")
})
myCart_btn.addEventListener("click",()=>{
    alert("Login First to go inside your Cart.");
})
home_btn.addEventListener("click",()=>{
    alert("Login First to go inside Home.");
})
login_btn.addEventListener("click",()=>{
    location.href="./Login";
})
login_btn2.addEventListener("click",()=>{
    location.href="./Login";
})
signup_btn.addEventListener("click",()=>{
    location.href="./SignUp"
})
signup_btn2.addEventListener("click",()=>{
    location.href="./SignUp"
})