import {
  $inputEmail,
  $inputPassword,
  $inputEmailBox,
  $inputPasswordBox,
  displayLoginError,
  removeLoginError,
} from "./signinErrorMessage.js";

const $loginButton = document.querySelector(".login-btn");
const $eyeIcon = document.querySelectorAll(".eye");
const $inputPasswordRepeat = document.querySelector(".password-repeat-inputbox");
const $inputPasswordRepeatBox = document.querySelector(".login-input-password-repeat");

let users = [
  {
    id: "test@codeit.com",
    password: "codeit101",
  },
];

// 로그인 할 때, 이메일, 비밀번호 검사
function pleaseCheckEmailPassword() {
  removeLoginError($inputEmail, ".error-message-email");
  removeLoginError($inputPassword, ".error-message-password");
  displayLoginError($inputEmail, $inputEmailBox, "이메일을 확인해주세요.");
  displayLoginError($inputPassword, $inputPasswordBox, "비밀번호를 확인해주세요.");
}

// 로그인 할 때, 이메일, 비밀번호 검사
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

// 회원가입 시 비밀번호 확인
function checkPasswordRepeat() {
  removeLoginError($inputPasswordRepeat, ".error-message-password-repeat");
  if ($inputPassword.value !== $inputPasswordRepeat.value) {
    displayLoginError($inputPasswordRepeat, $inputPasswordRepeatBox, "비밀번호가 다릅니다.");
  }
}

// 눈 모양 아이콘
function toggleDisplayPassword(e) {
  const parentEle = e.target.parentElement;
  const passwordInputBox = parentEle.children[0];
  const currentType = passwordInputBox.type;
  passwordInputBox.type = currentType === "password" ? "text" : "password";
  e.target.style.backgroundImage =
    currentType === "password" ? "url(/asset/eye-on.svg)" : "url(/asset/eye-off.svg)";
}

// 이벤트 리스너 추가
$loginButton.addEventListener("click", checkLogin);
$eyeIcon.forEach((icon) => {
  icon.addEventListener("click", toggleDisplayPassword);
});
$inputPasswordRepeat.addEventListener("focusout", checkPasswordRepeat);
$inputPassword.addEventListener("focusout", checkPasswordRepeat);
