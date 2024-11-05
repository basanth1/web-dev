const input = document.querySelector("#password");
const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");
const lenght =12;
const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers ="0123456789";
const symbol="~!@#$%^&*()_{}?`[]/=-><";
const all = uppercase+lowercase+numbers+symbol;
function create(){
    let password="";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    while(lenght>password.length){
password += all[Math.floor(Math.random()*all.length)];
    }
    input.value = password;
}
copy.addEventListener("click",()=>{
    console.log(input.value);
    alert("copied:"+input.value)
});
generate.addEventListener("click",()=>{
   create();
});
