import {
  inputEmail,
  inputPassword,
  emailErrorMessage,
  passwordErrorMessage,
  inputSection,
} from "./ingredient/tags.js";

import emailError from "./ingredient/error_message.js";
import showHidePassword from "./ingredient/show_hide.js";

const signinButton = document.querySelector("#signin-button");

function passwordError() {
  if (inputPassword.value) {
    passwordErrorMessage.style.display = "NONE";
    inputPassword.classList.remove("error-input");
  } else {
    passwordErrorMessage.textContent = "비밀번호를 입력해 주세요.";
    passwordErrorMessage.style.display = "INLINE";
    inputPassword.classList.add("error-input");
  }
}

function checkSignin() {
  if (
    inputEmail.value === "test@codeit.com" &&
    inputPassword.value === "codeit101"
  ) {
    location.href = "folder.html";
  } else {
    emailErrorMessage.textContent = "이메일을 확인해 주세요.";
    passwordErrorMessage.textContent = "비밀번호를 확인해 주세요.";
    emailErrorMessage.style.display = "INLINE";
    passwordErrorMessage.style.display = "INLINE";
    inputEmail.classList.add("error-input");
    inputPassword.classList.add("error-input");
  }
}

function pressEnterSignin(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    checkSignin();
  }
}

inputEmail.addEventListener("focusout", emailError);
inputPassword.addEventListener("focusout", passwordError);

signinButton.addEventListener("click", checkSignin);
inputSection.addEventListener("keypress", pressEnterSignin);

inputSection.addEventListener("click", showHidePassword);
