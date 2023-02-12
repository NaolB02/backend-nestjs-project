const form = document.querySelector('.signup__box__form');
const userName = document.querySelector('#username');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    // const errorDisplay = document.querySelector('.signup__box__form__row__error');
    const errorDisplay = element.nextElementSibling;
    const inputControl = element.parentElement;
    errorDisplay.classList.remove("none")
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const errorDisplay = element.nextElementSibling;
    const inputControl = element.parentElement;
    errorDisplay.classList.add("none")
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if(userNameValue === '') {
        setError(userName, 'userName is required');
    } else {
        setSuccess(userName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(password1Value === '') {
        setError(password1, 'Password is required');
    } else if (password1Value.length < 8 ) {
        setError(password1, 'Password must be at least 8 character.')
    } else {
        setSuccess(password1);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== password2Value) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
