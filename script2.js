console.log(`ALAB Form Validation`);

const errMsg = document.getElementById('errorDisplay');
const usernameInput = document.querySelector('input[name="username"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const passwordCheckInput = document.querySelector('input[name="passwordCheck"]');

function showError(message, input) {
    errMsg.textContent = message;
    errMsg.style.display = 'flex';
    input.focus(); // Focus on the input that caused the error
}

function hideError() {
    errMsg.style.display = 'none';
}

// Username validation
usernameInput.addEventListener('input', () => {
    hideError();
    const username = usernameInput.value;

    if (username.length < 4) {
        showError('Username must be at least 4 characters long.', usernameInput);
        return;
    }

    const uniqueChars = new Set(username);
    if (uniqueChars.size < 2) {
        showError('Username must contain at least two unique characters.', usernameInput);
        return;
    }

    if (/[^A-Za-z0-9]/.test(username)) {
        showError('Username cannot contain special characters or whitespace.', usernameInput);
        return;
    }
});

// Email validation
emailInput.addEventListener('input', () => {
    hideError();
    if (emailInput.validity.valid && emailInput.value.endsWith('@example.com')) {
        showError('Email addresses from example.com are not allowed.', emailInput);
    }
});

// Password validation
document.getElementById('registration').addEventListener('submit', (e) => {
    hideError();
    let valid = true;

    if (passwordInput.value.length < 12) {
        showError('Passwords must be at least 12 characters long.', passwordInput);
        valid = false;
    }

    if (passwordInput.value.toLowerCase().includes('password')) {
        showError('Passwords cannot contain the word "password".', passwordInput);
        valid = false;
    }

    if (passwordInput.value.includes(usernameInput.value)) {
        showError('Passwords cannot contain the username.', passwordInput);
        valid = false;
    }

    if (passwordInput.value !== passwordCheckInput.value) {
        showError('Passwords must match.', passwordCheckInput);
        valid = false;
    }

    if (!valid) {
        e.preventDefault(); // Prevent form submission if not valid
    }
});
