import { emailInp } from "../tags.js";
import {
  addWarningSpanTag,
  changeRedBorder,
} from "./addWarningEmailBlankTag.js";
export { validateEmail };

function validateEmail() {
  const emailValue = emailInp.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue) && emailInp.value) {
    changeRedBorder(emailInp);
    addWarningSpanTag(
      "올바른 이메일 주소가 아닙니다.",
      emailInp,
      "removeVaild"
    );
    console.log(emailValue);
  }
}
