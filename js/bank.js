document.getElementById('login-button').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // set user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'sanaul@gmail.com' && userPassword == 'sanaul'){
        window.location.href = 'js/banking.html';
    }
    
    

})