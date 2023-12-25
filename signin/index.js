import {
  emailInput,
  passwordInput,
  loginButton,
  eyeIcon,
  passwordEye,
  showEmailError,
  showPasswordError,
  validateEmail,
  validatePassword,
  MOCK_EMAIL,
  MOCK_PASSWORD,
} from '../javascript/common.js';

import { signIn } from '../javascript/api.js';

const signinForm = document.getElementById('signin-form');

function showEmailInputFocusout() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    showEmailError('이메일을 입력해주세요.');
    return;
  }

  if (!validateEmail(emailValue)) {
    showEmailError('올바른 이메일 주소가 아닙니다.');
    return;
  }

  showEmailError('');
}

function showPasswordInputFocusout() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    showPasswordError('비밀번호를 입력해주세요.');
    return;
  }

  if (!validatePassword(passwordValue)) {
    showPasswordError('비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
    return;
  }

  showPasswordError('');
}

async function sendSignInRequest() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  try {
    const response = await signIn(emailValue, passwordValue);

    if (response.ok) {
      window.location.href = '../etc/folder.html';
      return;
    }

    if (response.status === 400) {
      showEmailError('이메일을 확인해주세요.');
      showPasswordError('비밀번호를 확인해주세요.');
    }
    throw new Error('로그인 요청 실패');
  } catch (error) {
    console.error('Error:', error);
    throw new Error('로그인 요청 실패');
  }
}

function showFormSubmit(event) {
  event.preventDefault();
  sendSignInRequest();
}

function togglePasswordVisibility() {
  if (passwordEye.type === 'password') {
    passwordEye.type = 'text';
    eyeIcon.src = '../image/eye-on.png';
  } else {
    passwordEye.type = 'password';
    eyeIcon.src = '../image/eye-off.png';
  }
}

emailInput.addEventListener('focusout', showEmailInputFocusout);
passwordInput.addEventListener('focusout', showPasswordInputFocusout);
loginButton.addEventListener('click', showFormSubmit);
eyeIcon.addEventListener('click', togglePasswordVisibility);
