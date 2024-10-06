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
const submitBtn = document.querySelector('input [type="submit"]')

let username;
let email;
let password;
let terms;

function hideError() {
    errMsg.style.display = 'none';
}

function isUnique(username) {
    let users = JSON.parse(localStorage.getItem('users'));
    for (let user of users) {
        if (user.username == username) {
            return false;
        }
    }
    return true;

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
    } else if (!isUnique(usernameInput.value.toLowerCase())) {
        showError('Username is NOT unique.', usernameInput);
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
        password = currentPassword.toLowerCase();
        return true; // Return true for valid
    }
}
passwordInput.addEventListener('input', () => {
    validatePassword();
});
passwordCheckInput.addEventListener('input', () => {
    validatePassword();
});


//TermsInput checkbox validation
termsInput.addEventListener('change', () => {
    hideError(); // hide any existing err msg when checkbox checked
});


// Store user data in localStorage
function storeUserData() {
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(localStorage.getItem('users'));
    // Create a user object
    const newUser = {
        username,
        email,
        password
    };

    // Add the new user to the users array
    users.push(newUser);

    // Store the updated users array back in localStorage
    localStorage.setItem('users', JSON.stringify(users));
}

function showSuccess(message) {
    errMsg.textContent = message;
    errMsg.style.display = 'flex';
    errMsg.style.backgroundColor = 'green'; // Set background for success
    errMsg.style.color = 'white'; // Optional: change text color for contrast
}

// Form Submission
document.getElementById('registration').addEventListener('submit', (e) => {
    hideError(); // Hide existing error messages
    let isValid = true;
    if (!termsInput.checked) {
        showError('You must accept the terms and conditions.', termsInput);
        isValid = false;
    }
    if (!isValid) {
        e.preventDefault(); //prevent form submission if any validation errors
    } else {
        storeUserData(); // Call function to store user data in localStorage

        // Show success message
        showSuccess('Registration successful!', submitBtn);

        // Clear all form fields
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        passwordCheckInput.value = '';
        termsInput.checked = false;
    }
});



