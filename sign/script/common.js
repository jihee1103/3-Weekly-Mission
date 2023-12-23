import { EMAIL_REGEX, PASSWORD_REGEX } from './constants.js';

const formElement = document.getElementById('form-list');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const passwordRepeatInput = document.getElementById('password-repeat-input');
const emailErrorText = document.getElementById('email-error');
const passwordErrorText = document.getElementById('password-error');
const passwordRepeatErrorText = document.getElementById('password-repeat-error');
const passwordVisibilityIcon = document.getElementById('password-visibility-icon');
const passwordRepeatVisibilityIcon = document.getElementById('password-repeat-visibility-icon');

// 각종 검증
function validateEmail(value) {
  return EMAIL_REGEX.test(value);
}

function validatePassword(value) {
  return PASSWORD_REGEX.test(value) && value.length >= 8;
}

function validatePasswordRepeat(value) {
  return value === passwordInput.value;
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
};
