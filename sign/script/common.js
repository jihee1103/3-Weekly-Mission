const formElement = document.getElementById('form-list');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const passwordRepeatInput = document.getElementById('password-repeat-input');
const emailErrorText = document.getElementById('email-error');
const passwordErrorText = document.getElementById('password-error');
const passwordRepeatErrorText = document.getElementById('password-repeat-error');
const passwordVisibilityIcon = document.getElementById('password-visibility-icon');
const passwordRepeatVisibilityIcon = document.getElementById('password-repeat-visibility-icon');

const emailRegex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// 회원가입 이메일 유효성 검사
function handleSignUpEmailInputFocusout() {
  if (!emailInput.value) {
    emailInput.classList.add('error-border');
    emailErrorText.textContent = '이메일를 입력해주세요.';
    return false;
  }

  if (emailRegex.test(emailInput.value) === false) {
    emailInput.classList.add('error-border');
    emailErrorText.textContent = '올바른 이메일 주소가 아닙니다.';
    return false;
  }

  if (emailInput.value === 'test@codeit.com') {
    emailInput.classList.add('error-border');
    emailErrorText.textContent = '이미 사용 중인 이메일입니다.';
    return false;
  }

  // 유효성 검사 통과
  emailErrorText.textContent = '';
  emailInput.classList.remove('error-border');
  return true;
}

// 로그인 이메일 유효성 검사
function handleSignInEmailInputFocusout() {
  if (!emailInput.value) {
    emailInput.classList.add('error-border');
    emailErrorText.textContent = '이메일를 입력해주세요.';
    return false;
  }

  if (emailRegex.test(emailInput.value) === false) {
    emailInput.classList.add('error-border');
    emailErrorText.textContent = '올바른 이메일 주소가 아닙니다.';
    return false;
  }

  // 유효성 검사 통과
  emailErrorText.textContent = '';
  emailInput.classList.remove('error-border');
  return true;
}

// Password 유효성 검사
function handlePasswordInputFocusout() {
  if (!passwordInput.value) {
    passwordInput.classList.add('error-border');
    passwordErrorText.textContent = '비밀번호를 입력해주세요.';
    return false;
  }

  if (passwordRegex.test(passwordInput.value) === false || passwordInput.value.length < 8) {
    passwordInput.classList.add('error-border');
    passwordErrorText.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
    return false;
  }

  // 유효성 검사 통과
  passwordErrorText.textContent = '';
  passwordInput.classList.remove('error-border');
  return true;
}

// Password-Repaet 유효성 검사
function handlePasswordRepeatInputFocusout() {
  if (!passwordRepeatInput.value) {
    passwordRepeatInput.classList.add('error-border');
    passwordRepeatErrorText.textContent = '비밀번호를 다시 한번 입력해주세요.';
    return false;
  }

  if (passwordRepeatInput.value !== passwordInput.value) {
    passwordRepeatInput.classList.add('error-border');
    passwordRepeatErrorText.textContent = '비밀번호가 일치하지 않아요.';
    return false;
  }

  // 유효성 검사 통과
  passwordRepeatErrorText.textContent = '';
  passwordRepeatInput.classList.remove('error-border');
  return true;
}

// 눈 모양 아이콘 토글
function handlePasswordVisibilityIconClick() {
  const input = this.parentElement.querySelector('.input');
  const icon = this.parentElement.querySelector('.visibility-icon');

  input.type = input.type === 'password' ? 'text' : 'password';
  icon.src = input.type === 'password' ? 'icons/eye-off.svg' : 'icons/eye-on.svg';
}

export {
  formElement,
  emailInput,
  passwordInput,
  passwordRepeatInput,
  emailErrorText,
  passwordErrorText,
  passwordRepeatErrorText,
  passwordVisibilityIcon,
  passwordRepeatVisibilityIcon,
  handleSignUpEmailInputFocusout,
  handleSignInEmailInputFocusout,
  handlePasswordInputFocusout,
  handlePasswordRepeatInputFocusout,
  handlePasswordVisibilityIconClick,
};
