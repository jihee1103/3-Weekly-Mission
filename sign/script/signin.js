import {
  formElement,
  emailInput,
  passwordInput,
  passwordVisibilityIcon,
  validateEmail,
  verifyRegisteredEmail,
  verifyRegisteredPassword,
  showError,
  removeError,
  handlePasswordVisibilityIconClick,
} from './common.js';

import { handleLoginAsync } from './api.js';

// Email 유효성 검사
function handleSignInEmailInputFocusout() {
  const input = this;
  const value = input.value;
  const errorText = document.getElementById('email-error');

  if (!value) {
    showError(input, errorText, '이메일을 입력해주세요.');
    return false;
  }

  if (!validateEmail(value)) {
    showError(input, errorText, '올바른 이메일 주소가 아닙니다.');
    return false;
  }

  removeError(input, errorText);
  return true;
}

function handleSignInEmailInputKeydown(e) {
  if (e.key === 'Enter') {
    handleSignInEmailInputFocusout();
  }
}

// Password 유효성 검사
function handleSignInPasswordInputFocusout() {
  const input = this;
  const value = input.value;
  const errorText = document.getElementById('password-error');

  if (!value) {
    showError(input, errorText, '비밀번호를 입력해주세요.');
    return false;
  }

  removeError(input, errorText);
}

function handleSignInPasswordInputKeydown(e) {
  if (e.key === 'Enter') {
    handleSignInPasswordInputFocusout();
  }
}

// submit 에러 확인
function handleSignInFormSubmit(e) {
  e.preventDefault();

  const isEmailValid = verifyRegisteredEmail(emailInput.value);
  const isPasswordValid = verifyRegisteredPassword(passwordInput.value);

  if (!isEmailValid) {
    const emailErrorText = document.getElementById('email-error');
    showError(emailInput, emailErrorText, '이메일을 확인해주세요.');
    return;
  }

  if (!isPasswordValid) {
    const passwordErrorText = document.getElementById('password-error');
    showError(passwordInput, passwordErrorText, '비밀번호를 확인해주세요.');
    return;
  }

  handleLoginAsync(emailInput.value, passwordInput.value);
}

emailInput.addEventListener('focusout', handleSignInEmailInputFocusout);
emailInput.addEventListener('keydown', handleSignInEmailInputKeydown);
passwordInput.addEventListener('focusout', handleSignInPasswordInputFocusout);
passwordInput.addEventListener('keydown', handleSignInPasswordInputKeydown);
formElement.addEventListener('submit', handleSignInFormSubmit);
passwordVisibilityIcon.addEventListener('click', handlePasswordVisibilityIconClick);
