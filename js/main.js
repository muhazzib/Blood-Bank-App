
let database = firebase.database().ref("/")
let email = document.getElementById("inputemail");
let password = document.getElementById("inputpassword");
let username = document.getElementById("inputuser");
let signinemail = document.getElementById("signinemail");
let signinpassword = document.getElementById("signinpassword");

let signindiv=document.getElementById("signin");
let signupdiv=document.getElementById("signup");

// let auth=firebase.auth();
function submit(){
  let  user={
        name:username.value,
        email:email.value,
        password:password.value
    }
    // database.child("users").push(user)
    // console.log(user)

    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((res)=>{
      user.useruid=res.uid;
        database.child("user/" + res.uid).set(user)
            .then((success)=>{
                signindiv.style.display="none";
               signupdiv.style.display="block";                
                
        })
        })
    .catch((error)=>{
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
username.value="";
email.value="";
password.value=""
}






document.getElementById("stop").addEventListener("submit",

   submit=(event)=>{
        if (signinemail.value != "" || signinpassword.value != "") {
            event.preventDefault()
            let user = {
                email: signinemail.value,
                password: signinpassword.value
            }
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((success)=> {
                    database.child('user/' + success.uid).once("value", function (snapshot) {
                        localStorage.setItem("user", JSON.stringify(snapshot.val()))
                    }).then(function (success) {
                        window.location.href = "home/index.html"
                        
                    })
                })
                .catch((error)=>{
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        }
        else if(signinemail.value == ""||signinpassword.value==""){
    alert("Please Enter Email/Password");
        }
    })














signupswitchfunc=()=>{

    if(signindiv.style.display!="none"){
        signindiv.style.display="none";
        signupdiv.style.display="block"
    }
    else{
        signindiv.style.display="block";
        signupdiv.style.display="none"
    }
}



