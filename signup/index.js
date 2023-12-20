// signup.js
import {
  emailInput,
  passwordInput,
  passwordcheckInput,
  signupForm,
  handleEmailError,
  handlePasswordError,
  handlePasswordcheckError,
  validateEmail,
  validatePassword,
  validatePasswordcheck,
  passwordEye,
  eyeIcon,
  eyeIcon2,
} from '../common.js';

function handleEmailInputFocusout() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    handleEmailError('이메일을 입력해주세요.');
    return;
  }

  if (!validateEmail(emailValue)) {
    handleEmailError('올바른 이메일 주소가 아닙니다.');
    return;
  }

  handleEmailError('');
}

function handlePasswordInputFocusout() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    handlePasswordError('비밀번호를 입력해주세요.');
    return;
  }

  if (!validatePassword(passwordValue)) {
    handlePasswordError('비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
    return;
  }

  handlePasswordError('');
}

function handlePasswordcheckInputFocusout() {
  const passwordValue = passwordInput.value;
  const passwordcheckValue = passwordcheckInput.value;

  if (!passwordcheckValue) {
    handlePasswordcheckError('비밀번호를 입력해주세요.');
    return;
  }

  if (!validatePasswordcheck(passwordValue, passwordcheckValue)) {
    handlePasswordcheckError('비밀번호가 일치하지 않습니다.');
    return;
  }

  handlePasswordcheckError('');
}

function handleFormSubmit(event) {
  event.preventDefault();
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;
  const userPasswordcheck = passwordcheckInput.value;

  if (
    userEmail === 'test@codeit.com' &&
    userPassword === 'codeit101' &&
    userPassword === userPasswordcheck
  ) {
    signupForm.action = '../etc/folder.html';
    signupForm.submit();
  } else {
    handleEmailError('이메일을 확인해주세요.');
    handlePasswordError('비밀번호를 확인해주세요.');
    handlePasswordcheckError('비밀번호를 확인해주세요.');
  }
}

// 눈 아이콘 클릭 이벤트 핸들러
function togglePasswordVisibility() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.src = '../image/eye-on.png';
  } else {
    passwordInput.type = 'password';
    eyeIcon.src = '../image/eye-off.png';
  }
}
function togglePasswordcheckVisibility() {
  if (passwordcheckInput.type === 'password') {
    passwordcheckInput.type = 'text';
    eyeIcon2.src = '../image/eye-on.png';
  } else {
    passwordcheckInput.type = 'password';
    eyeIcon2.src = '../image/eye-off.png';
  }
}

// 이벤트 핸들러 등록
emailInput.addEventListener('focusout', handleEmailInputFocusout);
passwordInput.addEventListener('focusout', handlePasswordInputFocusout);
passwordcheckInput.addEventListener(
  'focusout',
  handlePasswordcheckInputFocusout,
);
signupForm.addEventListener('submit', handleFormSubmit);
eyeIcon.addEventListener('click', togglePasswordVisibility);
eyeIcon2.addEventListener('click', togglePasswordcheckVisibility);
