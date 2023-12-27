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

  if (trySignin) {
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

emailInput.addEventListener("focusout", (event) =>
  validEmail(event.target.value)
);
passInput.addEventListener("focusout", (event) =>
  passChecker(event.target.value)
);
signinBtn.addEventListener("click", signinConfirm);

//로그인 체크
const trySignin = async function () {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/docs/api/sign-in",
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
