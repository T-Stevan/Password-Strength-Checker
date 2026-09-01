const passwordField = document.getElementById("password");

const eye = document.getElementById('toggle');
eye.addEventListener("click", toggle);

function toggle(){
    // Checks if current type is set to password
    const isPassword = passwordField.type === "password";

    //  Change type to 'text' if it's 'password', otherwise change it back to
    passwordField.type = isPassword ? 'text' : 'password';

    const eyeIsOpen = document.querySelector(".eye-open");
    const eyeIsClosed = document.querySelector(".eye-closed");

    eyeIsOpen.classList.toggle('hidden', isPassword);
    eyeIsClosed.classList.toggle('hidden', !isPassword);
}
