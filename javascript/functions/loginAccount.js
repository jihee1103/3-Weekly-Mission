export { performLogin };
import { $emailInput, $passwordInput } from "../tags.js";
import {
  makeWarningSpanTag,
  changeRedBorder,
  removePreviousWarningSpanTag,
} from "./handleSpanTag.js";
function performLogin() {
  removePreviousWarningSpanTag("emailSpan");
  removePreviousWarningSpanTag("passwordSpan");
  if (
    $emailInput.value === "test@codeit.com" &&
    $passwordInput.value === "codeit101"
  ) {
    window.location.href = "/folder";
  } else {
    makeWarningSpanTag("이메일을 확인해주세요", $emailInput, "emailSpan");
    makeWarningSpanTag(
      "비밀번호를 확인해주세요",
      $passwordInput,
      "passwordSpan"
    );
    changeRedBorder($emailInput);
    changeRedBorder($passwordInput);
  }
}
