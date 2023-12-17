import {
  formElement,
  emailInput,
  pwInput,
  pwRepeatInput,
  emailError,
  pwError,
  pwVisibilityIcon,
  validateSignInEmail,
  validatePW,
  validatePWRepeat,
  togglePWVisibility,
} from './common.js';

// input focusout 에러 확인
function checkError(e) {
  switch (e.target) {
    case emailInput:
      validateSignInEmail();
      break;
    case pwInput:
      validatePW();
      break;
    case pwRepeatInput:
      validatePWRepeat();
      break;
    default:
      break;
  }
}

// submit 에러 확인
function checkSubmitError(e) {
  e.preventDefault();

  // 에러 메세지 초기화
  emailInput.classList.remove('error-border');
  pwInput.classList.remove('error-border');
  emailError.textContent = '';
  pwError.textContent = '';

  // 에러 발생 확인 및 처리
  if (emailInput.value === 'test@codeit.com' && pwInput.value === 'codeit101') {
    formElement.action = '/folder.html';
    formElement.method = 'GET';
    formElement.submit();
  } else {
    if (emailInput.value !== 'test@codeit.com') {
      emailInput.classList.add('error-border');
      emailError.textContent = '이메일을 확인해 주세요.';
    }
    if (pwInput.value !== 'codeit101') {
      pwInput.classList.add('error-border');
      pwError.textContent = '비밀번호를 확인해 주세요.';
    }
  }
}

emailInput.addEventListener('focusout', checkError);
pwInput.addEventListener('focusout', checkError);
formElement.addEventListener('submit', checkSubmitError);
pwVisibilityIcon.addEventListener('click', () => {
  togglePWVisibility(pwVisibilityIcon, pwInput);
});
