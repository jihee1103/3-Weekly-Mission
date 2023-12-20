//이메일 에러구현

const emailInput = document.querySelector('.email-box'); // 이메일 입력란
const errorEmail = document.querySelector('.error-email'); // 이메일 에러 메시지
const errorBox = document.querySelector('.box2'); //이메일 에러 박스

emailInput.addEventListener('focusout', function () {
  const emailValue = this.value.trim();

  if (!emailValue) {
    errorEmail.textContent = '이메일을 입력해주세요.'; // 값이 없을 경우
    errorEmail.classList.add('error');
    errorBox.classList.add('error-box');
  } else if (!isValidEmail(emailValue)) {
    errorEmail.textContent = '올바른 이메일 주소가 아닙니다.'; // 이메일 형식이 아닌 경우
    errorEmail.classList.add('error');
    errorBox.classList.add('error-box');
  } else {
    errorEmail.classList.remove('error'); // 아무 문제가 없는 경우 에러 메시지 숨김
    errorBox.classList.remove('error-box'); // 에러가 아닌 경우 박스 border 컬러 초기화
  }
});

//이메일 검증
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

//패스워드 에러구현

const passwordInput = document.querySelector('.password-box');
const errorPassword = document.querySelector('.error-password');
const errorBox2 = document.querySelector('.box5');

passwordInput.addEventListener('focusout', function () {
  const passwordValue = this.value.trim();

  if (!passwordValue) {
    errorPassword.textContent = '비밀번호를 입력해주세요.';
    errorPassword.classList.add('error');
    errorBox2.classList.add('error-box');
  } else if (!isValidPassword(passwordValue)) {
    errorPassword.textContent =
      '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.';
    errorPassword.classList.add('error');
    errorBox2.classList.add('error-box');
  } else {
    errorPassword.classList.remove('error');
    errorBox2.classList.remove('error-box');
  }
});

// 패스워드 검증

function isValidPassword(password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return passwordRegex.test(password);
}

//로그인기능 구현

const loginButton = document.querySelector('#login-button');
const passwordBtn = document.querySelector('.password-box');

passwordBtn.addEventListener('keyup', function (event) {
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

  if (emailInput === email && passwordInputValue === password) {
    window.location.href = '../etc/folder.html'; // 로그인 성공 시 페이지 이동
  } else {
    // 로그인 실패 시 처리

    errorEmail.textContent = '이메일을 확인해주세요.';
    errorEmail.classList.add('error');
    errorPassword.textContent = '비밀번호를 확인해주세요.';
    errorPassword.classList.add('error');
    errorBox.classList.add('error-box');
    errorBox2.classList.add('error-box');
  }
}

//패스워드 눈모양 아이콘 기능

const eyeIcon = document.querySelector('.eye-icon');

eyeIcon.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
  const passwordEye = document.querySelector('.password-box');
  const eyeIcon = document.querySelector('.eye-icon');

  if (passwordEye.type === 'password') {
    passwordEye.type = 'text';
    eyeIcon.src = '../image/eye-on.png'; // 변경된 이미지 경로
  } else {
    passwordEye.type = 'password';
    eyeIcon.src = '../image/eye-off.png'; // 기본 이미지 경로
  }
}

export {
  emailInput,
  errorEmail,
  errorBox,
  passwordInput,
  errorPassword,
  errorBox2,
  loginButton,
  passwordBtn,
};
