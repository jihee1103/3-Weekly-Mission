const emailForm = document.querySelector('.email-form');
const pwForm = document.querySelector('.password-form');
const pwRepeatForm = document.querySelector('.password-repeat-form');
const emailInput = document.querySelector('.email-form__input');
const pwInput = document.querySelector('.password-form__input');
const pwRepeatInput = document.querySelector('.password-repeat-form__input');

const email_regex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

// 이메일 Error 토글
function toggleEmailError() {
  const errorText = emailForm.querySelector('.error-text');
  const errorMessage = document.createElement('p');

  if (!errorText) {
    // 에러 메세지가 없을 경우에만 생성
    emailInput.classList.add('error-border');
    errorMessage.classList.add('error-text');
    emailForm.append(errorMessage);
  }

  if (emailInput.value === '') {
    // 공백 여부 확인
    emailForm.lastChild.textContent = '이메일를 입력해주세요.';
  } else if (email_regex.test(emailInput.value) === false) {
    // 유효성 검사
    emailForm.lastChild.textContent = '올바른 이메일 주소가 아닙니다.';
  } else {
    // value가 유효한 경우 에러 표시 삭제
    emailForm.lastChild.remove();
    emailInput.classList.remove('error-border');
  }
}

// 비밀번호 Error 토글
function togglePWError() {
  const errorText = pwForm.querySelector('.error-text');
  const errorMessage = document.createElement('p');

  if (!errorText) {
    pwInput.classList.add('error-border');
    errorMessage.classList.add('error-text');
    pwForm.append(errorMessage);
  }

  if (pwInput.value === '') {
    pwForm.lastChild.textContent = '비밀번호를 입력해주세요.';
  } else if (pwRegex.test(pwInput.value) === false) {
    pwForm.lastChild.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
  } else {
    pwForm.lastChild.remove();
    pwInput.classList.remove('error-border');
  }
}

// 비밀번호 확인 Error 토글
function togglePWRepeatError() {
  const errorText = pwRepeatForm.querySelector('.error-text');
  const errorMessage = document.createElement('p');

  if (!errorText) {
    pwRepeatInput.classList.add('error-border');
    errorMessage.classList.add('error-text');
    pwRepeatForm.append(errorMessage);
  }

  if (pwRepeatInput.value === '') {
    pwRepeatForm.lastChild.textContent = '비밀번호를 다시 한번 입력해주세요.';
  } else if (pwRepeatInput.value !== pwInput.value) {
    pwRepeatForm.lastChild.textContent = '비밀번호가 일치하지 않아요.';
  } else {
    pwRepeatForm.lastChild.remove();
    pwRepeatInput.classList.remove('error-border');
  }
}

emailInput.addEventListener('focusout', toggleEmailError);
pwInput.addEventListener('focusout', togglePWError);
pwRepeatInput.addEventListener('focusout', togglePWRepeatError);
