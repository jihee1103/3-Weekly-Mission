import {
  inputEmail,
  inputPassword,
  emailAlert,
  passwordAlert,
  inputSection,
} from "./src/tags.js";

import errorEmailAlert from "./src/error_alert.js";
import showHidePassword from "./src/show_hide.js";

const signinButton = document.querySelector("#signin-button");

function errorPasswordAlert() {
  if (inputPassword.value) {
    passwordAlert.style.display = "NONE";
    inputPassword.classList.remove("alert-input");
  } else {
    passwordAlert.textContent = "비밀번호를 입력해 주세요.";
    passwordAlert.style.display = "INLINE";
    inputPassword.classList.add("alert-input");
  }
}

function checkSignin() {
  if (
    inputEmail.value === "test@codeit.com" &&
    inputPassword.value === "codeit101"
  ) {
    location.href = "folder.html";
  } else {
    emailAlert.textContent = "이메일을 확인해 주세요.";
    passwordAlert.textContent = "비밀번호를 확인해 주세요.";
    emailAlert.style.display = "INLINE";
    passwordAlert.style.display = "INLINE";
    inputEmail.classList.add("alert-input");
    inputPassword.classList.add("alert-input");
  }
}

function pressEnterSignin(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    checkSignin();
  }
}

inputEmail.addEventListener("focusout", errorEmailAlert);
inputPassword.addEventListener("focusout", errorPasswordAlert);

signinButton.addEventListener("click", checkSignin);
inputSection.addEventListener("keypress", pressEnterSignin);

inputSection.addEventListener("click", showHidePassword);
