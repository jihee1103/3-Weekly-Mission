export { performLogin };
import { emailInp, passwordInp } from "../tags.js";
import {
  addWarningSpanTag,
  changeRedBorder,
  removePreviousWarning,
} from "./addWarningEmailBlankTag.js";
function performLogin() {
  removePreviousWarning("removeEmail");
  removePreviousWarning("removePassword");
  if (
    emailInp.value === "test@codeit.com" &&
    passwordInp.value === "codeit101"
  ) {
    window.location.href = "/folder";
  } else {
    addWarningSpanTag("이메일을 확인해주세요", emailInp, "removeEmail");
    addWarningSpanTag("비밀번호를 확인해주세요", passwordInp, "removePassword");
    changeRedBorder(emailInp);
    changeRedBorder(passwordInp);
  }
}
