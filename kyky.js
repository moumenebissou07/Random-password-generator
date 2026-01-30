
function GeneratePasswords(){
const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberchars = "0123456789";
const symbolchars = "`~!@#$%^&*()-_=+[{]}|\;:'\",<.>/?";
const Passlength =Number(document.getElementById("myinput").value);
const lowercase = document.getElementById("lowercase").checked;
const uppercase = document.getElementById("uppercase").checked;
const numbers = document.getElementById("numbers").checked;
const symbols = document.getElementById("symbols").checked;
let allowedchars = "";
let password = "";
allowedchars += lowercase ? lowercasechars : "";
allowedchars += uppercase ? uppercasechars : "";
allowedchars += numbers ? numberchars : ""; 
allowedchars += symbols ? symbolchars : "";
if (Passlength <= 0){
password = 'Warning !! : password length must be at least 1';
document.getElementById("result").textContent =password;
}
else if (allowedchars.length === 0 ){
password ='Warning !! : at least one allowed category need to be selected';
document.getElementById("result").textContent =password;
}
else {
for (let i =0 ; i<Passlength;i++){
const randomindex = Math.floor(Math.random() * allowedchars.length); 
password += allowedchars[randomindex];    
}
password = `your random Password is : ${password}`;
document.getElementById("result").textContent =password;
}
}



