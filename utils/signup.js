import {
  $eyeIcon,
  $inputPasswordRepeat,
  $inputPassword,
  $inputPasswordBox,
  $inputPasswordRepeatBox,
  $inputEmail,
  $inputEmailBox,
  $signupButton,
  toggleDisplayPassword,
  users,
  displayLoginError,
  removeLoginError,
  checkInputEmail,
  checkInputPassword,
} from "./sign.js";

// 회원가입 시 비밀번호 값과 확인값 검사
function checkPasswordRepeat() {
  removeLoginError($inputPasswordRepeat, ".error-message-password-repeat");
  if ($inputPassword.value !== $inputPasswordRepeat.value) {
    displayLoginError($inputPasswordRepeat, $inputPasswordRepeatBox, "비밀번호가 다릅니다.");
    return false;
  }
}

// 회원가입 시 비밀번호 유효성 검사
function checkVaildPassword() {
  const reg = /^(.{0,7}|[a-zA-Z]+|\d+)$/;
  removeLoginError($inputPassword, ".error-message-password");
  if (reg.test($inputPassword.value)) {
    displayLoginError(
      $inputPassword,
      $inputPasswordBox,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  }
  return true;
}

// 회원가입 시 이메일 중복 검사
function checkSignupDuplicateEmail() {
  removeLoginError($inputEmail, ".error-message-email");
  for (let user of users) {
    if (user.id === $inputEmail.value) {
      displayLoginError($inputEmail, $inputEmailBox, "이미 사용중인 이메일 입니다.");
      return false;
    }
  }
  return true;
}

function checkSignup(e) {
  const isValidEmail = checkInputEmail();
  const isNoDuplicateEmail = checkSignupDuplicateEmail();
  const isValuePassword = checkInputPassword();
  const isValidPassword = checkVaildPassword();

  if (isValidEmail && isNoDuplicateEmail && isValuePassword && isValidPassword) {
  } else e.preventDefault();
}

// 이벤트 리스너 추가
$eyeIcon.forEach((icon) => {
  icon.addEventListener("click", toggleDisplayPassword);
});
$inputEmail.addEventListener("focusout", () => {
  if (checkInputEmail()) checkSignupDuplicateEmail();
});
$inputPassword.addEventListener("focusout", checkPasswordRepeat);
$inputPassword.addEventListener("focusout", checkVaildPassword);
$inputPasswordRepeat.addEventListener("focusout", checkPasswordRepeat);
$signupButton.addEventListener("click", checkSignup);
