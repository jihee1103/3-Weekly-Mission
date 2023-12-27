import {
  usingEmail,
  passwordNotMatch,
  pleaseCheckEmail,
  pleaseCheckPassword,
} from "./message.js";

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
  passwordErrorMessage,
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
function usingEmailChecker(email) {
  if (checkEmailDuplication) {
    setInputError(
      { input: emailInput, errorMessage: emailErrorMessage },
      usingEmail
    );
    return false;
  }
  return true;
}

//이메일 중복 체크
const checkEmailDuplication = async function () {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/docs/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput.value,
        }),
      }
    );

    if (response.status !== 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

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
    isCheckPasswordInputValid &&
    trySignup
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

//회원가입 체크
const trySignup = async function () {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/docs/api/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput.value,
          password: passInput.value,
        }),
      }
    );
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

emailInput.addEventListener("focusout", (event) =>
  validEmail(event.target.value)
);
emailInput.addEventListener("focusout", (event) =>
  usingEmailChecker(event.target.value)
);
passInput.addEventListener("focusout", (event) =>
  passChecker(event.target.value)
);
checkPassInput.addEventListener("focusout", passMatchChecker);
signupBtn.addEventListener("click", signupConfirm);
