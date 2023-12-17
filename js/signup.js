import {
  inputEmail,
  emailError,
  inputPassword,
  passwordError,
  inputPasswordDouble,
  passwordDoubleError,
  SignupButton,
  eyeButton,
  eyeButtonDouble,
} from './tags.js';

const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

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
  } else if (inputEmail.value === "test@codeit.com") {
    inputEmail.classList.add('error-box');
    emailError.textContent = "이미 사용 중인 이메일입니다";
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
  } else if (passwordRegex.test(inputPassword.value) === false) {
    inputPassword.classList.add('error-box');
    passwordError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
    return false;
  } else {
    inputPassword.classList.remove('error-box');
    passwordError.textContent = "";
    return true;
  };
};

function checkPasswordDouble() {
  if (inputPasswordDouble.value === "") {
    inputPasswordDouble.classList.add('error-box');
    passwordDoubleError.textContent = "비밀번호를 다시 한번 입력해주세요";
    return false;
  } else if (inputPasswordDouble.value !== inputPassword.value) {
    inputPasswordDouble.classList.add('error-box');
    passwordDoubleError.textContent = "비밀번호가 일치하지 않아요";
    return false;
  } else {
    inputPasswordDouble.classList.remove('error-box');
    passwordDoubleError.textContent = "";
    return true;
  };
};

// 회원가입 시 folder.html
function goToFolder() {
  if (checkEmail() && checkPassword() && checkPasswordDouble()) {
    window.location.href = "./folder.html";
  };
};

function enterSignup(e) {
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

function openPasswordDouble(e) {
  const turn = inputPasswordDouble.getAttribute('type') === 'password' ? 'text' : 'password';
  inputPasswordDouble.setAttribute('type', turn);
  e. target.src = turn === 'password' ? './images/eye-off.svg' : './images/eye-on.svg';
};

inputEmail.addEventListener('focusout', checkEmail);
inputPassword.addEventListener('focusout', checkPassword);
inputPasswordDouble.addEventListener('focusout', checkPasswordDouble);
SignupButton.addEventListener('click', goToFolder);
SignupButton.addEventListener('click', enterSignup);
eyeButton.addEventListener('click', openPassword);
eyeButtonDouble.addEventListener('click', openPasswordDouble);
