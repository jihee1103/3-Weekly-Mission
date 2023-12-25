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
const secondPassInput = document.querySelector("#check-password");
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

function signupPassChecker(e) {
  if (passInput.value !== secondPassInput.value) {
    checkPasswordErrorMessage.textContent = passwordNotMatch;
    checkPasswordErrorMessage.classList.add("error");
    secondPassInput.classList.add("error-border");
  } else {
    secondPassInput.classList.remove("error-border");
    checkPasswordErrorMessage.remove();
  }
}

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

emailInput.addEventListener("focusout", validEmail);
passInput.addEventListener("focusout", passChecker);
secondPassInput.addEventListener("focusout", signupPassChecker);
signinBtn.addEventListener("click", signinConfirm);
