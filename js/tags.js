// 이메일
const inputEmail = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

// 패스워드
const inputPassword = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');

// 패스워드 확인
const inputPasswordDouble = document.querySelector('#password-double');
const passwordDoubleError = document.querySelector('#password-double-error');

// 인풋
const inputBox = document.querySelector('.sign-inputs');

// 로그인, 회원가입 버튼
const SigninButton = document.querySelector('#signin-btn');
const SignupButton = document.querySelector('#signup-btn');

// 아이콘
const eyeButton = document.querySelector('.eye-button');
const eyeButtonDouble = document.querySelector('#eye-button-double');

export {
  inputEmail,
  emailError,
  inputPassword,
  passwordError,
  inputPasswordDouble,
  passwordDoubleError,
  inputBox,
  SigninButton,
  SignupButton,
  eyeButton,
  eyeButtonDouble,
}