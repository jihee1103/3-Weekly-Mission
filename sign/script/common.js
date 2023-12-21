import { MOCK_EMAIL, MOCK_PASSWORD } from './magic-values.js';

const formElement = document.getElementById('form-list');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const passwordRepeatInput = document.getElementById('password-repeat-input');
const passwordVisibilityIcon = document.getElementById('password-visibility-icon');
const passwordRepeatVisibilityIcon = document.getElementById('password-repeat-visibility-icon');

// 각종 검증
function validateEmail(value) {
  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return emailRegex.test(value);
}

function validatePassword(value) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(value) && value.length >= 8;
}

function validatePasswordRepeat(value) {
  return value === passwordInput.value;
}

function verifyRegisteredEmail(value) {
  return value === MOCK_EMAIL;
}

function verifyRegisteredPassword(value) {
  return value === MOCK_PASSWORD;
}

function showError(input, errorText, errorMessage) {
  input.classList.add('error-border');
  errorText.textContent = errorMessage;
}

function removeError(input, errorText) {
  input.classList.remove('error-border');
  errorText.textContent = '';
}

// 눈 모양 아이콘 토글
function handlePasswordVisibilityIconClick() {
  const input = this.parentElement.querySelector('.input');
  const icon = this.parentElement.querySelector('.visibility-icon');

  input.type = input.type === 'password' ? 'text' : 'password';
  icon.src = input.type === 'password' ? 'icons/eye-off.svg' : 'icons/eye-on.svg';
}

export {
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
  verifyRegisteredPassword,
  showError,
  removeError,
  handlePasswordVisibilityIconClick,
};
