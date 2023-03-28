// const { default: axios } = require("axios");

const email = document.querySelector('.email-sign-up');
const password = document.querySelector('.password-sign-up');
const submitBtn = document.querySelector(".submit");
const outputDiv = document.querySelector(".output");

const passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const emailChecker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function onSignUpHandler(){
    const emailVal = email.value;
    const passwordVal = password.value;
    const data = {emailId: emailVal, password: passwordVal}
    if(emailVal&&passwordVal){
        if(emailVal.match(emailChecker)&&passwordVal.match(passwordChecker)){
            axios.post("http://localhost:3000/register", data)
              .then(function (response) {
                console.log(response);
                outputDiv.innerHTML = "Your acc is created!"
                window.location.replace("/login.html")
              })
              .catch(function ({ response : { status }}) {
                  if(status == 409){
                    outputDiv.innerText = "This user already exists please try again with a new email ID";
                  }
              });
        }else{
            outputDiv.innerText = "Please enter correct email id and password!"
        }
    }else{
        outputDiv.innerText = "Please enter both email and password to proceed further."
    }   
}
submitBtn.addEventListener('click',onSignUpHandler)