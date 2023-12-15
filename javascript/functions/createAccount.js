import { $emailInput, $passwordInput, $repasswordInput } from "../tags.js";
import {
  changeRedBorder,
  makeWarningSpanTag,
  removePreviousWarningSpanTag,
} from "./handleSpanTag.js";
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

function vailedateEmail() {
  const inputEamil = $emailInput.value;
  const dataEmail = "test@codeit.com";
  if (inputEamil === dataEmail) {
    return false;
  } else {
    return true;
  }
}

function performSignUp() {
  if (vaildateRepassword() && vailedateEmail() && vaildatePassword()) {
    window.location.href = "/folder";
  }
  if (!$emailInput.value) {
    removePreviousWarningSpanTag("emailSpan");
    changeRedBorder($emailInput);
    makeWarningSpanTag("이메일을 입력해주세요.", $emailInput, "emailSpan");
  }
  if (!vaildateRepassword()) {
    removePreviousWarningSpanTag("removeRepassword");
    changeRedBorder($repasswordInput);
    makeWarningSpanTag(
      "비밀번호가 다릅니다.",
      $repasswordInput,
      "removeRepassword"
    );
  }
  if (!vailedateEmail()) {
    removePreviousWarningSpanTag("emailSpan");
    changeRedBorder($emailInput);
    makeWarningSpanTag("이미 사용 중인 이메일입니다", $emailInput, "emailSpan");
  }
  if (!vaildatePassword()) {
    removePreviousWarningSpanTag("passwordSpan");
    changeRedBorder($passwordInput);
    makeWarningSpanTag(
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      $passwordInput,
      "passwordSpan"
    );
  }
}
