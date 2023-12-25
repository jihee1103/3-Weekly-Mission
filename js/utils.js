import {
  pleaseInputEmail,
  notCorrectEmail,
  usingEmail,
  pleaseInputPassword,
  unavailablePassword,
  passwordNotMatch,
} from "./message.js";

//데이터
export const emailInput = document.querySelector("#signup-email");
export const passInput = document.querySelector("#password");
export const inputs = document.querySelectorAll(".input");
export const emailErrorMessage = document.querySelector(".email-message");
export const passwordErrorMessage = document.querySelector(".password-message");
export const checkPasswordErrorMessage = document.querySelector(
  ".check-password-message"
);
export const checkPassInput = document.querySelector("#check-password");
export const signupBtn = document.querySelector(".signup-confirm");

//에러메시지 추가
export const setInputError = function (elements, message) {
  elements.input.classList.add("error-border");
  elements.errorMessage.classList.add("error");
  elements.errorMessage.textContent = message;
};

//에러메시지 삭제
export const removeInputError = function (elements) {
  elements.input.classList.remove("error-border");
  elements.errorMessage.remove();
};

//유저 정보
export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};

export const link = "/folder.html";

//이메일 확인
export function validEmail(event) {
  const email = event.target.value;
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

//비밀번호 확인
export function passChecker(event) {
  const pass = event.target.value;
  const isEightLettersOrMore = pass.length >= 8;
  const hasNumberAndCharacter =
    pass.match(/[0-9]/g) && pass.match(/[a-zA-Z]/gi);

  if (pass.length === 0) {
    setInputError(
      { input: passInput, errorMessage: passwordErrorMessage },
      pleaseInputPassword
    );
  } else if (!isEightLettersOrMore && !hasNumberAndCharacter) {
    setInputError(
      { input: passInput, errorMessage: passwordErrorMessage },
      unavailablePassword
    );
  } else {
    removeInputError({ input: passInput, errorMessage: passwordErrorMessage });
  }
}
