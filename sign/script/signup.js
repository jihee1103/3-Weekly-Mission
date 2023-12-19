import {
  formElement,
  emailInput,
  passwordInput,
  passwordRepeatInput,
  passwordVisibilityIcon,
  passwordRepeatVisibilityIcon,
  validateEmail,
  validatePassword,
  validatePasswordRepeat,
  verifyRegisteredEmail,
  showError,
  removeError,
  handlePasswordVisibilityIconClick,
} from './common.js';

// Email 유효성 검사
function handleSignUpEmailInputFocusout() {
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

  if (verifyRegisteredEmail(value)) {
    showError(input, errorText, '이미 사용 중인 이메일입니다.');
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
    showError(input, errorText, '비밀번호를 입력해주세요.');
    return false;
  }

  if (!validatePassword(value)) {
    showError(input, errorText, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
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
    showError(input, errorText, '비밀번호를 다시 한번 입력해주세요.');
    return false;
  }

  if (!validatePasswordRepeat(value)) {
    showError(input, errorText, '비밀번호가 일치하지 않아요.');
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

// submit 에러 확인
function handleSignUpFormSubmit(e) {
  e.preventDefault();

  const isEmailValid = handleSignUpEmailInputFocusout.call(emailInput);
  const isPasswordValid = handleSignUpPasswordInputFocusout.call(passwordInput);
  const isPasswordRepeatValid = handlePasswordRepeatInputFocusout.call(passwordRepeatInput);

  if (!isEmailValid) {
    const errorText = document.getElementById('email-error');
    showError(emailInput, errorText, '이메일을 확인해주세요.');
    return;
  }

  if (!isPasswordValid) {
    const errorText = document.getElementById('password-error');
    showError(passwordInput, errorText, '비밀번호를 확인해주세요.');
    return;
  }

  if (!isPasswordRepeatValid) {
    const errorText = document.getElementById('password-repeat-error');
    showError(passwordRepeatInput, errorText, '비밀번호를 다시 한번 확인해주세요.');
    return;
  }

  formElement.submit();
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
