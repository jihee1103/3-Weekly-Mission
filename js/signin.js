import {
  pleaseInputEmail,
  pleaseCheckEmail,
  notCorrectEmail,
  pleaseInputPassword,
  pleaseCheckPassword,
} from "./message.js";

import {
  setInputError,
  removeInputError,
  TEST_USER,
  validEmail,
  passChecker,
  link,
} from "./utils.js";

//데이터
const emailInput = document.querySelector("#signup-email");
const passInput = document.querySelector("#password");
const inputs = document.querySelectorAll(".input");

const emailErrorMessage = document.querySelector(".email-message");
const passwordErrorMessage = document.querySelector(".password-message");
const signinBtn = document.querySelector(".signin-confirm");

//로그인 확인
function signinConfirm(event) {
  event.preventDefault();

  if (
    emailInput.value === TEST_USER.email &&
    passInput.value === TEST_USER.password
  ) {
    location.href = link;
    return;
  } else {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      pleaseCheckEmail
    );
    setInputError(
      { input: passInput, errorMessage: passwordErrorMessage },
      pleaseCheckPassword
    );
  }
}

emailInput.addEventListener("focusout", validEmail);
passInput.addEventListener("focusout", passChecker);
signinBtn.addEventListener("click", signinConfirm);
