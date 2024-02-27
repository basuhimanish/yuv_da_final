function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    if (!name.match(/^[A-Za-z]+$/)) {
        alert('Please enter a valid name containing only alphabet characters.');
        return false;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)) {
        alert('Please enter a valid password containing at least one uppercase letter, one lowercase letter, one special character, one digit, and a minimum length of 8 characters.');
        return false;
    }

    if (!phone.match(/^\d{10}$/)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }
    
    return true;
}

