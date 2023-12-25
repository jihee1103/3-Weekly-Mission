const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const password_regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

function validateInput(inputEl, messageEl, message) {
  messageEl.textContent = message;
  if (message) {
    inputEl.classList.add("input-error");
    return false;
  }

  inputEl.className = "sign-input";
  return true;
}
