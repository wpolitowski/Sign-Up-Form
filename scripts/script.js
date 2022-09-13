const email = document.querySelector('input[type="email"]');

email.addEventListener('change', () => {
    //first email validation is performed after user leaves the input (lazy behaviour)
    validateEmail();
    email.addEventListener('input', () => {
        //if user needs to correct the email address, validation is performed after each typed character and error is thrown until correct email is typed (aggressive behaviour)
        validateEmail();
    });
});

function validateEmail() {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(regex) == null) {
            email.classList.add("invalid");
        } else email.classList.remove("invalid");
}