import {
  email,
  password,
  confirmPassword,
  signupForm,
  eyeIcon,
  eyeIconcheck,
} from '../javascript/common.js';

import {
  checkDuplicateEmail,
  signUp,
  storeAccessToken,
  checkAndRedirect,
} from '../javascript/api.js';

function showEmailInputFocusout() {
  const emailValue = email.input.value;

  if (!emailValue) {
    email.showError('이메일을 입력해주세요.');
    return;
  }

  if (!email.validate(emailValue)) {
    email.showError('올바른 이메일 주소가 아닙니다.');
    return;
  }

  email.showError('');
}

function showPasswordInputFocusout() {
  const passwordValue = password.input.value;

  if (!passwordValue) {
    password.showError('비밀번호를 입력해주세요.');
    return;
  }

  if (!password.validate(passwordValue)) {
    password.showError('비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.');
    return;
  }

  password.showError('');
}

function showPasswordCheckInputFocusout() {
  const passwordCheckValue = confirmPassword.input.value;

  if (!passwordCheckValue) {
    confirmPassword.showError('비밀번호 확인을 입력해주세요.');
    return;
  }

  if (!confirmPassword.validate(passwordCheckValue)) {
    confirmPassword.showError('비밀번호가 일치하지 않습니다.');
    return;
  }

  confirmPassword.showError('');
}

async function sendSignUpRequest() {
  const emailValue = email.input.value;
  const passwordValue = password.input.value;
  const passwordCheckValue = confirmPassword.input.value;

  const checkEmailResponse = await checkDuplicateEmail(emailValue);
  const response = await signUp(emailValue, passwordValue);
  if (!checkEmailResponse.ok) {
    email.showError('이미 존재하는 이메일입니다.');
    return;
  }

  if (
    !email.validate(emailValue) ||
    !password.validate(passwordValue) ||
    !confirmPassword.validate(passwordCheckValue)
  ) {
    return;
  }

  const signUpResponse = await signUp(emailValue, passwordValue);

  if (response.ok) {
    const data = await response.json();
    const accessToken = data.data.accessToken;
    storeAccessToken(accessToken);
    checkAndRedirect();
  } else if (response.status === 400) {
    email.showError('이메일을 확인해주세요.');
    password.showError('비밀번호를 확인해주세요.');
    confirmPassword.showError('비밀번호를 확인해주세요.');
  }
}

function showFormSubmit(event) {
  event.preventDefault();
  sendSignUpRequest();
}

function togglePasswordVisibility() {
  const passwordType = password.input.type;

  if (passwordType === 'password') {
    password.input.type = 'text';
    eyeIcon.src = '../image/eye-on.png'; // 비밀번호가 보이는 상태의 아이콘
  } else {
    password.input.type = 'password';
    eyeIcon.src = '../image/eye-off.png'; // 비밀번호가 숨겨진 상태의 아이콘
  }
}

function togglePasswordCheckVisibility() {
  const passwordCheckType = confirmPassword.input.type;

  if (passwordCheckType === 'password') {
    confirmPassword.input.type = 'text';
    eyeIconcheck.src = '../image/eye-on.png'; // 비밀번호 확인이 보이는 상태의 아이콘
  } else {
    confirmPassword.input.type = 'password';
    eyeIconcheck.src = '../image/eye-off.png'; // 비밀번호 확인이 숨겨진 상태의 아이콘
  }
}

checkAndRedirect();

signupForm.addEventListener('submit', showFormSubmit);
email.input.addEventListener('focusout', showEmailInputFocusout);
password.input.addEventListener('focusout', showPasswordInputFocusout);
confirmPassword.input.addEventListener(
  'focusout',
  showPasswordCheckInputFocusout,
);
eyeIcon.addEventListener('click', togglePasswordVisibility);
eyeIconcheck.addEventListener('click', togglePasswordCheckVisibility);
