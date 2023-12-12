import {
  inputEmail,
  inputPassword,
  emailAlert,
  passwordAlert,
} from "./signin_tags.js";

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

function pressEnter(e) {
  if (e.target.tagName === "INPUT" && e.key === "Enter") {
    checkSignin();
  }
}

export { checkSignin, pressEnter };
