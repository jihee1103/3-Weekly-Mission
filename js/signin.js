import {
  inputEmail,
  emailError,
  inputPassword,
  passwordError,
  SigninButton,
  eyeButton,
} from './tags.js';

// 유효성 검사
const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

// 이메일
function checkEmail() {
  if (inputEmail.value === "") {
    inputEmail.classList.add("error-box");
    emailError.textContent = "이메일을 입력해주세요";
    return false;
  } else if (emailRegex.test(inputEmail.value) === false) {
    inputEmail.classList.add('error-box');
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    return false;
  } else {
    inputEmail.classList.remove('error-box');
    emailError.textContent = "";
    return true;
  };
};

// 비밀번호 없을 때
function checkPassword() {
  if (inputPassword.value === "") {
    inputPassword.classList.add('error-box');
    passwordError.textContent = "비밀번호를 입력해주세요";
    return false;
  } else {
    inputPassword.classList.remove('error-box');
    passwordError.textContent = "";
    return true;
  };
};

// 로그인
function checkSignin() {
  if (inputEmail.value === "" && inputPassword.value === "") {
    emailError.textContent = "이메일을 확인해주세요";
    passwordError.textContent = "비밀번호를 확인해주세요";
  } else {
    emailError.textContent = "";
    passwordError.textContent = "";
  };
};

// folder.html
function goToFolder() {
  if (inputEmail.value === "test@codeit.com" && inputPassword.value === "codeit01") {
    window.location.href = './folder.html';
  };
};

function enterSignin(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    goToFolder();
  };
};

// 눈 버튼
function openPassword(e) {
  const turn = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  inputPassword.setAttribute('type', turn);
  e. target.src = turn === 'password' ? './images/eye-off.svg' : './images/eye-on.svg';
};

inputEmail.addEventListener('focusout', checkEmail);
inputPassword.addEventListener('focusout', checkPassword);
SigninButton.addEventListener('click', goToFolder);
SigninButton.addEventListener('click', checkSignin);
SigninButton.addEventListener('click', enterSignin);
eyeButton.addEventListener('click', openPassword);
