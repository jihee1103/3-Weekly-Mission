import { inputPassword, eyeIcon } from "./signin_tags.js";

function showAndHidePassword() {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    eyeIcon.src = "images/eye-on.svg";
    eyeIcon.alt = "눈 아이콘";
  } else {
    inputPassword.type = "password";
    eyeIcon.src = "images/eye-off.svg";
    eyeIcon.alt = "눈에 빗금친 아이콘";
  }
}

export default showAndHidePassword;
