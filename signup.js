import { validateEmail, validatePassword, togglePasswordVisibility } from './sign_module.js';

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const confirmPasswordError = document.getElementById('confirm-password-error');

  const eyeButtons = document.querySelectorAll('.eye-button');

  eyeButtons.forEach(function (button) {
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

  confirmPasswordInput.addEventListener('focusout', function () {
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = '비밀번호가 일치하지 않습니다.';
      confirmPasswordError.style.display = 'block';
      confirmPasswordInput.classList.add('input-error');
      return;
    }
    confirmPasswordError.style.display = 'none';
    confirmPasswordInput.classList.remove('input-error');
  });

  const signupButton = document.querySelector('.cta');
  signupButton.addEventListener('click', function (event) {
    event.preventDefault();
    validateEmail(emailInput, emailError);
    validatePassword(passwordInput, passwordError);
  });
});
