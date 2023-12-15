import { makeWarningSpanTag, changeRedBorder } from "./handleSpanTag.js";
import { $passwordInput } from "../tags.js";
export { addWarningPasswordMsg };

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
