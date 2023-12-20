const emailInput = document.querySelector('.email-box');
const errorEmail = document.querySelector('.error-email');
const errorEmailbox = document.querySelector('.box2');
const passwordInput = document.querySelector('.password-box');
const errorPassword = document.querySelector('.error-password');
const errorPasswordbox = document.querySelector('.box5');
const passwordBtn = document.querySelector('.password-box');
const loginButton = document.getElementById('login-button');
const signinForm = document.getElementById('signin-form');
const eyeIcon = document.querySelector('.eye-icon');
const passwordEye = document.querySelector('.password-box');

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

//로그인기능 구현

function handleFormSubmit(event) {
  event.preventDefault();
  const userEmail = document.querySelector('.email-box').value;
  const userPassword = document.querySelector('.password-box').value;

  if (userEmail === 'test@codeit.com' && userPassword === 'codeit101') {
    signinForm.action = '../etc/folder.html';
    signinForm.submit();
  } else {
    handleEmailErrorMessage('이메일을 확인해주세요.');
    handlePasswordErrorMessage('비밀번호를 확인해주세요.');
  }
}

//패스워드 눈모양 아이콘 기능
eyeIcon.addEventListener('click', togglePasswordVisibility);

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
signinForm.addEventListener('submit', handleFormSubmit);

export {
  emailInput,
  errorEmail,
  errorEmailbox,
  passwordInput,
  errorPassword,
  errorPasswordbox,
  loginButton,
  passwordBtn,
  eyeIcon,
  passwordEye,
};
