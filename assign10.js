var nameInput = document.getElementById('nameForm')
var emailInput = document.getElementById('emailForm')
var passwordInput = document.getElementById('passwordForm')
var emailLoginInput = document.getElementById('emailLoginForm')
var passwordLoginInput = document.getElementById('passwordLoginForm')
var homePage = document.getElementById('homePage')
var login = document.getElementById('login')
var regex = /^[a-z][a-z0-9]*@[a-z]+\.com$/

var newAccounts = []
if (localStorage.getItem('newAccounts') != null) {
    newAccounts =JSON.parse(localStorage.getItem('newAccounts'));
}

 function signingUp() {
   
    var account = {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
    } 
        if (nameInput.value=='' || emailInput.value=='' || passwordInput.value=='') {
        document.getElementById('emailExists').innerHTML='Please fill all inputs.'

    }
        else if (existing() == false) {
            console.log('email exists');
            document.getElementById('emailExists').innerHTML='Email already exists.'
        }
        else if(existing() != false && regex.test(emailInput.value)){
            document.getElementById('accountCreated').innerHTML='Account created successfully.'
            newAccounts.push(account)
            localStorage.setItem('newAccounts',JSON.stringify(newAccounts))
            console.log(newAccounts);
            clearData();
}else{
    document.getElementById('emailExists').innerHTML='Please enter valid email.'
}}

function existing() {
    for (let i = 0; i < newAccounts.length; i++) {
       if (emailInput.value == newAccounts[i].email) {
        return false
       }
    }
}


function logingIn() {
    var name = nameInput.value
    var email = emailLoginInput.value
    var password = passwordLoginInput.value
    if (emailLoginInput.value=='' || passwordLoginInput.value=='') {
        document.getElementById('emailExists').innerHTML='Email and password are required.'
        return;
    }
    for (let i = 0; i < newAccounts.length; i++) {
        if (newAccounts[i].email === email){
            if (newAccounts[i].password === password) {
                console.log("Login successful!");
                login.classList.replace('d-block','d-none')
                homePage.classList.replace('d-none','d-block')
                document.getElementById('welcomePage').innerHTML='Welcome '+ newAccounts[i].name
            //     window.location.replace('home.html');
            //     document.getElementById('welcomePage').innerHTML=`Welcome ${name}`
              } 
              else {
                console.log("Incorrect password or email.");
                document.getElementById('emailExists').innerHTML='Incorrect password or email.'
              }
            return;
    }
    else if (newAccounts[i].email != email) {
        console.log("email doesn't exist");
        document.getElementById('emailExists').innerHTML=`Email doesn't exist.`
    }
}
}

function clearData() {
    nameInput.value=''
    emailInput.value=''
    passwordInput.value=''
}






