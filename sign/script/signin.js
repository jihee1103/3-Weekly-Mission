import {
  formElement,
  emailInput,
  passwordInput,
  emailErrorText,
  passwordErrorText,
  passwordVisibilityIcon,
  validateEmail,
  showError,
  removeError,
  handlePasswordVisibilityIconClick,
} from './common.js';

import { ERROR_MESSAGES } from './constants.js';
const getErrorMessage = (errCode) => ERROR_MESSAGES[errCode] ?? '알 수 없는 에러가 발생했습니다.';

// Email 유효성 검사
function handleSignInEmailInputFocusout() {
  const input = this;
  const value = input.value;
  const errorText = document.getElementById('email-error');

  if (!value) {
    showError(input, errorText, getErrorMessage('EMAIL_REQUIRED'));
    return false;
  }

  if (!validateEmail(value)) {
    showError(input, errorText, getErrorMessage('INVALID_EMAIL'));
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
    showError(input, errorText, getErrorMessage('PASSWORD_REQUIRED'));
    return false;
  }

  removeError(input, errorText);
}

function handleSignInPasswordInputKeydown(e) {
  if (e.key === 'Enter') {
    handleSignInPasswordInputFocusout();
  }
}

// submit 시 비동기 처리
async function handleSignInFormSubmit(e) {
  e.preventDefault();
  const user = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      formElement.action = '/folder.html';
      formElement.submit();
      return;
    }
    showError(emailInput, emailErrorText, getErrorMessage('EMAIL_CHECK_FAILED'));
    showError(passwordInput, passwordErrorText, getErrorMessage('PASSWORD_CHECK_FAILED'));
  } catch (error) {
    console.error('로그인 에러:', error.message);
    alert(getErrorMessage('SIGN_IN_FAILED'));
  }
}

emailInput.addEventListener('focusout', handleSignInEmailInputFocusout);
emailInput.addEventListener('keydown', handleSignInEmailInputKeydown);

passwordInput.addEventListener('focusout', handleSignInPasswordInputFocusout);
passwordInput.addEventListener('keydown', handleSignInPasswordInputKeydown);

formElement.addEventListener('submit', handleSignInFormSubmit);

passwordVisibilityIcon.addEventListener('click', handlePasswordVisibilityIconClick);
