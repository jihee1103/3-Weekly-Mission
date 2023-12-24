import {
  formElement,
  emailInput,
  passwordInput,
  passwordRepeatInput,
  emailErrorText,
  passwordErrorText,
  passwordRepeatErrorText,
  passwordVisibilityIcon,
  passwordRepeatVisibilityIcon,
  validateEmail,
  validatePassword,
  validatePasswordRepeat,
  showError,
  removeError,
  handlePasswordVisibilityIconClick,
} from './common.js';

import { ERROR_MESSAGES } from './constants.js';
const getErrorMessage = (errCode) => ERROR_MESSAGES[errCode] ?? '알 수 없는 에러가 발생했습니다.';

// Email 유효성 검사
function handleSignUpEmailInputFocusout() {
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

function handleSignUpEmailInputKeydown(e) {
  if (e.key === 'Enter') {
    handleSignUpEmailInputFocusout();
  }
}

// Password 유효성 검사
function handleSignUpPasswordInputFocusout() {
  const input = this;
  const value = input.value;
  const errorText = document.getElementById('password-error');

  if (!value) {
    showError(input, errorText, getErrorMessage('PASSWORD_REQUIRED'));
    return false;
  }

  if (!validatePassword(value)) {
    showError(input, errorText, getErrorMessage('INVALID_PASSWORD'));
    return false;
  }

  removeError(input, errorText);
  return true;
}

function handleSignUpPasswordInputKeydown(e) {
  if (e.key === 'Enter') {
    handleSignUpPasswordInputFocusout();
  }
}

// Password-repeat 유효성 검사
function handlePasswordRepeatInputFocusout() {
  const input = this;
  const value = input.value;
  const errorText = document.getElementById('password-repeat-error');

  if (!value) {
    showError(input, errorText, getErrorMessage('PASSWORD_REPEAT_CHECK_FAILED'));
    return false;
  }

  if (!validatePasswordRepeat(value)) {
    showError(input, errorText, getErrorMessage('INVALID_PASSWORD_REPEAT'));
    return false;
  }

  removeError(input, errorText);
  return true;
}

function handleSignUpPasswordRepeatInputKeydown(e) {
  if (e.key === 'Enter') {
    handlePasswordRepeatInputFocusout();
  }
}

// 회원가입 비동기 처리
async function handleSignUpFormSubmit(e) {
  e.preventDefault();
  const userEmail = {
    email: emailInput.value,
  };
  const user = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    const checkEmailResponse = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userEmail),
    });

    if (checkEmailResponse.status === 409) {
      showError(emailInput, emailErrorText, getErrorMessage('DUPLICATE_EMAIL'));
      return;
    }

    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('accessToken', token);
      formElement.action = '/folder.html';
      formElement.submit();
      return;
    }

    showError(emailInput, emailErrorText, getErrorMessage('EMAIL_CHECK_FAILED'));
    showError(passwordInput, passwordErrorText, getErrorMessage('PASSWORD_CHECK_FAILED'));
    showError(
      passwordInput,
      passwordRepeatErrorText,
      getErrorMessage('PASSWORD_REPEAT_CHECK_FAILED'),
    );
  } catch (error) {
    console.error('회원가입 에러:', error.message);
    alert(getErrorMessage('SIGN_UP_FAILED'));
  }
}

emailInput.addEventListener('focusout', handleSignUpEmailInputFocusout);
emailInput.addEventListener('keydown', handleSignUpEmailInputKeydown);

passwordInput.addEventListener('focusout', handleSignUpPasswordInputFocusout);
passwordInput.addEventListener('keydown', handleSignUpPasswordInputKeydown);

passwordRepeatInput.addEventListener('focusout', handlePasswordRepeatInputFocusout);
passwordRepeatInput.addEventListener('keydown', handleSignUpPasswordRepeatInputKeydown);

formElement.addEventListener('submit', handleSignUpFormSubmit);

passwordVisibilityIcon.addEventListener('click', handlePasswordVisibilityIconClick);
passwordRepeatVisibilityIcon.addEventListener('click', handlePasswordVisibilityIconClick);
