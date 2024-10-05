console.log(`ALAB Form Validation`);

//*******Part 1: Introduction************ */
console.log(`*****Part 1: Introduction****`);

const errMsg = document.getElementById('errorDisplay');

function showError(message, input) {
    errMsg.textContent = message;
    errMsg.style.display = 'flex';
    input.focus(); // Focus on the input that caused the error
}
//setTimeout(() => {
//    errMsg.style.display = 'none'; // Hide after 3 seconds
//}, 3000);
//showError("This is an error message.");


//*******Part 2 & 3 ************ */
console.log(`*****Part 2 & 3****`);
//General Requirements & Registration Form Validation Requirements
//Username

const usernameInput = document.querySelector('input[name="username"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const passwordCheckInput = document.querySelector('input[name="passwordCheck"]');
const termsInput = document.querySelector('input[name = "terms"]');

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
        showError('Domains like example.com are not allowed.', emailInput);
    }
});

//Terms Validity
termsInput.addEventListener('change', () => {
    if (!termsInput.checked) {
        showError('Terms and conditions are not accepted.', termsInput);
    }
})

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
        e.preventDefault(); //prevent form submission if not valid
    }

    //if (!document.getElementById('terms').checked) {
    //    showError('You must accept the terms of use.', document.getElementById('terms'));
    //    valid = false;
    //}
});

//Terms Validity
document.getElementById('registration').addEventListener('submit', (e) => {
    hideError();
    let valid = true;
    if (termsInput.checked === false) {
        showError('You must accept the terms and conditions.', termsInput);
        valid = false;
    }
    if (!valid) {
        e.preventDefault(); //prevent form submission if not valid
    }
})



//code using setCustomValidity error message
//usernameInput.addEventListener('input', () => {
//    usernameInput.setCustomValidity(''); // Clear any previous custom validity messages
//    const username = usernameInput.value;

//    if (username.length < 4) {
//        usernameInput.setCustomValidity('Username must be at least 4 characters long.');
//        usernameInput.reportValidity(); //This will show the custom message immediately
//        usernameInput.focus();
//        return;
//    }
//    //using the Set object in JavaScript to check for unique characters
//    const uniqueChars = new Set(username);
//    if (uniqueChars.size < 2) {
//        usernameInput.setCustomValidity('Username must contain at least two unique characters.');
//        usernameInput.reportValidity();
//        usernameInput.focus();
//        return;
//    }
//    //.test() method in JavaScript is a built-in function of the RegExp (regular expression) object. It is used to check if a given string matches a specific regular expression pattern.
//    if (/[^A-Za-z0-9]/.test(username)) {
//        usernameInput.setCustomValidity('Username cannot contain special characters or whitespace.');
//        usernameInput.reportValidity();
//        usernameInput.focus();
//        return;
//    }
//});
////Email validation
//emailInput.addEventListener('input', () => {
//    emailInput.setCustomValidity('');
//    if (emailInput.validity.valid && emailInput.value.endsWith('@example.com')) {
//        emailInput.setCustomValidity(`Domains like example.com are not allowed.`);
//        emailInput.reportValidity();
//        emailInput.focus();
//    }
//});


//showError(`Email addresses from example.com are not allowed.`);
//usernameInput.addEventListener('input', () => {
//    hideError();
//    const username = usernameInput.value;
//    if (username.length < 4) {
//        //console.log(usernameInput.value.length)
//        showError('Username must be at least 4 characters long.');
//        return;
//    }
//    //using the Set object in JavaScript to check for unique characters
//})
//Email
//emailInput.addEventListener('input', () => {

//    if (emailInput.validity.valid && emailInput.value.endsWith('@example.com')) {
//        showError(`Email addresses from example.com are not allowed.`);
//    }
//});
////Password
//document.getElementById('registration').addEventListener('submit', () => {
//    // let validFlag = true;
//    if (passwordInput.value.toLowerCase().includes(`password`)) {
//        showError(`Passwords cannot contain the word "password".`);
//        // validFlag = false;
//    }
//    if (passwordInput.value.includes(usernameInput.value)) {
//        showError(`Passwords cannot contain the username.`);
//        //validFlag = false;
//    }

//    passwordCheckInput.addEventListener('input', () => {
//        if (passwordCheckInput.value !== passwordInput.value) {
//            showError(`Passwords must match.`);
//        }
//        //validFlag = false;
//        //if (!valid) {
//        //    event.preventDefault();
//        //}
//    })
//});


////passwordInput.addEventListener('input', () => {
////if(passwordInput.value !== passwordCheckInput.value){
////    showError(`Passwords must match.`);
////}
////})
////if (passwordCheckInput.value.toLowerCase().includes(`password`)) {
////    showError(`Passwords cannot contain the word "password".`);
////}
////if (passwordCheckInput.value.includes(usernameInput.value)) {
////    showError(`Passwords cannot contain the username.`);
////}








