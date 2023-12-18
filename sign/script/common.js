const formElement = document.querySelector('#form-list');

const emailInput = document.querySelector('.email-form__input');
const passwordInput = document.querySelector('.password-form__input');
const passwordRepeatInput = document.querySelector('.password-repeat-form__input');

const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const passwordRepeatError = document.querySelector('#password-repeat-error');

const passwordVisibilityIcon = document.querySelector('#password-visibility-icon');
const passwordRepeatVisibilityIcon = document.querySelector('#password-repeat-visibility-icon');

const emailRegex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

let isValidEmail = false;
let isValidPassword = false;
let isValidPasswordRepeat = false;

// 회원가입 이메일 유효성 검사
function validateSignUpEmail() {
  if (!emailInput.value) {
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
  if (!emailInput.value) {
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

// Password 유효성 검사
function validatePassword() {
  if (!passwordInput.value) {
    passwordInput.classList.add('error-border');
    passwordError.textContent = '비밀번호를 입력해주세요.';
    isValidPassword = false;
  } else if (passwordRegex.test(passwordInput.value) === false || passwordInput.value.length < 8) {
    passwordInput.classList.add('error-border');
    passwordError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
    isValidPassword = false;
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('error-border');
    isValidPassword = true;
  }
}

// Password-Repaet 유효성 검사
function validatePasswordRepeat() {
  if (!passwordRepeatInput.value) {
    passwordRepeatInput.classList.add('error-border');
    passwordRepeatError.textContent = '비밀번호를 다시 한번 입력해주세요.';
    isValidPasswordRepeat = false;
  } else if (passwordRepeatInput.value !== passwordInput.value) {
    // Password와 일치하지 않을 시 실행
    passwordRepeatInput.classList.add('error-border');
    passwordRepeatError.textContent = '비밀번호가 일치하지 않아요.';
    isValidPasswordRepeat = false;
  } else {
    passwordRepeatError.textContent = '';
    passwordRepeatInput.classList.remove('error-border');
    isValidPasswordRepeat = true;
  }
}

// 눈 모양 아이콘 토글
function togglePasswordVisibility(icon, input) {
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
  icon.src = type === 'password' ? 'icons/eye-off.svg' : 'icons/eye-on.svg';
}

export {
  formElement,
  emailInput,
  passwordInput,
  passwordRepeatInput,
  emailError,
  passwordError,
  passwordRepeatError,
  passwordVisibilityIcon,
  passwordRepeatVisibilityIcon,
  isValidEmail,
  isValidPassword,
  isValidPasswordRepeat,
  validateSignUpEmail,
  validateSignInEmail,
  validatePassword,
  validatePasswordRepeat,
  togglePasswordVisibility,
};
