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
    return false;
  } else {
    removeInputError({
      input: checkPassInput,
      errorMessage: checkPasswordErrorMessage,
    });
    return true;
  }
}

//기존 이메일 중복 확인
function usingEmailChecker(event) {
  if (event.target.value === TEST_USER.email) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      usingEmail
    );
    return false;
  }
  return true;
}

//회원가입 확인
function signupConfirm(event) {
  event.preventDefault();

  const isEmailInputValid = validEmail(emailInput.value);
  const isNotUsingEmail = usingEmailChecker(emailInput.value);
  const isPasswordInputValid = passChecker(passInput.value);
  const isCheckPasswordInputValid = passMatchChecker(checkPassInput.value);

  if (
    isEmailInputValid &&
    isNotUsingEmail &&
    isPasswordInputValid &&
    isCheckPasswordInputValid
  ) {
    location.href = link;
  }
}

emailInput.addEventListener("focusout", validEmail);
emailInput.addEventListener("focusout", usingEmailChecker);
passInput.addEventListener("focusout", passChecker);
checkPassInput.addEventListener("focusout", passMatchChecker);
signupBtn.addEventListener("click", signupConfirm);
