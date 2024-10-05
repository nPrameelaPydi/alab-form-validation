console.log(`ALAB Form Validation`);

//*******Part 1: Introduction************ */
console.log(`*****Part 1: Introduction****`);

const errDisplay = document.getElementById('errorDisplay');

function showError(message) {
    errDisplay.textContent = message; // Set the error message
    errDisplay.style.display = 'flex'; // Show the error display
    setTimeout(() => {
        errDisplay.style.display = 'none'; // Hide after 3 seconds
    }, 3000);
}

showError("This is an error message.");



