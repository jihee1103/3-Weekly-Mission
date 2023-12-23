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
  eyeIconcheck,
  MOCK_EMAIL,
  MOCK_PASSWORD,
} from '../javascript/common.js';

import { checkDuplicateEmail, signUp } from '../javascript/api.js';

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
  if (emailValue === MOCK_EMAIL) {
    handleEmailError('이미 사용 중인 이메일입니다.');
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

async function sendSignUpRequest() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const passwordcheckValue = passwordcheckInput.value;

  try {
    const checkEmailResponse = await checkDuplicateEmail(emailValue);

    if (checkEmailResponse.status === 409) {
      handleEmailError('이미 존재하는 이메일입니다.');
      return;
    }
    if (checkEmailResponse.status !== 200) {
      throw new Error('이메일 중복 확인 요청 실패');
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error('이메일 중복 확인 요청 실패');
  }

  if (
    validateEmail(emailValue) &&
    validatePassword(passwordValue) &&
    validatePasswordcheck(passwordValue, passwordcheckValue)
  ) {
    try {
      const response = await signUp(emailValue, passwordValue);

      if (response.status === 200) {
        signupForm.action = '../etc/folder.html';
        signupForm.submit();
        return;
      }
      if (response.status === 400) {
        handleEmailError('이메일을 확인해주세요.');
        handlePasswordError('비밀번호를 확인해주세요.');
        handlePasswordcheckError('비밀번호를 확인해주세요.');
        return;
      }
    } catch (error) {
      console.error('Error:', error);
      throw new Error('회원가입 요청 실패');
    }
  }
}

function handleFormSubmit(event) {
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

emailInput.addEventListener('focusout', handleEmailInputFocusout);
passwordInput.addEventListener('focusout', handlePasswordInputFocusout);
passwordcheckInput.addEventListener(
  'focusout',
  handlePasswordcheckInputFocusout,
);
signupForm.addEventListener('submit', handleFormSubmit);
eyeIcon.addEventListener('click', togglePasswordVisibility);
eyeIconcheck.addEventListener('click', togglePasswordcheckVisibility);
