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
  displayLoginError,
  removeLoginError,
  checkInputEmail,
  checkInputPassword,
  displayCheckEmailPassword,
} from "./sign.js";

// 회원가입 시 비밀번호 값과 확인값 검사
function checkPasswordRepeat() {
  removeLoginError($inputPasswordRepeat, ".error-message-password-repeat");
  if ($inputPassword.value !== $inputPasswordRepeat.value) {
    displayLoginError($inputPasswordRepeat, $inputPasswordRepeatBox, "비밀번호가 다릅니다.");
    return false;
  }
  return true;
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
async function checkSignupDuplicateEmail() {
  const inputEmail = { email: $inputEmail.value };

  removeLoginError($inputEmail, ".error-message-email");

  try {
    const emailCheckResponse = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputEmail),
    });

    if (emailCheckResponse.status === 409) {
      displayLoginError($inputEmail, $inputEmailBox, "이미 사용중인 이메일 입니다.");
      return true;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
}

// 회원가입 버튼을 눌렀을 때
async function checkSignup(e) {
  e.preventDefault();

  const isValidEmail = checkInputEmail(); // 이메일 값 유무 확인
  const isValuePassword = checkInputPassword(); // 비밀번호 값 유무 확인
  const isValidPassword = checkVaildPassword(); // 비밀번호 값 유효성 검사
  const isCheckedPassword = checkPasswordRepeat(); // 비밀번호 확인 검사

  // 모든 값이 유효하면
  if (isValidEmail && isValuePassword && isValidPassword && isCheckedPassword) {
    const inputSignup = {
      email: $inputEmail.value,
      password: $inputPassword.value,
    };

    const vaildSignup = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputSignup),
    });
    // 회원가입 성공 시
    if (vaildSignup.status === 200) location.href = "folder.html";
    else displayCheckEmailPassword();
  } else displayCheckEmailPassword(); // 유효한 값이 하나라도 있을 때
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
