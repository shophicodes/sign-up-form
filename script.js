let form = document.querySelector("#register-form");
let password = document.querySelector("#password");
let checkPassword = document.querySelector("#confirm-password");

function checkPasswords() {
    if(password !== checkPassword) {
        alert("You must confirm your password before continuing.");
    }
}

form.addEventListener("submit", checkPasswords);