const usernameInput = document.querySelector('input[name="username"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const passwordCheckInput = document.querySelector('input[name="passwordCheck"]');
const termsInput = document.querySelector('input[name = "terms"]');
const errMsg = document.getElementById('errorDisplay');
const submitBtn = document.querySelector('input [type="submit"]');

document.getElementById('registration').addEventListener('submit', (e) => {
    e.preventDefault(); //prevent default behavior of form submission

    //Clear any previous existing err msgs
    errMsg.style.display = 'none';
    errMsg.textContent = '';

    const usernameValue = usernameInput.value;
    if (!userNameValidation(usernameValue)) {
        usernameInput.focus();
        return;
    }
    const emailValue = emailInput.value;
    if (!emailValidation(emailValue)) {
        emailInput.focus();
        return;
    }
    const passwordValue = passwordInput.value;
    if (!passwordValidation(passwordValue)) {
        passwordInput.focus();
    }
    const passwordCheckValue = passwordCheckInput.value;
    if (passwordValue !== passwordCheckValue) {
        showError('Passwords must match');
        passwordCheckInput.focus();
        return;
    }
    if (!termsInput.checked) {
        showError('You must accept the terms and conditions.');
        return;
    }
    //if all validations pass, store user data in local storage
    storeUserData(usernameValue, emailValue, passwordValue);

    //clear the form and display registration success message
    e.target.reset();
    showSuccess('Registration Successful!!');

});

function showError(message) {
    errMsg.textContent = message;
    errMsg.style.display = 'block';
}
function showSuccess(message) {
    errMsg.textContent = message;
    errMsg.style.display = 'block';
    errMsg.style.backgroundColor = 'green';
    //errMsg.style.color = 'white';
}
function isUnique(username) {
    let users = JSON.parse(localStorage.getItem('users'));
    for (let user of users) {
        if (user.username === username) { return false; }
    }
    return true;
}
function userNameValidation(username) {
    if (username === "") {
        showError("Username cannot be empty!!");
        return false;
    } else if (username.length < 4) {
        showError('Username must be at least 4 characters long.');
        return false;
    } else if (new Set(username).size < 2) {
        //using the Set object in JavaScript to check for unique characters
        //const uniqueChars = new Set(username);
        showError('Username must contain at least two unique characters.');
        return false;
    } else if (/[^a-zA-Z0-9]/.test(username)) {
        //.test() method in JavaScript is a built-in function of the RegExp (regular expression) object. It is used to check if a given string matches a specific regular expression pattern.
        showError('Username cannot contain special characters or whitespace.');
        return false;
    } else if (!isUnique(username.toLowerCase())) {
        showError('Username is NOT unique.');
        return false;
    }
    return true;
}
function emailValidation(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('Please provide a valid email address.');
        return false;
    } else if (email.endsWith("@example.com")) {
        showError('Domains like example.com are not allowed.');
        return false;
    }
    return true;
}
function passwordValidation(password) {
    const passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])$";
    if (!passwordPattern.test(password)) {
        showError('Password must match pattern of atleast one uppercase letter, one special character, one number');
        return false;
    } else if (password.length < 12) {
        showError('Passwords must be at least 12 characters long.');
        return false;
    } else if (password.toLowerCase().includes('password')) {
        showError('Passwords cannot contain the word "password".');
        return false;
    } else if (password.toLowerCase().includes(usernameInput.value.toLowerCase())) {
        showError('Passwords cannot contain the username.');
        return false;
    } //else if (password !== passwordCheckInput.value) {
    //    showError('Passwords must match.');
    //    return false;
    //}
    return true;
}
function storeUserData(username, email, password) {
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};
    //console.log(localStorage.getItem('users'));
    // Create a user object
    //const newUser = {
    //    username,
    //    email,
    //    password
    //};
    users[username.toLowerCase()] = { email: email.toLowerCase(), password: password };
    // Add the new user to the users array
    //users.push(newUser);
    // Store the updated users array back in localStorage
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
}





