import { validateEmail, validatePassword, togglePasswordVisibility } from './sign_module.js';

const fetchSignIn = async (email, password) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    email,
    password,
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", requestOptions)

  return res;
}

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
  loginButton.addEventListener('click', async function (event) {
    event.preventDefault();
    validateEmail(emailInput, emailError);
    validatePassword(passwordInput, passwordError);

    const response = await fetchSignIn(emailInput.value, passwordInput.value);

    if (response.ok) {
      window.location.href = "/folder";
    } else {
      alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  });
});