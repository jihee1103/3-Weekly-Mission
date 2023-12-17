const testEmail = "test@codeit.com";
const testPassword = "codeit101";

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

function emailErrorMessage() {
  const inputValue = emailInput.value;
  if (inputValue === '') {
    showEmailError('이메일을 입력해주세요.');
  } else if (inputValue === testEmail) {
    showEmailError('이미 사용 중인 이메일입니다.');
  } else if (!isValidEmail(inputValue)) {
    showEmailError('올바른 이메일 주소가 아닙니다.');
  } else {
    hideError();
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showEmailError(message) {
  emailError.textContent = message;
  emailError.classList.add('show-error', 'error-message');
  emailInput.classList.add('error');
}

function hideError() {
  emailError.textContent = '';
  emailError.classList.remove('show-error', 'error-message');
  emailInput.classList.remove('error');
}

emailInput.addEventListener('focusout', emailErrorMessage);