const emailInput = document.querySelector('.email-box');
const errorEmail = document.querySelector('.error-email');
const errorEmailbox = document.querySelector('.box2');
const passwordInput = document.querySelector('.password-box');
const errorPassword = document.querySelector('.error-password');
const errorPasswordbox = document.querySelector('.box5');
const errorPasswordcheckbox = document.querySelector('.box6');
const passwordBtn = document.querySelector('.password-box'); // passwordBtn 변수 삭제
const loginButton = document.getElementById('login-button');
const signinForm = document.getElementById('signin-form');
const eyeIcon = document.querySelector('.eye-icon');
const passwordEye = document.querySelector('.password-box');
const passwordcheckInput = document.querySelector('.password-check'); // passwordcheckInput 추가
const signupForm = document.getElementById('signup-form'); // signupForm 추가
const errorPasswordcheck = document.querySelector('.error-password-check'); // 변수명을 수정해야 할 수도 있음
const eyeIcon2 = document.querySelector('.eye-icon2');
// 이메일 에러 처리 함수
function handleEmailError(message) {
  errorEmail.textContent = message;
  errorEmail.classList.toggle('error', !!message);
  errorEmailbox.classList.toggle('error-box', !!message);
}

// 패스워드 에러 처리 함수
function handlePasswordError(message) {
  errorPassword.textContent = message;
  errorPassword.classList.toggle('error', !!message);
  errorPasswordbox.classList.toggle('error-box', !!message);
}

// 이메일 유효성 검사 함수
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailWhitespace = /\s/.test(email);
  return emailRegex.test(email) && !emailWhitespace;
}

// 패스워드 유효성 검사 함수
function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  const passwordWhitespace = /\s/.test(password);
  return passwordRegex.test(password) && !passwordWhitespace;
}

// 패스워드 확인 에러 처리 함수
function handlePasswordcheckError(message) {
  errorPasswordcheck.textContent = message;
  errorPasswordcheck.classList.toggle('error', !!message);
  errorPasswordcheckbox.classList.toggle('error-box', !!message);
}

// 패스워드 확인 유효성 검사 함수
function validatePasswordcheck(password, passwordcheck) {
  return password === passwordcheck;
}

export {
  emailInput,
  errorEmail,
  errorEmailbox,
  passwordInput,
  errorPassword,
  errorPasswordbox,
  errorPasswordcheckbox,
  loginButton,
  eyeIcon,
  eyeIcon2,
  passwordEye,
  passwordcheckInput,
  handleEmailError,
  handlePasswordError,
  handlePasswordcheckError,
  validateEmail,
  validatePassword,
  validatePasswordcheck,
  signupForm,
};
