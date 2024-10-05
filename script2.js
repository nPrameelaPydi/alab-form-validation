const errMsg = document.getElementById('errorDisplay');

function showError(message, input) {
    errMsg.textContent = message;
    errMsg.style.display = 'flex';
    input.focus(); // Focus on the input that caused the error
}

const usernameInput = document.querySelector('input[name="username"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const passwordCheckInput = document.querySelector('input[name="passwordCheck"]');
const termsInput = document.querySelector('input[name = "terms"]');

let username;
let email;
let password;
let terms;

function hideError() {
    errMsg.style.display = 'none';
}

// Username validation
usernameInput.addEventListener('input', () => {
    hideError();
    //const currentinptVal = usernameInput.value;
    if (usernameInput.value.length < 4) {
        showError('Username must be at least 4 characters long.', usernameInput);
        return;
    } else if (new Set(usernameInput.value).size < 2) {
        //const uniqueChars = new Set(username);
        showError('Username must contain at least two unique characters.', usernameInput);
        return;
    } else if (/[^A-Za-z0-9]/.test(usernameInput.value)) {
        showError('Username cannot contain special characters or whitespace.', usernameInput);
        return;
    } else {
        username = usernameInput.value.toLowerCase();
    }
});

// Email validation
emailInput.addEventListener('input', () => {
    hideError();
    if (emailInput.validity.valid && emailInput.value.endsWith('@example.com')) {
        showError('Domains like example.com are not allowed.', emailInput);
    } else {
        email = emailInput.value.toLowerCase();
    }
});

// Password Validation
function validatePassword() {
    hideError();
    const currentPassword = passwordInput.value;
    const confirmPassword = passwordCheckInput.value;
    if (currentPassword.length < 12) {
        showError('Passwords must be at least 12 characters long.', passwordInput);
        return false; // Return false for invalid
    } else if (currentPassword.toLowerCase().includes('password')) {
        showError('Passwords cannot contain the word "password".', passwordInput);
        return false;
    } else if (currentPassword.includes(usernameInput.value)) {
        showError('Passwords cannot contain the username.', passwordInput);
        return false;
    } else if (currentPassword !== confirmPassword) {
        showError('Passwords must match.', passwordCheckInput);
        return false;
    } else {
<<<<<<< HEAD
        password = currentPassword.toLowerCase();
        return true; // Return true for valid
    }
}
passwordInput.addEventListener('input', () => {
    validatePassword();
});
=======
        password = currentPassword.toLowerCase(); // Assign valid password to the variable
        return true; // Return true for valid
    }
}

//password input
passwordInput.addEventListener('input', () => {
    validatePassword();
});
//password check input
>>>>>>> d7be3c37866345c196ea350f670ccf71401def15
passwordCheckInput.addEventListener('input', () => {
    validatePassword();
});


<<<<<<< HEAD
//Terms input check validation
termsInput.addEventListener('change', () => {
    hideError(); //hide error msg when chkbox is checked
});

// Form Submission
document.getElementById('registration').addEventListener('submit', (e) => {
    hideError();
    let isValid = true;


    if (!termsInput.checked) {
        showError('You must accept the terms and conditions.', termsInput);
        isValid = false;
    }


    if (!isValid) {
        e.preventDefault(); //prevent form submission if any validation errors
    } else {
        storeUserData();
    }
});

=======
//Terms Validity
>>>>>>> d7be3c37866345c196ea350f670ccf71401def15


