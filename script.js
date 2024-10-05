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

const usernameInput = document.querySelector('input[name = username]');

usernameInput.addEventListener('input', () => {
    if (usernameInput.value.length < 4) {
        usernameInput.setCustomValidity('Username must be at least 4 characters long.');
    }
})

const emailInput = document.querySelector(`input[name="email"]`);
emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid && emailInput.value.endsWith('@example.com')) {
        showError(`Email addresses from example.com are not allowed.`);
    }
});








