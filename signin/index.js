import {
  emailInput,
  passwordInput,
  loginButton,
  eyeIcon,
  passwordEye,
  handleEmailError,
  handlePasswordError,
  validateEmail,
  validatePassword,
} from '../common.js';

const signinForm = document.getElementById('signin-form');

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

function handleFormSubmit(event) {
  event.preventDefault();
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;

  if (userEmail === 'test@codeit.com' && userPassword === 'codeit101') {
    signinForm.action = '../etc/folder.html';
    signinForm.submit();
  } else {
    handleEmailError('이메일을 확인해주세요.');
    handlePasswordError('비밀번호를 확인해주세요.');
  }
}

function togglePasswordVisibility() {
  if (passwordEye.type === 'password') {
    passwordEye.type = 'text';
    eyeIcon.src = '../image/eye-on.png';
  } else {
    passwordEye.type = 'password';
    eyeIcon.src = '../image/eye-off.png';
  }
}

emailInput.addEventListener('focusout', handleEmailInputFocusout);
passwordInput.addEventListener('focusout', handlePasswordInputFocusout);
loginButton.addEventListener('click', handleFormSubmit);
eyeIcon.addEventListener('click', togglePasswordVisibility);
