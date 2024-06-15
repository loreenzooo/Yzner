
document.getElementsByClassName('login-form')[0].addEventListener('submit', function(event) {

    event.preventDefault();
    

    let username = document.getElementsByClassName('loginUsername')[0].value;

    let password = document.getElementsByClassName('loginPassword')[0].value;
    

    if (username === 'adminmark' && password === 'laurence') {
       
        alert('Login successful!');
        
        window.location = "C:/Users/laurence/OneDrive/Desktop/.NET Website/MyCodes/.netWebsite/.netWebsite/Vintong/dashboard.html";
    } 
  
    else {
        return;
        alert("Invalid username or password. Please try again.");
    }
});
