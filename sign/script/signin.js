const form = document.querySelector('form');

const emailInput = document.querySelector('.email-form__input');
const pwInput = document.querySelector('.password-form__input');

const emailError = document.querySelector('#email-error');
const pwError = document.querySelector('#password-error');

const pwVisibilityIcon = document.querySelector('#password-visibility-icon');

// 유효성 검사 관련
const email_regex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

let emailValid = false;
let pwValid = false;

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
    default:
      break;
  }
}

// submit 시 에러 체크
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

// 눈 모양 아이콘 토글
function toggleEye(e) {
  const type = pwInput.getAttribute('type') === 'password' ? 'text' : 'password';
  pwInput.setAttribute('type', type);

  // 아이콘 변경
  e.target.src = type === 'password' ? 'icons/eye-off.svg' : 'icons/eye-on.svg';
}

emailInput.addEventListener('focusout', checkError);
pwInput.addEventListener('focusout', checkError);
form.addEventListener('submit', checkSubmitError);
pwVisibilityIcon.addEventListener('click', toggleEye);
