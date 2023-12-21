import { $emailInput } from "../tags.js";
import { makeWarningSpanTag, changeRedBorder } from "./handleSpanTag.js";
export { validateEmail, addWarningEmailMsg, vaildateFormEmail };

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
