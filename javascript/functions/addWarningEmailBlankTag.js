import { emailInp } from "../tags.js";

export {
  removePreviousWarning,
  addWarningSpanTag,
  addWarningEmailMsg,
  changeRedBorder,
};

function removePreviousWarning(removeText) {
  const existingWarning = document.querySelector(`.${removeText}`);
  if (existingWarning) {
    existingWarning.remove();
  }
}

function addWarningSpanTag(text, location, removeText) {
  const addSpan = document.createElement("span");
  addSpan.textContent = text;
  location.after(addSpan);
  addSpan.classList.add(removeText);
  addSpan.classList.add("styleWarningText");
  console.log(location);
}

function addWarningEmailMsg(e) {
  if (!e.target.value) {
    changeRedBorder(emailInp);
    addWarningSpanTag("이메일을 입력해주세요.", emailInp, "removeEmail");
  }
}

function changeRedBorder(location) {
  location.classList.add("redBorder");
}
