

let currentUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

let userDetails = JSON.parse(localStorage.getItem("users"))


const fname= document.getElementById("fname");
const lname= document.getElementById("lname");


const save_info= document.getElementById("save_info");

save_info.addEventListener("click",()=>{
    if(fname.value==="" && lname.value===""){
        alert("Enter valid inputs");
    }
    if(fname.value!==""){
        currentUser.firstName=`${fname.value}`;
    }
    if(lname.value!==""){
        currentUser.lastName=`${lname.value}`;
    }

    sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));

    userDetails.forEach(saveUserInfo);

    fname.value="";
    lname.value="";

    function saveUserInfo(item){
            if(currentUser.email===item.email){
                item.firstName=`${fname.value}`;
                item.lastName=`${lname.value}`;
            }
        localStorage.setItem('users',JSON.stringify(userDetails));
    
    }
})

//change password
const old_password= document.getElementById("old_password");
const new_password= document.getElementById("new_password");
const confirm_password= document.getElementById("confirm_password");
const change_password= document.getElementById("change_password");
const log_out= document.getElementById("log_out");

change_password.addEventListener("click",()=>{

    if(currentUser.password===old_password.value){
        if(new_password.value===confirm_password.value){
            currentUser.password=`${new_password.value}`;
            userDetails.forEach(saveUserInfo);
            alert("password changed successfullly");
            sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
        }else{
            alert("New password and confirm password are not matching");
        }
    }else{
        alert("Enter correct old password");
    }
    function saveUserInfo(item){
            if(currentUser.email===item.email){
                item.password=`${new_password.value}`
            }
        localStorage.setItem('users',JSON.stringify(userDetails));
    
    }
})

log_out.addEventListener("click",()=>{
    sessionStorage.setItem('loggedInUser',JSON.stringify(""));
    location.href="../Login";
})

