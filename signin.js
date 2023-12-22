import { validateEmail, validatePassword, togglePasswordVisibility } from './sign_module.js';

document.addEventListener('DOMContentLoaded', function () {
  var emailInput = document.querySelector('#email');
  var passwordInput = document.querySelector('#password');
  var emailError = document.querySelector('#email-error');
  var passwordError = document.querySelector('#password-error');
  var eyeButtons = document.querySelectorAll('.eye-button');

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

  var loginButton = document.querySelector('.cta');
  loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    validateEmail(emailInput, emailError);
    validatePassword(passwordInput, passwordError);


    var correctEmail = 'test@codeit.com';
    var correctPassword = 'codeit101';

    if (emailInput.value === correctEmail && passwordInput.value === correctPassword) {
      window.location.href = '/folder';
    }
  });
});