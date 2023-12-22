import { validateEmail, validatePassword, togglePasswordVisibility } from './sign_module.js';

const CORRECT_EMAIL = 'test@codeit.com';
const CORRECT_PASSWORD = 'codeit101';

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const emailError = document.querySelector('#email-error');
  const passwordError = document.querySelector('#password-error');
  const eyeButtons = document.querySelectorAll('.eye-button');

  eyeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      togglePasswordVisibility(this);
    });
  });

  emailInput.addEventListener('focusout', function () {
    validateEmail(emailInput, emailError);
  });

  passwordInput.addEventListener('focusout', function () {
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