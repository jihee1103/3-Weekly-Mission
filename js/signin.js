import {
  pleaseInputEmail,
  pleaseCheckEmail,
  notCorrectEmail,
  pleaseInputPassword,
  pleaseCheckPassword,
} from "./message.js";

import { setInputError, removeInputError } from "./utils.js";

//데이터
const emailInput = document.querySelector("#signup-email");
const passInput = document.querySelector("#password");
const inputs = document.querySelectorAll(".input");

const emailErrorMessage = document.querySelector(".email-message");
const passwordErrorMessage = document.querySelector(".password-message");
const signinBtn = document.querySelector(".signin-confirm");
const link = "/folder.html";

//이메일 에러
function validEmail(e) {
  const email = e.target.value;
  if (email.length === 0) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      pleaseInputEmail
    );
  } else if (!email.includes("@")) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      notCorrectEmail
    );
  } else {
    removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
  }
}

//비밀번호 에러
function passChecker(e) {
  const pass = e.target.value;
  if (pass.length === 0) {
    setInputError(
      { input: passInput, errorMessage: passwordErrorMessage },
      pleaseInputPassword
    );
  } else {
    removeInputError({ input: passInput, errorMessage: passwordErrorMessage });
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
