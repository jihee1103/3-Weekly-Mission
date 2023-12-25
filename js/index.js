import {
  pleaseInputEmail,
  pleaseCheckEmail,
  notCorrectEmail,
  usingEmail,
  pleaseInputPassword,
  unavailablePassword,
  passwordNotMatch,
  pleaseCheckPassword,
} from "./message.js";

//데이터
const emailInput = document.querySelector("#signup-email");
const passInput = document.querySelector("#password");
const inputs = document.querySelectorAll(".input");
const emailErrorMessage = document.querySelector(".email-message");
const passwordErrorMessage = document.querySelector(".password-message");
const checkPasswordErrorMessage = document.querySelector(
  ".check-password-message"
);
const checkPassInput = document.querySelector("#check-password");
const signinBtn = document.querySelector(".signin-confirm");
const signupBtn = document.querySelector(".signup-confirm");
const link = "/folder.html";

//이메일 에러
function validEmail(e) {
  const email = e.target.value;
  if (email.length === 0) {
    emailErrorMessage.textContent = pleaseInputEmail;
    emailErrorMessage.classList.add("error");
    emailInput.classList.add("error-border");
  } else if (!email.includes("@")) {
    emailErrorMessage.textContent = notCorrectEmail;
    emailInput.classList.add("error-border");
    inputs[0].lastElementChild.classList.add("error-font");
  } else {
    emailInput.classList.remove("error-border");
    emailErrorMessage.remove();
  }
}

//비밀번호 에러
function passChecker(e) {
  const pass = e.target.value;
  if (pass.length === 0) {
    passwordErrorMessage.textContent = pleaseInputPassword;
    passwordErrorMessage.classList.add("error");
    passInput.classList.add("error-border");
  } else {
    passInput.classList.remove("error-border");
    passwordErrorMessage.remove();
  }
}

//비밀번호 일치 확인
function passMatchChecker(e) {
  if (passInput.value !== checkPassInput.value) {
    checkPasswordErrorMessage.textContent = passwordNotMatch;
    checkPasswordErrorMessage.classList.add("error");
    checkPassInput.classList.add("error-border");
  } else {
    checkPassInput.classList.remove("error-border");
    checkPasswordErrorMessage.remove();
  }
}

//로그인 확인
function signinConfirm(e) {
  if (
    emailInput.value === "test@codeit.com" &&
    passInput.value === "codeit101"
  ) {
    location.href = link;
  } else {
    emailErrorMessage.textContent = pleaseCheckEmail;
    emailErrorMessage.classList.add("error");
    emailInput.classList.add("error-border");

    passwordErrorMessage.textContent = pleaseCheckPassword;
    passwordErrorMessage.classList.add("error");
    passInput.classList.add("error-border");
  }
}

emailInput.addEventListener("change", validEmail);
passInput.addEventListener("change", passChecker);
checkPassInput.addEventListener("change", passMatchChecker);
signinBtn.addEventListener("click", signinConfirm);
