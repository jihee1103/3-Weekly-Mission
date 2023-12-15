import {
  inputEmail,
  inputPassword,
  emailAlert,
  passwordAlert,
  inputSection,
} from "./ingredient/tags.js";

import errorEmailAlert from "./ingredient/error_alert.js";

import showHidePassword from "./ingredient/show_hide.js";

const signupButton = document.querySelector("#signup-button");
const passwordCheckAlert = document.querySelector("#password-check-alert");
const inputPasswordCheck = document.querySelector("#password-check-input");

const CHECK_PASSWORD = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,}$/;

function checkEmailAlert() {
  if (inputEmail.value === "test@codeit.com") {
    inputEmail.classList.add("alert-input");
    emailAlert.textContent = "이미 사용 중인 이메일입니다.";
    emailAlert.style.display = "INLINE";
  } else {
    return errorEmailAlert();
  }
}

function checkPasswordAlert() {
  const value = inputPassword.value;
  if (!CHECK_PASSWORD.test(value)) {
    passwordAlert.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordAlert.style.display = "INLINE";
    inputPassword.classList.add("alert-input");
  } else {
    passwordAlert.style.display = "NONE";
    inputPassword.classList.remove("alert-input");
    return "pass";
  }
}

function checkPasswordSameAlert() {
  const value = inputPasswordCheck.value;
  if (inputPassword.value !== value) {
    passwordCheckAlert.textContent = "비밀번호가 일치하지 않아요.";
    passwordCheckAlert.style.display = "INLINE";
    inputPasswordCheck.classList.add("alert-input");
  } else {
    passwordCheckAlert.style.display = "NONE";
    inputPasswordCheck.classList.remove("alert-input");
    return "pass";
  }
}

function checkSignup() {
  if (checkEmailAlert() && checkPasswordAlert() && checkPasswordSameAlert()) {
    location.href = "folder.html";
  }
}

function pressEnterSignup(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    checkSignup();
  }
}

inputEmail.addEventListener("focusout", checkEmailAlert);
inputPassword.addEventListener("focusout", checkPasswordAlert);
inputPassword.addEventListener("focusout", checkPasswordSameAlert);
inputPasswordCheck.addEventListener("input", checkPasswordSameAlert);

signupButton.addEventListener("click", checkSignup);
inputSection.addEventListener("keypress", pressEnterSignup);

inputSection.addEventListener("click", showHidePassword);
