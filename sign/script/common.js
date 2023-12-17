const formElement = document.querySelector('form');

const emailInput = document.querySelector('.email-form__input');
const pwInput = document.querySelector('.password-form__input');
const pwRepeatInput = document.querySelector('.password-repeat-form__input');

const emailError = document.querySelector('#email-error');
const pwError = document.querySelector('#password-error');
const pwRepeatError = document.querySelector('#password-repeat-error');

const pwVisibilityIcon = document.querySelector('#password-visibility-icon');
const pwRepeatVisibilityIcon = document.querySelector('#password-repeat-visibility-icon');

const emailRegex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const pwRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

let isValidEmail = false;
let isValidPW = false;
let isValidPWRepeat = false;

// 회원가입 이메일 유효성 검사
function validateSignUpEmail() {
  if (emailInput.value === '') {
    // input 공백 시 실행
    emailInput.classList.add('error-border');
    emailError.textContent = '이메일를 입력해주세요.';
    isValidEmail = false;
  } else if (emailRegex.test(emailInput.value) === false) {
    // 이메일 유형이 아닐 시 실행
    emailInput.classList.add('error-border');
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    isValidEmail = false;
  } else if (emailInput.value === 'test@codeit.com') {
    // test@codeit.com 입력 시 실행
    emailInput.classList.add('error-border');
    emailError.textContent = '이미 사용 중인 이메일입니다.';
    isValidEmail = false;
  } else {
    // 유효성 검사 통과
    emailError.textContent = '';
    emailInput.classList.remove('error-border');
    isValidEmail = true;
  }
}

// 로그인 이메일 유효성 검사
function validateSignInEmail() {
  if (emailInput.value === '') {
    emailInput.classList.add('error-border');
    emailError.textContent = '이메일를 입력해주세요.';
    isValidEmail = false;
  } else if (emailRegex.test(emailInput.value) === false) {
    emailInput.classList.add('error-border');
    emailError.textContent = '올바른 이메일 주소가 아닙니다.';
    isValidEmail = false;
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('error-border');
    isValidEmail = true;
  }
}

// PW 유효성 검사
function validatePW() {
  if (pwInput.value === '') {
    pwInput.classList.add('error-border');
    pwError.textContent = '비밀번호를 입력해주세요.';
    isValidPW = false;
  } else if (pwRegex.test(pwInput.value) === false || pwInput.value.length < 8) {
    pwInput.classList.add('error-border');
    pwError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
    isValidPW = false;
  } else {
    pwError.textContent = '';
    pwInput.classList.remove('error-border');
    isValidPW = true;
  }
}

// PW-Repaet 유효성 검사
function validatePWRepeat() {
  if (pwRepeatInput.value === '') {
    pwRepeatInput.classList.add('error-border');
    pwRepeatError.textContent = '비밀번호를 다시 한번 입력해주세요.';
    isValidPWRepeat = false;
  } else if (pwRepeatInput.value !== pwRepeatInput.value) {
    // PW와 일치하지 않을 시 실행
    pwRepeatInput.classList.add('error-border');
    pwRepeatError.textContent = '비밀번호가 일치하지 않아요.';
    isValidPWRepeat = false;
  } else {
    pwRepeatError.textContent = '';
    pwRepeatInput.classList.remove('error-border');
    isValidPWRepeat = true;
  }
}

// 눈 모양 아이콘 토글
function togglePWVisibility(icon, input) {
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
  icon.src = type === 'password' ? 'icons/eye-off.svg' : 'icons/eye-on.svg';
}

export {
  formElement,
  emailInput,
  pwInput,
  pwRepeatInput,
  emailError,
  pwError,
  pwRepeatError,
  pwVisibilityIcon,
  pwRepeatVisibilityIcon,
  emailRegex,
  pwRegex,
  isValidEmail,
  isValidPW,
  isValidPWRepeat,
  validateSignUpEmail,
  validateSignInEmail,
  validatePW,
  validatePWRepeat,
  togglePWVisibility,
};
