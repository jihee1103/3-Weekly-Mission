export { removePreviousWarningSpanTag, makeWarningSpanTag, changeRedBorder };

function removePreviousWarningSpanTag(removeText) {
  const existingWarning = document.querySelector(`.${removeText}`);
  if (existingWarning) {
    existingWarning.remove();
  }
}

function makeWarningSpanTag(text, location, removeText) {
  const addSpan = document.createElement("span");
  addSpan.textContent = text;
  location.after(addSpan);
  addSpan.classList.add(removeText);
  addSpan.classList.add("styleWarningText");
  console.log(this);
}

function changeRedBorder(location) {
  location.classList.add("redBorder");
}
