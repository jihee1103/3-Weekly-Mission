import {
  form,
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

// input에 focusout 이벤트 발생 시 에러 확인
function checkError(e) {
  switch (e.target) {
    // 이메일 유효성 검사
    case emailInput:
      validateSignInEmail();
      break;

    // 비밀번호 유효성 검사
    case pwInput:
      validatePW();
      break;

    // 비밀번호 확인 유효성 검사
    case pwRepeatInput:
      validatePWRepeat();
      break;

    default:
      break;
  }
}

// submit 시 에러 체크
function checkSubmitError(e) {
  e.preventDefault();

  // 에러 메세지 초기화
  emailInput.classList.remove('error-border');
  pwInput.classList.remove('error-border');
  emailError.textContent = '';
  pwError.textContent = '';

  // 에러 발생 확인 및 처리
  if (emailInput.value === 'test@codeit.com' && pwInput.value === 'codeit101') {
    form.action = '/folder.html';
    form.method = 'GET';
    form.submit();
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
form.addEventListener('submit', checkSubmitError);
pwVisibilityIcon.addEventListener('click', togglePWVisibility);
