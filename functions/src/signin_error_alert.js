import {
  inputEmail,
  inputPassword,
  emailAlert,
  passwordAlert,
} from "./signin_tags.js";

const REGEXP = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

function errorEmailAlert() {
  if (REGEXP.test(inputEmail.value)) {
    emailAlert.style.display = "NONE";
    inputEmail.classList.remove("alert-input");
  } else {
    if (!inputEmail.value) {
      emailAlert.textContent = "이메일을 입력해 주세요.";
    } else {
      emailAlert.textContent = "올바른 이메일 주소가 아닙니다.";
    }
    emailAlert.style.display = "INLINE";
    inputEmail.classList.add("alert-input");
  }
}

function errorPasswordAlert() {
  if (inputPassword.value) {
    passwordAlert.style.display = "NONE";
    inputPassword.classList.remove("alert-input");
  } else {
    passwordAlert.textContent = "비밀번호를 입력해 주세요.";
    passwordAlert.style.display = "INLINE";
    inputPassword.classList.add("alert-input");
  }
}

export { errorEmailAlert, errorPasswordAlert };
