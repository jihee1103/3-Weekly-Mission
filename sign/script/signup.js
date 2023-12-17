import {
  form,
  emailInput,
  pwInput,
  pwRepeatInput,
  emailError,
  pwError,
  pwRepeatError,
  pwVisibilityIcon,
  pwRepeatVisibilityIcon,
  emailValid,
  pwValid,
  pwRepeatValid,
  validateSignUpEmail,
  validatePW,
  validatePWRepeat,
  togglePWVisibility,
  togglePWRepeatVisibility,
} from './common.js';

// input focusout 에러 확인
function checkError(e) {
  switch (e.target) {
    case emailInput:
      validateSignUpEmail();
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
  pwRepeatInput.classList.remove('error-border');
  emailError.textContent = '';
  pwError.textContent = '';
  pwRepeatError.textContent = '';

  // 에러 발생 확인 및 처리
  if (emailValid && pwValid && pwRepeatValid) {
    form.action = '/folder.html';
    form.method = 'GET';
    form.submit();
  } else {
    if (!emailValid) {
      emailInput.classList.add('error-border');
      emailError.textContent = '이메일을 확인해 주세요.';
    }
    if (!pwValid) {
      pwInput.classList.add('error-border');
      pwError.textContent = '비밀번호를 확인해 주세요.';
    }
    if (!pwRepeatValid) {
      pwRepeatInput.classList.add('error-border');
      pwRepeatError.textContent = '비밀번호를 다시 확인해 주세요.';
    }
  }
}

emailInput.addEventListener('focusout', checkError);
pwInput.addEventListener('focusout', checkError);
pwRepeatInput.addEventListener('focusout', checkError);
form.addEventListener('submit', checkSubmitError);
pwVisibilityIcon.addEventListener('click', togglePWVisibility);
pwRepeatVisibilityIcon.addEventListener('click', togglePWRepeatVisibility);
