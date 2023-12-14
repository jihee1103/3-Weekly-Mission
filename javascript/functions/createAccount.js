import { emailInp, passwordInp, rePasswordInp } from "../tags.js";
import {
  changeRedBorder,
  addWarningSpanTag,
  removePreviousWarning,
} from "./addWarningEmailBlankTag.js";
export { performSignUp };
function vaildateRepassword() {
  const firstPassword = passwordInp.value;
  const secondPassword = rePasswordInp.value;
  if (firstPassword === secondPassword) {
    return true;
  } else {
    return false;
  }
}

function vaildatePassword() {
  const passwordValue = passwordInp.value;
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
  const inputEamil = emailInp.value;
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
  if (!emailInp.value) {
    removePreviousWarning("removeEmail");
    changeRedBorder(emailInp);
    addWarningSpanTag("이메일을 입력해주세요.", emailInp, "removeEmail");
  }
  if (!vaildateRepassword()) {
    removePreviousWarning("removeRepassword");
    changeRedBorder(rePasswordInp);
    addWarningSpanTag(
      "비밀번호가 다릅니다.",
      rePasswordInp,
      "removeRepassword"
    );
  }
  if (!vailedateEmail()) {
    removePreviousWarning("removeEmail");
    changeRedBorder(emailInp);
    addWarningSpanTag("이미 사용 중인 이메일입니다", emailInp, "removeEmail");
  }
  if (!vaildatePassword()) {
    removePreviousWarning("removePassword");
    changeRedBorder(passwordInp);
    addWarningSpanTag(
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      passwordInp,
      "removePassword"
    );
  }
}
