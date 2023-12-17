import {
  inputEmail,
  inputPassword,
  emailErrorMessage,
  passwordErrorMessage,
  inputSection,
} from "./ingredient/tags.js";

import emailError from "./ingredient/error_message.js";

import showHidePassword from "./ingredient/show_hide.js";

const signupButton = document.querySelector("#signup-button");
const passwordCheckError = document.querySelector("#password-check-error");
const inputPasswordCheck = document.querySelector("#password-check-input");

const CHECK_PASSWORD = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,}$/;

function checkEmailError() {
  if (inputEmail.value === "test@codeit.com") {
    inputEmail.classList.add("error-input");
    emailErrorMessage.textContent = "이미 사용 중인 이메일입니다.";
    emailErrorMessage.style.display = "INLINE";
  } else {
    return emailError();
  }
}

function checkPasswordError() {
  const value = inputPassword.value;
  if (!CHECK_PASSWORD.test(value)) {
    passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordErrorMessage.style.display = "INLINE";
    inputPassword.classList.add("error-input");
  } else {
    passwordErrorMessage.style.display = "NONE";
    inputPassword.classList.remove("error-input");
    return "pass";
  }
}

function checkPasswordSameError() {
  const value = inputPasswordCheck.value;
  if (inputPassword.value !== value) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않아요.";
    passwordCheckError.style.display = "INLINE";
    inputPasswordCheck.classList.add("error-input");
  } else {
    passwordCheckError.style.display = "NONE";
    inputPasswordCheck.classList.remove("error-input");
    return "pass";
  }
}

function checkSignup() {
  if (checkEmailError() && checkPasswordError() && checkPasswordSameError()) {
    location.href = "folder.html";
  }
}

function pressEnterSignup(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    checkSignup();
  }
}

inputEmail.addEventListener("focusout", checkEmailError);
inputPassword.addEventListener("focusout", checkPasswordError);
inputPassword.addEventListener("focusout", checkPasswordSameError);
inputPasswordCheck.addEventListener("input", checkPasswordSameError);

signupButton.addEventListener("click", checkSignup);
inputSection.addEventListener("keypress", pressEnterSignup);

inputSection.addEventListener("click", showHidePassword);
