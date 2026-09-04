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

passwordField.addEventListener("input", function(){
    const passwordValue = passwordField.value;
    const currentLength = passwordValue.length;
    const hasNumber = /\d/.test(passwordValue); //checks for numbers in value
    const hasUpperCase = /[A-Z]/.test(passwordValue); 
    const hasLowerCase = /[a-z]/.test(passwordValue); 
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwordValue);

    const isLongEnough = currentLength >= 8;

    //Updates the rule checklist dynamically
    document.getElementById("noOfChars").style.color = isLongEnough ? "#10B981" : "#000000";
    document.getElementById("numbers").style.color = hasNumber ? "#10B981" : "#000000";
    document.getElementById("upperCase").style.color = hasUpperCase ? "#10B981" : "#000000";
    document.getElementById("lowerCase").style.color = hasLowerCase ? "#10B981" : "#000000";
    document.getElementById("specialChar").style.color = hasSpecial ? "#10B981" : "#000000";

    const finalStrength = document.getElementById("finalStrength");
    if (isLongEnough && hasNumber && hasUpperCase && hasLowerCase && hasSpecial){ 
        finalStrength.innerText = " Very Strong password";
        finalStrength.style.color = "#185DF1";
    } 
    else if (currentLength >= 6 && hasNumber && hasUpperCase && hasLowerCase){ 
        finalStrength.innerText = "Strong password";
        finalStrength.style.color = "#20f907";
    } 
    else if (currentLength >= 6){
        finalStrength.innerText = "Good password";
        finalStrength.style.color = "#F59E0B";
    } 
    else {
        finalStrength.innerText = "Weak password";
        finalStrength.style.color = "#EF4443";
    }
})

