const contactForm = document.querySelector("#contactForm");

const yourName = document.querySelector("#yourName");
const yourNameError = document.querySelector("#yourNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateContactForm(event) {
    event.preventDefault();

    if (checkLength(yourName.value, 4) === true) {
        yourNameError.style.display = "none"
    } else {
        yourNameError.style.display = "block"
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none"
    } else {
        emailError.style.display = "block"
    }

    if (checkLength(subject.value, 14) === true) {
        subjectError.style.display = "none"
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(message.value, 24) === true) {
        messageError.style.display = "none"
    } else {
        messageError.style.display = "block"
    };
}

contactForm.addEventListener("submit", validateContactForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}