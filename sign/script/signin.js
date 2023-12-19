import {
  formElement,
  emailInput,
  passwordInput,
  emailErrorText,
  passwordErrorText,
  passwordVisibilityIcon,
  validateSignInEmail,
  validatePassword,
  togglePasswordVisibility,
} from './common.js';

// submit 에러 확인
function checkSubmitError(e) {
  e.preventDefault();

  // 에러 메세지 초기화
  emailInput.classList.remove('error-border');
  passwordInput.classList.remove('error-border');
  emailErrorText.textContent = '';
  passwordErrorText.textContent = '';

  // 에러 발생 확인 및 처리
  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    formElement.submit();
  } else {
    if (emailInput.value !== 'test@codeit.com') {
      emailInput.classList.add('error-border');
      emailErrorText.textContent = '이메일을 확인해 주세요.';
    }
    if (passwordInput.value !== 'codeit101') {
      passwordInput.classList.add('error-border');
      passwordErrorText.textContent = '비밀번호를 확인해 주세요.';
    }
  }
}

emailInput.addEventListener('focusout', validateSignInEmail);
passwordInput.addEventListener('focusout', validatePassword);
formElement.addEventListener('submit', checkSubmitError);
passwordVisibilityIcon.addEventListener('click', togglePasswordVisibility);
