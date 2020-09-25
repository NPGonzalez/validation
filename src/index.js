const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');


const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

const showSuccess = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Ingrese usuario');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Ingrese mail');
    } else if (isValidemail(email.value)) {
        showError(email, 'El email no es válido')
    } else {
        showSuccess(email);
    }

    if (password1.value === '') {
        showError(password1, 'Ingrese contraseña');
    } else {
        showSuccess(password1);
    }

    if (password2.value === '') {
        showError(password2, 'Ingrese contraseña');
    } else {
        showSuccess(password2);
    }

    isValidemail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };





});