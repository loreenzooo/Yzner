function logout(event) {
    event.preventDefault(); 
    let user = confirm('Are you sure you want to log-out?');
    //conditional statement if user confirm
    if(user){
        alert('Log-out successfully.');
        window.location.href = "file:///C:/Users/laurence/OneDrive/Desktop/login-signup/index.html"; 
    }
    else{
        return;
    }
}
function activateMenu(event) {
    event.preventDefault(); 

    document.querySelectorAll('.sidebar-nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

   
    event.target.classList.add('active');

   
    document.querySelectorAll('main section').forEach(section => {
        section.classList.remove('active');
    });

    
    const sectionId = event.target.getAttribute('href').substring(1);
    document.getElementById(sectionId).classList.add('active');
}
