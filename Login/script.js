const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn=document.getElementById('loginBtn');

//nav bar buttons
const home_btn= document.getElementById("home");
// const login_btn= document.getElementById("login");
 const signup_btn= document.getElementById("signup");
const myCart_btn= document.getElementById("my_cart");
const profile_btn= document.getElementById("profile");

profile_btn.addEventListener("click",()=>{
    alert("LogIn First to check your Profile.")
})
myCart_btn.addEventListener("click",()=>{
    alert("LogIn First to go inside your Cart.");
})
home_btn.addEventListener("click",()=>{
    alert("LogIn First to go inside Home.");
})
signup_btn.addEventListener("click",()=>{
    location.href="../SignUp";
})

loginBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(email.value.trim()==='' || password.value.trim()===''){
        alert('please enter values');
    }
    else{
        let users=JSON.parse(localStorage.getItem('users'));
        if(users){
            let currentUser = users.find((currentUser)=>{
                return currentUser.email === email.value.trim();
            });
            console.log(currentUser);
            if(currentUser){
                if(password.value.trim()===currentUser.password){
                    sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
                    window.location.href='../Shop';
                    alert('login succesful');
                }
                else{
                    alert('incorrect password');
                }
            }else{
                alert('you have not signed up');
            }
        } else{
            alert('you have not signed up');
        }
    }
})