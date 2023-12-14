import {
  addWarningSpanTag,
  changeRedBorder,
} from "./addWarningEmailBlankTag.js";
import { passwordInp } from "../tags.js";
export { addWarningPasswordMsg };

function addWarningPasswordMsg() {
  if (!passwordInp.value) {
    changeRedBorder(passwordInp);
    addWarningSpanTag(
      "비밀번호를 입력해주세요.",
      passwordInp,
      "removePassword"
    );
  }
}
