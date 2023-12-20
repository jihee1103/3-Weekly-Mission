import {
  $emailInput,
  $passwordInput,
  $loginForm,
  $passwordEye,
} from "./tags.js";
import { removePreviousWarningSpanTag } from "./functions/handleSpanTag.js";
import {
  validateEmail,
  addWarningEmailMsg,
} from "./functions/vaildateEmail.js";
import { addWarningPasswordMsg } from "./functions/vaildatePassword.js";
import { performLogin } from "./functions/loginAccount.js";
import { togglePasswordView } from "./addEyeToggle.js";

$emailInput.addEventListener("focusout", addWarningEmailMsg);
$emailInput.addEventListener("focusin", () => {
  removePreviousWarningSpanTag("emailSpan");
  $emailInput.classList.remove("redBorder");
});
$emailInput.addEventListener("focusout", validateEmail);
$emailInput.addEventListener("focusin", () =>
  removePreviousWarningSpanTag("vaildEmailSpan")
);

$passwordInput.addEventListener("focusout", addWarningPasswordMsg);
$passwordInput.addEventListener("focusin", () => {
  removePreviousWarningSpanTag("passwordSpan");
  $passwordInput.classList.remove("redBorder");
});

$loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  performLogin();
});
$loginForm.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    performLogin();
  }
});

$emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
});
$passwordEye.addEventListener("click", togglePasswordView);
