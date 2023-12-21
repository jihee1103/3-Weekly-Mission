import { $emailInput, $passwordInput, $repasswordInput } from "../tags.js";
import { changeRedBorder, makeWarningSpanTag } from "./handleSpanTag.js";
import { vaildateFormEmail, validateEmail } from "./vaildateEmail.js";
export { performSignUp };

function vaildateRepassword() {
  const firstPassword = $passwordInput.value;
  const secondPassword = $repasswordInput.value;
  if (firstPassword === secondPassword) {
    return true;
  } else {
    return false;
  }
}

function vaildatePassword() {
  const passwordValue = $passwordInput.value;
  if (
    passwordValue.length < 8 ||
    /^\d+$/.test(passwordValue) ||
    /^[a-zA-Z]+$/.test(passwordValue)
  ) {
    return false;
  } else {
    return true;
  }
}

async function vailedateDuplicateEmail() {
  const email = $emailInput.value;
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    if (response.status === 409) {
      changeRedBorder($emailInput);
      makeWarningSpanTag(
        "이미 사용 중인 이메일입니다",
        $emailInput,
        "emailSpan"
      );
      return;
    }
    const data = await response.json();
    return "pass";
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
  }
}

async function performSignUp() {
  const isValid = await vaildateSignUp();
  if (isValid) {
    const email = $emailInput.value;
    const password = $passwordInput.value;
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log("성공");
    const data = await response.json();
    localStorage.setItem("accessToken", data.data.accessToken);
    window.location.href = "/folder";
  }
}

async function vaildateSignUp() {
  let successVaild = true;
  if (!$emailInput.value) {
    changeRedBorder($emailInput);
    makeWarningSpanTag("이메일을 입력해주세요.", $emailInput, "emailSpan");
    successVaild = false;
  }
  if (!vaildateFormEmail()) {
    changeRedBorder($emailInput);
    makeWarningSpanTag(
      "올바른 이메일 주소가 아닙니다.",
      $emailInput,
      "vaildEmailSpan"
    );
    successVaild = false;
  }
  const duplicateEmailResult = await vailedateDuplicateEmail();
  if (!(duplicateEmailResult === "pass")) {
    successVaild = false;
  }
  if (!vaildateRepassword()) {
    changeRedBorder($repasswordInput);
    makeWarningSpanTag(
      "비밀번호가 다릅니다.",
      $repasswordInput,
      "removeRepassword"
    );
    successVaild = false;
  }
  if (!vaildatePassword()) {
    changeRedBorder($passwordInput);
    makeWarningSpanTag(
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      $passwordInput,
      "passwordSpan"
    );
    successVaild = false;
  }
  return successVaild;
}
