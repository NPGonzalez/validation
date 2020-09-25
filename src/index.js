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

const showsucces = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    // const small = formControl.querySelector('small');
    // small.innerText = message;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Ingrese usuario');
    } else {
        showSuccess(username);
    }
});