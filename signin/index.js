//이메일 에러구현

const emailInput = document.querySelector('.email-box');
const errorEmail = document.querySelector('.error-email');
const errorEmailbox = document.querySelector('.box2');
const passwordInput = document.querySelector('.password-box');
const errorPassword = document.querySelector('.error-password');
const errorPasswordbox = document.querySelector('.box5');

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

//패스워드 에러구현

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

function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  const passwordWhitespace = /\s/.test(password);

  return passwordRegex.test(password) && !passwordWhitespace;
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
    errorBoxclassList.add('error-box');
    errorBox2classList.add('error-box');
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

emailInput.addEventListener('focusout', handleEmailInputFocusout);
passwordInput.addEventListener('focusout', handlePasswordInputFocusout);

export {
  emailInput,
  errorEmail,
  errorEmailbox,
  passwordInput,
  errorPassword,
  errorPasswordbox,
  loginButton,
  passwordBtn,
};
