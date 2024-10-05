document.getElementById('registration').addEventListener('submit', (e) => {
    hideError();
    let valid = true;

    // Username validation
    if (usernameInput.value.length < 4) {
        showError('Username must be at least 4 characters long.', usernameInput);
        valid = false;
    }

    // Email validation
    if (emailInput.validity.valid && emailInput.value.endsWith('@example.com')) {
        showError('Domains like example.com are not allowed.', emailInput);
        valid = false;
    }

    // Password validation
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

    // Check if terms are accepted
    if (!document.getElementById('terms').checked) {
        showError('You must accept the terms of use.', document.getElementById('terms'));
        valid = false;
    }

    if (!valid) {
        e.preventDefault(); // Prevent form submission if any field is invalid
    }
});
