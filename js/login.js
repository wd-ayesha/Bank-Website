document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    if(email === 'abc@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid input');
    }
})