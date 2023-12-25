import {
  emailInput,
  passwordInput,
  passwordcheckInput,
  signupForm,
  showEmailError,
  showPasswordError,
  showPasswordcheckError,
  validateEmail,
  validatePassword,
  validatePasswordcheck,
  passwordEye,
  eyeIcon,
  eyeIconcheck,
  MOCK_EMAIL,
  MOCK_PASSWORD,
} from '../javascript/common.js';

import { checkDuplicateEmail, signUp } from '../javascript/api.js';

function showEmailInputFocusout() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    showEmailError('이메일을 입력해주세요.');
    return;
  }

  if (!validateEmail(emailValue)) {
    showEmailError('올바른 이메일 주소가 아닙니다.');
    return;
  }
  if (emailValue === MOCK_EMAIL) {
    showEmailError('이미 사용 중인 이메일입니다.');
    return;
  }

  showEmailError('');
}

function showPasswordInputFocusout() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    showPasswordError('비밀번호를 입력해주세요.');
    return;
  }

  if (!validatePassword(passwordValue)) {
    showPasswordError('비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
    return;
  }

  showPasswordError('');
}

function showPasswordcheckInputFocusout() {
  const passwordValue = passwordInput.value;
  const passwordcheckValue = passwordcheckInput.value;

  if (!passwordcheckValue) {
    showPasswordcheckError('비밀번호를 입력해주세요.');
    return;
  }

  if (!validatePasswordcheck(passwordValue, passwordcheckValue)) {
    showPasswordcheckError('비밀번호가 일치하지 않습니다.');
    return;
  }

  showPasswordcheckError('');
}

async function sendSignUpRequest() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const passwordcheckValue = passwordcheckInput.value;

  const checkEmailResponse = await checkDuplicateEmail(emailValue);

  if (!checkEmailResponse.ok) {
    handleEmailError('이미 존재하는 이메일입니다.');
    return;
  }

  if (
    !validateEmail(emailValue) ||
    !validatePassword(passwordValue) ||
    !validatePasswordcheck(passwordValue, passwordcheckValue)
  ) {
    return;
  }

  const signUpResponse = await signUp(emailValue, passwordValue);

  if (!signUpResponse.ok) {
    handleEmailError('이메일을 확인해주세요.');
    handlePasswordError('비밀번호를 확인해주세요.');
    handlePasswordcheckError('비밀번호를 확인해주세요.');
    return;
  }

  window.location.href = '../etc/folder.html';
}
function showFormSubmit(event) {
  event.preventDefault();
  sendSignUpRequest();
}

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
    eyeIconcheck.src = '../image/eye-on.png';
  } else {
    passwordcheckInput.type = 'password';
    eyeIconcheck.src = '../image/eye-off.png';
  }
}

emailInput.addEventListener('focusout', showEmailInputFocusout);
passwordInput.addEventListener('focusout', showPasswordInputFocusout);
passwordcheckInput.addEventListener('focusout', showPasswordcheckInputFocusout);
signupForm.addEventListener('submit', showFormSubmit);
eyeIcon.addEventListener('click', togglePasswordVisibility);
eyeIconcheck.addEventListener('click', togglePasswordcheckVisibility);
