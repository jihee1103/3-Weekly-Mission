import { emailInp, passwordInp, rePasswordInp } from "../tags.js";
import {
  changeRedBorder,
  addWarningSpanTag,
} from "./addWarningEmailBlankTag.js";
export { performSignUp };
function vaildatePassword() {
  const firstPassword = passwordInp.value;
  const secondPassword = rePasswordInp.value;
  if (passwordInp.value === rePasswordInp.value) {
    return true;
  } else {
    return false;
  }
}

function performSignUp() {
  if (vaildatePassword()) {
  } else {
    changeRedBorder(rePasswordInp);
    addWarningSpanTag("비밀번호가 다릅니다.", rePasswordInp, "removePassword");
  }
}
