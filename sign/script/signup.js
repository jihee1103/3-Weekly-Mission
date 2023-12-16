const form = document.querySelector('form');

const emailInput = document.querySelector('.email-form__input');
const pwInput = document.querySelector('.password-form__input');
const pwRepeatInput = document.querySelector('.password-repeat-form__input');

const emailError = document.querySelector('#email-error');
const pwError = document.querySelector('#password-error');
const pwRepeatError = document.querySelector('#password-repeat-error');

const pwVisibilityIcon = document.querySelector('#password-visibility-icon');
const pwRepeatVisibilityIcon = document.querySelector('#password-repeat-visibility-icon');

// 유효성 검사 관련
const email_regex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

let emailValid = false;
let pwValid = false;
let pwRepeatValid = false;

// input에 focusout 이벤트 발생 시 에러 확인
function checkError(e) {
  switch (e.target) {
    // 이메일 유효성 검사
    case emailInput:
      if (emailInput.value === '') {
        // 이메일 input 공백 시
        emailInput.classList.add('error-border');
        emailError.textContent = '이메일를 입력해주세요.';
        emailValid = false;
      } else if (email_regex.test(emailInput.value) === false) {
        // 이메일 유형이 아닐 시
        emailInput.classList.add('error-border');
        emailError.textContent = '올바른 이메일 주소가 아닙니다.';
        emailValid = false;
      } else if (emailInput.value === 'test@codeit.com') {
        // test@codeit.com 입력 시
        emailInput.classList.add('error-border');
        emailError.textContent = '이미 사용 중인 이메일입니다.';
        emailValid = false;
      } else {
        // 유효성 검사 통과
        emailError.textContent = '';
        emailInput.classList.remove('error-border');
        emailValid = true;
      }
      break;

    // 비밀번호 유효성 검사
    case pwInput:
      if (pwInput.value === '') {
        // 비밀번호 input 공백 시
        pwInput.classList.add('error-border');
        pwError.textContent = '비밀번호를 입력해주세요.';
        pwValid = false;
      } else if (pwRegex.test(pwInput.value) === false && pwInput.value.length < 8) {
        // 비밀번호 유형이 아닐 시
        pwInput.classList.add('error-border');
        pwError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
        pwValid = false;
      } else {
        // 유효성 검사 통과
        pwError.textContent = '';
        pwInput.classList.remove('error-border');
        pwValid = true;
      }
      break;

    // 비밀번호 확인 유효성 검사
    case pwRepeatInput:
      if (pwRepeatInput.value === '') {
        // 비밀번호 확인 input 공백 시 실행
        pwRepeatInput.classList.add('error-border');
        pwRepeatError.textContent = '비밀번호를 다시 한번 입력해주세요.';
        pwRepeatValid = false;
      } else if (pwRepeatInput.value !== pwInput.value) {
        // 유효성 검사 false 시 실행
        pwRepeatInput.classList.add('error-border');
        pwRepeatError.textContent = '비밀번호가 일치하지 않아요.';
        pwRepeatValid = false;
      } else {
        // 유효성 검사 통과
        pwRepeatError.textContent = '';
        pwRepeatInput.classList.remove('error-border');
        pwRepeatValid = true;
      }
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

// 눈 모양 아이콘 토글
function togglePWVisibility(e) {
  const type = pwInput.getAttribute('type') === 'password' ? 'text' : 'password';
  pwInput.setAttribute('type', type);
  e.target.src = type === 'password' ? 'icons/eye-off.svg' : 'icons/eye-on.svg';
}
function togglePWRepeatVisibility(e) {
  const type = pwRepeatInput.getAttribute('type') === 'password' ? 'text' : 'password';
  pwRepeatInput.setAttribute('type', type);
  e.target.src = type === 'password' ? 'icons/eye-off.svg' : 'icons/eye-on.svg';
}

emailInput.addEventListener('focusout', checkError);
pwInput.addEventListener('focusout', checkError);
pwRepeatInput.addEventListener('focusout', checkError);

form.addEventListener('submit', checkSubmitError);
// formList.addEventListener('keypress', checkSubmitError);

pwVisibilityIcon.addEventListener('click', togglePWVisibility);
pwRepeatVisibilityIcon.addEventListener('click', togglePWRepeatVisibility);
