const testEmail = "test@codeit.com";
const testPassword = "sprint101";
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const pwInput = document.querySelector('#password');
const pwError = document.querySelector('#pw-error');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPw(password) {
  return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
}

function showEmail(message) {
  emailError.textContent = message;
  emailError.classList.add('show-error', 'error-message');
  emailInput.classList.add('error');
}

function hideEmail() {
  emailError.textContent = '';
  emailError.classList.remove('show-error', 'error-message');
  emailInput.classList.remove('error');
}

function showPassword(message) {
  pwError.textContent = message;
  pwError.classList.add('show-error', 'error-message');
  pwInput.classList.add('error');
}

function hidePassword() {
  pwError.textContent = '';
  pwError.classList.remove('show-error');
  pwInput.classList.remove('error');
}

const errManager = {showEmail, hideEmail, showPassword, hidePassword}

export {testEmail, testPassword, emailInput, emailError, pwInput, pwError, isValidEmail, isValidPw};
export {errManager};