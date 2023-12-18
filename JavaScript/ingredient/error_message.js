import { inputEmail, emailErrorMessage } from "./tags.js";

const REGEXP_EMAIL = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]{2,}/;

function emailError() {
  if (REGEXP_EMAIL.test(inputEmail.value)) {
    emailErrorMessage.style.display = "NONE";
    inputEmail.classList.remove("error-input");
    return "pass";
  } else {
    if (!inputEmail.value) {
      emailErrorMessage.textContent = "이메일을 입력해 주세요.";
    } else {
      emailErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    }
    emailErrorMessage.style.display = "INLINE";
    inputEmail.classList.add("error-input");
  }
}

export default emailError;
