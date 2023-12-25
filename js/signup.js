import { usingEmail, passwordNotMatch } from "./message.js";

import {
  setInputError,
  removeInputError,
  validEmail,
  passChecker,
  link,
  TEST_USER,
  passInput,
  checkPassInput,
  checkPasswordErrorMessage,
  emailInput,
  emailErrorMessage,
  signupBtn,
} from "./utils.js";

//비밀번호 일치 확인
function passMatchChecker() {
  if (passInput.value !== checkPassInput.value) {
    setInputError(
      { input: checkPassInput, errorMessage: checkPasswordErrorMessage },
      passwordNotMatch
    );
  } else {
    removeInputError({
      input: checkPassInput,
      errorMessage: checkPasswordErrorMessage,
    });
  }
}

//기존 이메일 중복 확인
function usingEmailChecker(event) {
  if (event.target.value === TEST_USER.email) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      usingEmail
    );
  }
}

//회원가입 확인
function signupConfirm(e) {}

emailInput.addEventListener("focusout", validEmail);
emailInput.addEventListener("focusout", usingEmailChecker);
passInput.addEventListener("focusout", passChecker);
checkPassInput.addEventListener("focusout", passMatchChecker);
signupBtn.addEventListener("click", signupConfirm);
