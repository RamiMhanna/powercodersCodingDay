let credentials = {
    email: "rami.mhanna@powercoders.org",
    password: "58585858"
}
function validate(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if ( email === credentials.email && password === credentials.password){
        alert ("Login successfully");
        return false;
    }
    else {
        alert("You'r inputs are wrong.");
   }
}