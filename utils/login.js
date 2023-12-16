import {
  $inputEmail,
  $inputPassword,
  $inputEmailBox,
  $inputPasswordBox,
  displayLoginError,
  removeLoginError,
} from "./signinErrorMessage.js";

const $loginButton = document.querySelector(".login-btn");

let users = [
  {
    id: "test@codeit.com",
    password: "codeit101",
  },
];

function pleaseCheckEmailPassword() {
  removeLoginError($inputEmail, ".error-message-email");
  removeLoginError($inputPassword, ".error-message-password");
  displayLoginError($inputEmail, $inputEmailBox, "이메일을 확인해주세요.");
  displayLoginError($inputPassword, $inputPasswordBox, "비밀번호를 확인해주세요.");
}

// 이메일, 비밀번호 검사
function checkLogin(e) {
  for (let user of users) {
    if (user.id === $inputEmail.value && user.password === $inputPassword.value) {
      return;
    } else {
      pleaseCheckEmailPassword();
      e.preventDefault();
      return;
    }
  }
}

$loginButton.addEventListener("click", checkLogin);
