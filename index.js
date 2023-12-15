import {
  $emailInput,
  $passwordInput,
  $loginForm,
  $passwordEye,
  $signUpForm,
  $rePasswordEye,
  $repasswordInput,
} from "./javascript/tags.js";
import { removePreviousWarningSpanTag } from "./javascript/functions/handleSpanTag.js";
import {
  validateEmail,
  addWarningEmailMsg,
} from "./javascript/functions/vaildateEmail.js";
import { addWarningPasswordMsg } from "./javascript/functions/vaildatePassword.js";
import { performLogin } from "./javascript/functions/loginAccount.js";
import { togglePasswordView } from "./javascript/addEyeToggle.js";
import { performSignUp } from "./javascript/functions/createAccount.js";
$emailInput.addEventListener("focusout", (e) => addWarningEmailMsg(e));
$emailInput.addEventListener("focusin", () => {
  removePreviousWarningSpanTag("emailSpan");
  $emailInput.classList.remove("redBorder");
});
$emailInput.addEventListener("focusout", () => validateEmail());
$emailInput.addEventListener("focusin", () =>
  removePreviousWarningSpanTag("vaildEmailSpan")
);

$passwordInput.addEventListener("focusout", () => addWarningPasswordMsg());
$passwordInput.addEventListener("focusin", () => {
  removePreviousWarningSpanTag("passwordSpan");
  $passwordInput.classList.remove("redBorder");
});

$repasswordInput?.addEventListener("focusin", () => {
  removePreviousWarningSpanTag("removeRepassword");
  $repasswordInput.classList.remove("redBorder");
});

$loginForm?.addEventListener("submit", function (e) {
  e.preventDefault();
  performLogin();
});
$loginForm?.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    performLogin();
  }
});
$signUpForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  performSignUp();
});
$signUpForm?.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    performSignUp();
  }
});
$emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
});
$passwordEye.addEventListener("click", togglePasswordView);
$rePasswordEye?.addEventListener("click", togglePasswordView);
