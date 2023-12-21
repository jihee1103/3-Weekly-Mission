import { makeWarningSpanTag, changeRedBorder } from "./handleSpanTag.js";
import { $passwordInput, $repasswordInput } from "../tags.js";
export { addWarningPasswordMsg, vaildateRepassword, vaildatePassword };

function addWarningPasswordMsg() {
  if (!$passwordInput.value) {
    changeRedBorder($passwordInput);
    makeWarningSpanTag(
      "비밀번호를 입력해주세요.",
      $passwordInput,
      "passwordSpan"
    );
  }
}

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
