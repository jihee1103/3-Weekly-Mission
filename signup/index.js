import {
  emailInput,
  errorEmail,
  errorBox,
  passwordInput,
  errorPassword,
  errorBox2,
  loginButton,
  passwordBtn,
} from '../signin/index.js';

//이메일 에러구현

emailInput.addEventListener('focusout', function () {
  const emailValue = this.value.trim();

  if (!emailValue) {
    errorEmail.textContent = '이메일을 입력해주세요.'; // 값이 없을 경우
    errorEmail.style.display = 'block'; // 에러 메시지 표시
    errorBox.style.borderColor = '#ff5b56';
  } else if (!isValidEmail(emailValue)) {
    errorEmail.textContent = '올바른 이메일 주소가 아닙니다.'; // 이메일 형식이 아닌 경우
    errorEmail.style.display = 'block'; // 에러 메시지 표시
    errorBox.style.borderColor = '#ff5b56';
  } else if (emailValue === 'test@codeit.com') {
    errorEmail.textContent = '이미 사용중인 이메일입니다.'; // 사용중인 이메일인 경우
    errorEmail.style.display = 'block'; // 에러 메시지 표시
    errorBox.style.borderColor = '#ff5b56';
  } else {
    errorEmail.style.display = 'none'; // 아무 문제가 없는 경우 에러 메시지 숨김
    errorBox.style.borderColor = ''; // 에러가 아닌 경우 박스 border 컬러 초기화
  }
});

//이메일 검증

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

//패스워드 에러구현

passwordInput.addEventListener('focusout', function () {
  const passwordValue = this.value.trim();

  if (!passwordValue) {
    errorPassword.textContent = '비밀번호를 입력해주세요.'; // 값이 없을 경우
    errorPassword.style.display = 'block'; // 에러 메시지 표시
    errorBox2.style.borderColor = '#ff5b56';
  } else if (!isValidPassword(passwordValue)) {
    errorPassword.textContent =
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.'; // 패스워드 형식이 아닌 경우
    errorPassword.style.display = 'block'; // 에러 메시지 표시
    errorBox2.style.borderColor = '#ff5b56';
  } else {
    errorPassword.style.display = 'none'; // 아무 문제가 없는 경우 에러 메시지 숨김
    errorBox2.style.borderColor = ''; // 에러가 아닌 경우 박스 border 컬러 초기화
  }
});

//패스워드확인  에러구현

const passwordInput2 = document.querySelector('.password-box2'); // 비밀번호 입력란
const errorPassword2 = document.querySelector('.error-password2'); // 비밀번호 에러 메시지
const errorBox3 = document.querySelector('.box6');
passwordInput2.addEventListener('focusout', function () {
  const passwordValue2 = this.value.trim();

  if (!passwordValue2) {
    errorPassword2.textContent = '비밀번호를 입력해주세요.'; // 값이 없을 경우
    errorPassword2.style.display = 'block'; // 에러 메시지 표시
    errorBox3.style.borderColor = '#ff5b56';
  } else if (!isValidPassword2(passwordValue2)) {
    errorPassword2.textContent =
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.'; // 패스워드 형식이 아닌 경우
    errorPassword2.style.display = 'block'; // 에러 메시지 표시
    errorBox3.style.borderColor = '#ff5b56';
  } else {
    errorPassword2.style.display = 'none'; // 아무 문제가 없는 경우 에러 메시지 숨김
    errorBox3.style.borderColor = ''; // 에러가 아닌 경우 박스 border 컬러 초기화
  }
});

// 패스워드확인 검증

function isValidPassword2(password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return passwordRegex.test(password);
}

//로그인기능 구현

const passwordBtn2 = document.querySelector('.password-box2');

//클릭과 엔터키로 페이지 이동

passwordBtn2.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    login();
  }
});

loginButton.addEventListener('click', login);

function login() {
  const email = 'test@codeit.com';
  const password = 'codeit101';

  const emailInput = document.querySelector('.email-box').value;
  const passwordInputValue = passwordBtn.value;
  const passwordInputValue2 = passwordBtn2.value;

  if (
    emailInput === email &&
    passwordInputValue === passwordInputValue2 &&
    passwordInputValue === password
  ) {
    window.location.href = '../etc/folder.html'; // 로그인 성공 시 페이지 이동
  } else if (passwordInputValue !== passwordInputValue2) {
    errorPassword2.textContent = '비밀번호가 일치하지 않아요.';
    errorPassword2.style.display = 'block';
    errorBox2.style.borderColor = '#ff5b56';
  } else {
    // 로그인 실패 시 처리
    errorEmail.textContent = '이메일을 확인해주세요.';
    errorEmail.style.display = 'block';
    errorPassword.textContent = '비밀번호를 확인해주세요.';
    errorPassword.style.display = 'block';
    errorPassword2.textContent = '비밀번호를 확인해주세요.';
    errorPassword2.style.display = 'block';
    errorBox.style.borderColor = '#ff5b56';
    errorBox2.style.borderColor = '#ff5b56';
    errorBox3.style.borderColor = '#ff5b56';
  }
}

// 첫 번째 눈모양 아이콘 클릭 시 이벤트 처리
const eyeIcon = document.querySelector('.eye-icon');
const passwordBox = document.querySelector('.password-box');
eyeIcon.addEventListener('click', function () {
  togglePasswordVisibility(passwordBox1, eyeIcon1);
});

// 두 번째 눈모양 아이콘 클릭 시 이벤트 처리
const eyeIcon2 = document.querySelector('.eye-icon2');
const passwordBox2 = document.querySelector('.password-box2');
eyeIcon2.addEventListener('click', function () {
  togglePasswordVisibility(passwordBox2, eyeIcon2);
});

function togglePasswordVisibility(passwordBox, eyeIcon) {
  if (passwordBox.type === 'password') {
    passwordBox.type = 'text';
    eyeIcon.src = '../image/eye-on.png'; // 변경된 이미지 경로
  } else {
    passwordBox.type = 'password';
    eyeIcon.src = '../image/eye-off.png'; // 기본 이미지 경로
  }
}
