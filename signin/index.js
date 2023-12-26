import { email, password, loginButton, eyeIcon } from '../javascript/common.js';

import {
  signIn,
  storeAccessToken,
  checkAndRedirect,
} from '../javascript/api.js';

const signinForm = document.getElementById('signin-form');

function showEmailInputFocusout() {
  const emailValue = email.input.value;

  if (!emailValue) {
    email.showError('이메일을 입력해주세요.');
    return;
  }

  if (!email.validate(emailValue)) {
    email.showError('올바른 이메일 주소가 아닙니다.');
    return;
  }

  email.showError('');
}

function showPasswordInputFocusout() {
  const passwordValue = password.input.value;

  if (!passwordValue) {
    password.showError('비밀번호를 입력해주세요.');
    return;
  }

  if (!password.validate(passwordValue)) {
    password.showError('비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
    return;
  }

  password.showError('');
}

async function sendSignInRequest() {
  const emailValue = email.input.value;
  const passwordValue = password.input.value;
  const response = await signIn(emailValue, passwordValue);

  if (response.ok) {
    const data = await response.json();
    const accessToken = data.data.accessToken;
    storeAccessToken(accessToken);
    checkAndRedirect();
  } else if (response.status === 400) {
    email.showError('이메일을 확인해주세요.');
    password.showError('비밀번호를 확인해주세요.');
  }
}

function showFormSubmit(event) {
  event.preventDefault();
  sendSignInRequest();
}

function togglePasswordVisibility() {
  if (password.eye.type === 'password') {
    password.eye.type = 'text';
    eyeIcon.src = '../image/eye-on.png';
  } else {
    password.eye.type = 'password';
    eyeIcon.src = '../image/eye-off.png';
  }
}

checkAndRedirect();

email.input.addEventListener('focusout', showEmailInputFocusout);
password.input.addEventListener('focusout', showPasswordInputFocusout);
loginButton.addEventListener('click', showFormSubmit);
eyeIcon.addEventListener('click', togglePasswordVisibility);
