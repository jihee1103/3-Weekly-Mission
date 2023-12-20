const emailInput = document.querySelector('.email-box');
const errorEmail = document.querySelector('.error-email');
const errorEmailbox = document.querySelector('.box2');
const passwordInput = document.querySelector('.password-box');
const errorPassword = document.querySelector('.error-password');
const errorPasswordbox = document.querySelector('.box5');
const passwordcheckInput = document.querySelector('.password-check');
const errorPasswordcheck = document.querySelector('.error-password-check');
const errorPasswordcheckbox = document.querySelector('.box6');
const passwordEyeIcon = document.querySelector('.eye-icon');
const passwordcheckEyeIcon = document.querySelector('.eye-icon2');
const signupForm = document.getElementById('signup-form');

//이메일 에러
function handleEmailInputFocusout() {
  const emailValue = emailInput.value;

  if (!emailValue) {
    handleEmailErrorMessage('이메일을 입력해주세요.');
    return;
  }

  if (!validateEmail(emailValue)) {
    handleEmailErrorMessage('올바른 이메일 주소가 아닙니다.');
    return;
  }
  handleEmailErrorMessage('');
  resetEmailErrorState();
}

function handleEmailErrorMessage(message) {
  errorEmail.textContent = message;
  errorEmail.classList.toggle('error', !!message);
  errorEmailbox.classList.toggle('error-box', !!message);
}

function resetEmailErrorState() {
  errorEmail.classList.remove('error');
  errorEmailbox.classList.remove('error-box');
}

//이메일 검증
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailWhitespace = /\s/.test(email);
  return emailRegex.test(email) && !emailWhitespace;
}

//패스워드 에러

function handlePasswordInputFocusout() {
  const passwordValue = passwordInput.value;

  if (!passwordValue) {
    handlePasswordErrorMessage('비밀번호를 입력해주세요.');
    return;
  }

  if (!validatePassword(passwordValue)) {
    handlePasswordErrorMessage(
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
    );
    return;
  }

  handlePasswordErrorMessage('');
  resetPasswordErrorState();
}

function handlePasswordErrorMessage(message) {
  errorPassword.textContent = message;
  errorPassword.classList.toggle('error', !!message);
  errorPasswordbox.classList.toggle('error-box', !!message);
}

function resetPasswordErrorState() {
  errorPassword.classList.remove('error');
  errorPasswordbox.classList.remove('error-box');
}

//패스워드 에러

function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  const passwordWhitespace = /\s/.test(password);

  return passwordRegex.test(password) && !passwordWhitespace;
}

//패스워드 확인 에러
function handlePasswordcheckInputFocusout() {
  const passwordValue = passwordInput.value;
  const passwordcheckValue = passwordcheckInput.value;

  if (!passwordcheckValue) {
    handlePasswordcheckErrorMessage('비밀번호를 입력해주세요.');
    return;
  }

  if (!validatePasswordcheck(passwordValue)) {
    handlePasswordcheckErrorMessage(
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
    );
    return;
  }

  if (passwordValue !== passwordcheckValue) {
    handlePasswordcheckErrorMessage('비밀번호가 일치하지 않습니다.');
    return;
  }

  handlePasswordcheckErrorMessage('');
  resetPasswordcheckErrorState();
}

function handlePasswordcheckErrorMessage(message) {
  errorPasswordcheck.textContent = message;
  errorPasswordcheck.classList.toggle('error', !!message);
  errorPasswordcheckbox.classList.toggle('error-box', !!message);
}

function resetPasswordcheckErrorState() {
  errorPasswordcheck.classList.remove('error');
  errorPasswordcheckbox.classList.remove('error-box');
}

// 패스워드 확인 검증
function validatePasswordcheck(password) {
  const passwordcheckRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  const passwordcheckWhitespace = /\s/.test(password);

  return passwordcheckRegex.test(password) && !passwordcheckWhitespace;
}

//일치시 로그인

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
    handleEmailErrorMessage('이메일을 확인해주세요.');
    handlePasswordErrorMessage('비밀번호를 확인해주세요.');
    handlePasswordcheckErrorMessage('비밀번호를 확인해주세요.');
  }
}

// 비밀번호 눈 아이콘 클릭 이벤트 핸들러
function togglePasswordVisibility(event, inputElement, eyeIconElement) {
  event.preventDefault();
  if (inputElement.type === 'password') {
    inputElement.type = 'text';
    eyeIconElement.src = '../image/eye-on.png';
  } else {
    inputElement.type = 'password';
    eyeIconElement.src = '../image/eye-off.png';
  }
}

passwordEyeIcon.addEventListener('click', (event) => {
  togglePasswordVisibility(event, passwordInput, passwordEyeIcon);
});

passwordcheckEyeIcon.addEventListener('click', (event) => {
  togglePasswordVisibility(event, passwordcheckInput, passwordcheckEyeIcon);
});

emailInput.addEventListener('focusout', handleEmailInputFocusout);
passwordInput.addEventListener('focusout', handlePasswordInputFocusout);
passwordcheckInput.addEventListener(
  'focusout',
  handlePasswordcheckInputFocusout,
);
signupForm.addEventListener('submit', handleFormSubmit);
