let inputslider = document.getElementById("inputslider");
let slidevalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let includeuppercase = document.getElementById("includeuppercase");
let includenumbers = document.getElementById("includenumbers");
let includesymbols = document.getElementById("includesymbols");
let includelowercase = document.getElementById("includelowercase");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");

// show slider value
slidevalue.textContent=inputslider.value; 
inputslider.addEventListener('input', ()=>{
    slidevalue.textContent=inputslider.value;
})

genbtn.addEventListener('click', ()=>{
    passbox.value=generatepassword();
})

let upperchars="ABCDEFGHIJKLMOPQRSTUVWXYZ";
let lowerchars="abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "~@#$%^&*"

//password generating function
function generatepassword(){
    let genPassword="";
    let allchars="";

    allchars += includeuppercase.checked ? upperchars : "";
    allchars += includenumbers.checked ? allnumbers : "";
    allchars += includesymbols.checked ? allsymbols : "";
    allchars += includelowercase.checked ? lowerchars : "";
    

    for(let i=0; i<inputslider.value; i++){
        genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    }    

    return genPassword;
}

copyicon.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText = "check";
        copyicon.title = "Password Copied";

        setTimeout(()=>{
            copyicon.innerHTML = "content_copy";
            copyicon.title="";
        },2000)
    }
})