import { inputEmail, emailAlert } from "./tags.js";

const REGEXP_EMAIL = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

function errorEmailAlert() {
  if (REGEXP_EMAIL.test(inputEmail.value)) {
    emailAlert.style.display = "NONE";
    inputEmail.classList.remove("alert-input");
    return "pass";
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

export default errorEmailAlert;
