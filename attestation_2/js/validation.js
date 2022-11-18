'use strict';

const buttonSubmit = document.getElementById('buttonSubmit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const emailError = document.getElementById('errorEmail');
const passwordError = document.getElementById('errorPassword');
const passwordConfirmError = document.getElementById('errorPasswordConfirm');

email.addEventListener('input', function (event) {
  email.style.borderColor = '#787878';
  emailError.textContent = '';
});

password.addEventListener('input', function (event) {
  password.style.borderColor = '#787878';
  passwordError.textContent = '';
});

passwordConfirm.addEventListener('input', function (event) {
  passwordConfirm.style.borderColor = '#787878';
  passwordConfirmError.textContent = '';
});

function validateEmail(emailstring) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailstring).toLowerCase());
}

buttonSubmit.addEventListener('click', (event) => {
  let check = true;
  if (validateEmail(email.value)) {
    emailError.textContent = '';
  } else {
    if (email.value.trim() === '') {
      emailError.textContent = 'Поле обязательно для заполнения';
    } else {
      emailError.textContent = 'Email введён некорректно';
    }
    check = false;
    email.style.borderColor = '#ee2424';
  }

  if (password.value.length < 8) {
    passwordError.textContent = 'Пароль должен содержать не менее 8 символов';
    check = false;
    password.style.borderColor = '#ee2424';
  }

  if (
    passwordConfirm.value.trim() === '' ||
    password.value !== passwordConfirm.value
  ) {
    passwordConfirmError.textContent = 'Пароли не совпадают';
    check = false;
    passwordConfirm.style.borderColor = '#ee2424';
  }

  if (check) {
    const formData = {};
    formData.email = email.value;
    formData.password = password.value;
    formData.passwordConfirm = passwordConfirm.value;
    formData.gender = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    formData.about = document.getElementById('about').value;
    formData.agreement = document.getElementById('agree').checked;

    console.log(formData);
  }

  event.preventDefault();
});
