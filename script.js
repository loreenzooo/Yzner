  

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}


document.addEventListener("DOMContentLoaded", function () {
    var users = [];

    
   
    var signupForm = document.getElementsByClassName("signup-form")[0];
    if (signupForm) {
        signupForm.addEventListener("submit", function (event){
            event.preventDefault();
            var username = document.getElementsByClassName("signupUsername")[0].value;
            var password = document.getElementsByClassName("signupPassword")[0].value;

            var existingUser = users.find((user) => user.username === username);
            if (existingUser){
                alert("Username already taken.");
                return;
            }
            users.push({username, password});
            alert("Signup successful. Please log in.");
            signupForm.reset();
            showLoginForm();
        });
    }

   

    var loginForm = document.getElementsByClassName("login-form")[0];
    if (loginForm) {
        loginForm.addEventListener("submit", function (event){
            event.preventDefault();
            var username = document.getElementsByClassName("loginUsername")[0].value;
            var password = document.getElementsByClassName("loginPassword")[0].value;
            var user = users.find(
                (user) => user.username === username && user.password === password);

            if (user){
                alert("Login successful! Welcome, " + username + "!");
                window.location = "C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/index.html";  
            } 
            else if (password === 'laurence'){
               return;
            }
            else{
                
                alert("Invalid username or password. Please try again.");
            }
        });
    }
});


    



