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

});


