var users = []; 
document.getElementById("signup-form").addEventListener("submit", function (event){
    var username = document.getElementsByClassName("signupUsername").value;
    var password = document.getElementsByClassName("signupPassword").value;

    var existingUser = users.find((user) => user.username === username);
    if (existingUser){
        alert("Username already taken.");
        return;
    }
    users.push({username, password});
    alert("Signup succesful. Please Log-in.");
    document.getElementsByClassName("signup-form").reset();
});
document.getElement