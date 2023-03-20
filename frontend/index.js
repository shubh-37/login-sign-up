// const { default: axios } = require("axios");

const email = document.querySelector('.emailSignUp');
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
            outputDiv.innerText = "Youre logged in"
            axios.post("http://localhost:3000/register", data)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            window.location.replace("/login")
        }else{
            outputDiv.innerText = "Please enter correct email id and password!"
        }
    }else{
        outputDiv.innerText = "Please enter both email and password to proceed further."
    }   
}
submitBtn.addEventListener('click',onSignUpHandler)