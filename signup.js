import { validateEmail, validatePassword, togglePasswordVisibility } from './sign_module.js';

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const confirmPasswordInput = document.querySelector('#confirm-password');
  const emailError = document.querySelector('#email-error');
  const passwordError = document.querySelector('#password-error');
  const confirmPasswordError = document.querySelector('#confirm-password-error');
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

  confirmPasswordInput.addEventListener('focusout', function () {
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = '비밀번호가 일치하지 않습니다.';
      confirmPasswordError.style.display = 'block';
      confirmPasswordInput.classList.add('input-error');
    } else {
      confirmPasswordError.style.display = 'none';
      confirmPasswordInput.classList.remove('input-error');
    }
  });

  const signupButton = document.querySelector('.cta');
  signupButton.addEventListener('click', function (event) {
    event.preventDefault();
    validateEmail(emailInput, emailError);
    validatePassword(passwordInput, passwordError);
  });
});
