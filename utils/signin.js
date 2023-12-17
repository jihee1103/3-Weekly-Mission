import {
  $inputEmail,
  $inputPassword,
  $inputEmailBox,
  $inputPasswordBox,
  $loginButton,
  $eyeIcon,
  displayLoginError,
  removeLoginError,
  checkInputEmail,
  checkInputPassword,
  users,
  toggleDisplayPassword,
} from "./sign.js";

// 로그인 실패시 에러 메세지
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

// 로그인 이벤트 리스너 추가
if ($loginButton) $loginButton.addEventListener("click", checkLogin);
$eyeIcon.forEach((icon) => {
  icon.addEventListener("click", toggleDisplayPassword);
});

$inputEmail.addEventListener("focusout", checkInputEmail);
$inputPassword.addEventListener("focusout", checkInputPassword);
