import {
  $emailInput,
  $passwordInput,
  $passwordEye,
  $signUpForm,
  $rePasswordEye,
  $repasswordInput,
} from "./tags.js";
import { removePreviousWarningSpanTag } from "./functions/handleSpanTag.js";
import {
  validateEmail,
  addWarningEmailMsg,
} from "./functions/vaildateEmail.js";
import { addWarningPasswordMsg } from "./functions/vaildatePassword.js";
import { togglePasswordView } from "./addEyeToggle.js";
import { performSignUp } from "./functions/createAccount.js";
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

$repasswordInput.addEventListener("focusin", () => {
  removePreviousWarningSpanTag("removeRepassword");
  $repasswordInput.classList.remove("redBorder");
});

$signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  performSignUp();
});
$signUpForm.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    performSignUp();
  }
});
$emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
});
$passwordEye.addEventListener("click", togglePasswordView);
$rePasswordEye.addEventListener("click", togglePasswordView);
