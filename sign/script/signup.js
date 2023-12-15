const formList = document.querySelector('form');
const form = document.querySelector('.form');

const emailInput = document.querySelector('.email-form__input');
const pwInput = document.querySelector('.password-form__input');
const pwRepeatInput = document.querySelector('.password-repeat-form__input');

const emailError = document.querySelector('#email-error');
const pwError = document.querySelector('#password-error');
const pwRepeatError = document.querySelector('#password-repeat-error');

// 유효성 검사 관련
const email_regex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

let emailValid = false;
let pwValid = false;
let pwRepeatValid = false;

// 이메일 Error 토글
function toggleEmailError() {
  if (emailInput.value === '') {
    // 이메일 input value 공백 시 실행
    emailInput.classList.add('error-border');
    emailError.textContent = '이메일를 입력해주세요.';
    emailValid = false;
  } else if (email_regex.test(emailInput.value) === false) {
    // 유효성 검사 false 시 실행
    emailInput.classList.add('error-border');
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    emailValid = false;
  } else if (emailInput.value === 'test@codeit.com') {
    // test@codeit.com 입력 시 실행
    emailInput.classList.add('error-border');
    emailError.textContent = '이미 사용 중인 이메일입니다.';
    emailValid = false;
  } else {
    // value가 유효한 경우 에러 표시 삭제
    emailError.textContent = '';
    emailInput.classList.remove('error-border');
    emailValid = true;
  }
}

// 비밀번호 Error 토글
function togglePWError() {
  if (pwInput.value === '') {
    // 비밀번호 input value 공백 시 실행
    pwInput.classList.add('error-border');
    pwError.textContent = '비밀번호를 입력해주세요.';
    pwValid = false;
  } else if (pwRegex.test(pwInput.value) === false) {
    // 유효성 검사 false 시 실행
    pwInput.classList.add('error-border');
    pwError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
    pwValid = false;
  } else {
    pwError.textContent = '';
    pwInput.classList.remove('error-border');
    pwValid = true;
  }
}

// 비밀번호 확인 Error 토글
function togglePWRepeatError() {
  if (pwRepeatInput.value === '') {
    // 비밀번호 확인 input value 공백 시 실행
    pwRepeatInput.classList.add('error-border');
    pwRepeatError.textContent = '비밀번호를 다시 한번 입력해주세요.';
    pwRepeatValid = false;
  } else if (pwRepeatInput.value !== pwInput.value) {
    // 유효성 검사 false 시 실행
    pwRepeatInput.classList.add('error-border');
    pwRepeatError.textContent = '비밀번호가 일치하지 않아요.';
    pwRepeatValid = false;
  } else {
    pwRepeatError.textContent = '';
    pwRepeatInput.classList.remove('error-border');
    pwRepeatValid = true;
  }
}

// submit 시 에러 체크
function checkError(e) {
  e.preventDefault();

  // 에러 메세지 초기화
  emailInput.classList.remove('error-border');
  pwInput.classList.remove('error-border');
  pwRepeatInput.classList.remove('error-border');
  emailError.textContent = '';
  pwError.textContent = '';
  pwRepeatError.textContent = '';

  // 에러 발생 확인 및 처리
  if (!emailValid) {
    emailInput.classList.add('error-border');
    emailError.textContent = '이메일을 확인해 주세요.';
    emailValid = false;
  }

  if (!pwValid) {
    pwInput.classList.add('error-border');
    pwError.textContent = '비밀번호를 확인해 주세요.';
    pwValid = false;
  }

  if (!pwRepeatValid) {
    pwRepeatInput.classList.add('error-border');
    pwRepeatError.textContent = '비밀번호를 다시 확인해 주세요.';
    pwRepeatValid = false;
  }

  if (emailValid && pwValid && pwRepeatValid) {
    location.replace('/folder.html');
    form.method = 'GET';
    formList.onSubmit();
  }
}

emailInput.addEventListener('focusout', toggleEmailError);
pwInput.addEventListener('focusout', togglePWError);
pwRepeatInput.addEventListener('focusout', togglePWRepeatError);
formList.addEventListener('submit', checkError);
