import { validateEmail, validatePassword, togglePasswordVisibility } from './sign_module.js';

const fetchCheckEmail = async (email) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    email,
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://bootcamp-api.codeit.kr/api/check-email", requestOptions)

  return res;
}

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
  signupButton.addEventListener('click', async function (event) {
    event.preventDefault();
    validateEmail(emailInput, emailError);
    validatePassword(passwordInput, passwordError);

    const response = await fetchCheckEmail(emailInput.value)

    if (response.ok) {
      window.location.href = "/folder";
    } else {
      alert("이미 존재하는 이메일 입니다.");
    }

  });
});
