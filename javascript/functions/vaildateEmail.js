import { $emailInput } from "../tags.js";
import { makeWarningSpanTag, changeRedBorder } from "./handleSpanTag.js";
export {
  validateEmail,
  addWarningEmailMsg,
  vaildateFormEmail,
  vailedateDuplicateEmail,
};

function addWarningEmailMsg() {
  if (!$emailInput.value) {
    changeRedBorder($emailInput);
    makeWarningSpanTag("이메일을 입력해주세요.", $emailInput, "emailSpan");
  }
}

function validateEmail() {
  if (!vaildateFormEmail()) {
    changeRedBorder($emailInput);
    makeWarningSpanTag(
      "올바른 이메일 주소가 아닙니다.",
      $emailInput,
      "vaildEmailSpan"
    );
  }
}

function vaildateFormEmail() {
  const emailValue = $emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue) && emailValue) {
    return false;
  }
  return true;
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
