// 이메일 관련 변수 및 함수
export const email = {
  input: document.querySelector('.email-box'),
  error: document.querySelector('.error-email'),
  errorBox: document.querySelector('.box2'),
  validate: (emailValue) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailWhitespace = /\s/.test(emailValue);
    return emailRegex.test(emailValue) && !emailWhitespace;
  },
  showError: (message) => {
    email.error.textContent = message;
    email.error.classList.toggle('error', !!message);
    email.errorBox.classList.toggle('error-box', !!message);
  },
};

// 패스워드 관련 변수 및 함수
export const password = {
  input: document.querySelector('.password-box'),
  error: document.querySelector('.error-password'),
  errorBox: document.querySelector('.box5'),
  eye: document.querySelector('.password-box'),
  validate: (passwordValue) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    const passwordWhitespace = /\s/.test(passwordValue);
    return passwordRegex.test(passwordValue) && !passwordWhitespace;
  },
  showError: (message) => {
    password.error.textContent = message;
    password.error.classList.toggle('error', !!message);
    password.errorBox.classList.toggle('error-box', !!message);
  },
};

export const confirmPassword = {
  input: document.querySelector('.password-check'),
  error: document.querySelector('.error-password-check'),
  errorBox: document.querySelector('.box6'),
  eye: document.querySelector('.password-check'),
  validate: (passwordCheckValue) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
    const passwordWhitespace = /\s/.test(passwordCheckValue);
    return passwordRegex.test(passwordCheckValue) && !passwordWhitespace;
  },
  showError: (message) => {
    confirmPassword.error.textContent = message; // 수정됨
    confirmPassword.error.classList.toggle('error', !!message); // 수정됨
    confirmPassword.errorBox.classList.toggle('error-box', !!message); // 수정됨
  },
};

// 기타 변수
export const loginButton = document.getElementById('login-button');
export const eyeIcon = document.querySelector('.eye-icon');
export const eyeIconcheck = document.querySelector('.eye-icon2');
export const signupForm = document.getElementById('signup-form');
