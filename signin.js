import { validateEmail, validatePassword, togglePasswordVisibility } from './sign_module.js';

const CORRECT_EMAIL = 'test@codeit.com';
const CORRECT_PASSWORD = 'codeit101';

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  const eyeButtons = document.getElementsByClassName('eye-button');

  Array.from(eyeButtons).forEach(function (button) {
    button.addEventListener('click', function () {
      togglePasswordVisibility(this);
    });
  });

  emailInput.addEventListener('blur', function () {
    validateEmail(emailInput, emailError);
  });

  passwordInput.addEventListener('blur', function () {
    validatePassword(passwordInput, passwordError);
  });

  const loginButton = document.querySelector('.cta');
  loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    validateEmail(emailInput, emailError);
    validatePassword(passwordInput, passwordError);

    if (emailInput.value === CORRECT_EMAIL && passwordInput.value === CORRECT_PASSWORD) {
      window.location.href = '/folder';
    }
  });
});