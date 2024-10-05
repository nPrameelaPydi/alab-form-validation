console.log(`ALAB Form Validation`);

//*******Part 1: Introduction************ */
console.log(`*****Part 1: Introduction****`);

const errMsg = document.getElementById('errorDisplay');

function showError(message) {
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

function hideError() {
    errMsg.style.display = 'none';
}

usernameInput.addEventListener('input', () => {
    usernameInput.setCustomValidity(''); // Clear any previous custom validity messages
    const username = usernameInput.value;

    if (username.length < 4) {
        usernameInput.setCustomValidity('Username must be at least 4 characters long.');
        usernameInput.reportValidity(); //This will show the custom message immediately
        usernameInput.focus();
        return;
    }
    //using the Set object in JavaScript to check for unique characters
    const uniqueChars = new Set(username);
    if (uniqueChars.size < 2) {
        usernameInput.setCustomValidity('Username must contain at least two unique characters.');
        //usernameInput.reportValidity();
        usernameInput.focus();
        return;
    }
    //.test() method in JavaScript is a built-in function of the RegExp (regular expression) object. It is used to check if a given string matches a specific regular expression pattern.
    if (/[^A-Za-z0-9]/.test(username)) {
        usernameInput.setCustomValidity('Username cannot contain special characters or whitespace.');
        //usernameInput.reportValidity();
        usernameInput.focus();
        return;
    }
});

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








