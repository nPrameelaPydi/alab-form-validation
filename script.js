console.log(`ALAB Form Validation`);

//*******Part 1: Introduction************ */
console.log(`*****Part 1: Introduction****`);

const errMsg = document.getElementById('errorDisplay');

function showError(message) {
    errMsg.style.display = 'none'; //clear any previous error messages
    errMsg.textContent = message;
    errMsg.style.display = 'flex';
    //setTimeout(() => {
    //    errMsg.style.display = 'none'; // Hide after 3 seconds
    //}, 3000);
}
//showError("This is an error message.");



//*******Part 2 & 3 ************ */
console.log(`*****Part 2 & 3****`);
//General Requirements & Registration Form Validation Requirements
//Username
const usernameInput = document.querySelector('input[name = username]');
const emailInput = document.querySelector(`input[name="email"]`);
const passwordInput = document.querySelector('input[name = "password"]');
const passwordCheckInput = document.querySelector('input[name="passwordCheck"]');


usernameInput.addEventListener('input', (e) => {
    console.log(usernameInput.value.length);
    if (usernameInput.value.length < 4) {
        console.log(usernameInput.value.length)
        usernameInput.setCustomValidity('Username must be at least 4 characters long.');
    }
})
//Email
emailInput.addEventListener('input', (e) => {

    if (emailInput.validity.valid && emailInput.value.endsWith('@example.com')) {
        showError(`Email addresses from example.com are not allowed.`);
    }
});
//Password
document.getElementById('registration').addEventListener('submit', () => {
    // let validFlag = true;
    if (passwordInput.value.toLowerCase().includes(`password`)) {
        showError(`Passwords cannot contain the word "password".`);
        // validFlag = false;
    }
    if (passwordInput.value.includes(usernameInput.value)) {
        showError(`Passwords cannot contain the username.`);
        //validFlag = false;
    }

    passwordCheckInput.addEventListener('input', () => {
        if (passwordCheckInput.value !== passwordInput.value) {
            showError(`Passwords must match.`);
        }
        //validFlag = false;
        //if (!valid) {
        //    event.preventDefault();
        //}
    })
});



//passwordInput.addEventListener('input', () => {
//if(passwordInput.value !== passwordCheckInput.value){
//    showError(`Passwords must match.`);
//}
//})
//if (passwordCheckInput.value.toLowerCase().includes(`password`)) {
//    showError(`Passwords cannot contain the word "password".`);
//}
//if (passwordCheckInput.value.includes(usernameInput.value)) {
//    showError(`Passwords cannot contain the username.`);
//}








