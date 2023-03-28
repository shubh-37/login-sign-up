const email = document.querySelector('.email-login');
const password = document.querySelector('.password-login');
const submitBtn = document.querySelector(".submit-login");
const outputDiv = document.querySelector(".output-login");

const passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const emailChecker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function loginHandler(){
    const emailVal = email.value;
    const passwordVal = password.value;
    const data = { emailId: emailVal, password: passwordVal }
    if(emailVal&&passwordVal){
        if(emailVal.match(emailChecker)&&passwordVal.match(passwordChecker)){
            axios.post("http://localhost:3000/login", data)
              .then(function (response) {
                outputDiv.innerText = "You'll now be redirected to Welcome page";
                // window.location.replace("/login.html")
                console.log(response);
              })
              .catch(function ({ response : { status }}) {
                    if(status == 401){
                        outputDiv.innerHTML = "Incorrect password please try again!!";
                    }else if(status == 404){
                        outputDiv.innerHTML = "No user found!"
                    }
              });
        }else{
            outputDiv.innerText = "Please enter correct email id and password!"
        }
    }else{
        outputDiv.innerText = "Please enter both email and password to proceed further."
    }   
}
submitBtn.addEventListener('click',loginHandler)