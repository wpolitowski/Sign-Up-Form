const regexInputs = document.querySelectorAll('input[type="password"], input[type="email"]');

regexInputs.forEach(input => input.addEventListener('change', () => {
    //first email validation is performed after user leaves the input (lazy behaviour)
    validateInput(input);
    input.addEventListener('input', () => {
        //if user needs to correct the email address, validation is performed after each typed character and error is thrown until correct email is typed (aggressive behaviour)
        validateInput(input);
    });
}));

function validateInput(input) {
    if (input.type === 'email') {
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.value.match(regex) == null) {
            input.classList.add("invalid");
        } else input.classList.remove("invalid");
    } else if (input.type === 'password') {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()_+\-=\[\]{};':\x22\\|,.\x3c>\/?~])[A-Za-z\d`!@#$%^&*()_+\-=\[\]{};':\x22\\|,.\x3c>\/?~]{8,}$/;
        if (input.value.match(regex) == null) {
            input.classList.add("invalid");
        } else input.classList.remove("invalid");

        // const wrongPwdSpan = document.querySelector('input#pwd-confirm + span');
        if (pwdInputs[0].value !== pwdInputs[1].value && 
            (pwdInputs[0].value || pwdInputs[0].classList.value.includes('invalid')) &&
            (pwdInputs[1].value || pwdInputs[1].classList.value.includes('different')) ) {
            pwdInputs[1].classList.add("different");
        } else pwdInputs[1].classList.remove("different");
    }    
}

const pwdInputs = Array.from(regexInputs).filter(input => input.type === 'password');

