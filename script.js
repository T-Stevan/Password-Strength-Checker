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

// const noOfChars = document.getElementById("noOfChars");
// const specialChar = document.getElementById("specialChar");
// const upperCase = document.getElementById("upperCase");
// const lowerCase = document.getElementById("lowerCase");
// const numbers = document.getElementById("numbers");


passwordField.addEventListener("input", function(){
    const passwordValue = passwordField.value;
    const currentLength = passwordValue.length;
    const hasNumber = /\d/.test(passwordValue); //checks for numbers in value

    const finalStength = document.getElementById("finalStrength");
    if (currentLength >= 8 && hasNumber){ // still modifying the conditions
        finalStength.innerText = "Strong password";
        finalStength.style.color = "#20f907";
    } 
    else {
        finalStength.innerText = "Weak password";
        finalStength.style.color = "yellow";
    }
})

