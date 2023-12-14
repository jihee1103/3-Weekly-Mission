import {
  emailInp,
  passwordInp,
  loginForm,
  passwordEye,
  signUpForm,
  rePasswordEye,
  rePasswordInp,
} from "./javascript/tags.js";
import {
  addWarningEmailMsg,
  removePreviousWarning,
} from "./javascript/functions/addWarningEmailBlankTag.js";
import { validateEmail } from "./javascript/functions/addwarningEmailFormTag.js";
import { addWarningPasswordMsg } from "./javascript/functions/addWarningPasswordBlankTag.js";
import { performLogin } from "./javascript/functions/loginAccount.js";
import { togglePasswordView } from "./javascript/addEyeToggle.js";
import { performSignUp } from "./javascript/functions/createAccount.js";
emailInp.addEventListener("focusout", (e) => addWarningEmailMsg(e));
emailInp.addEventListener("focusin", () => {
  removePreviousWarning("removeEmail");
  emailInp.classList.remove("redBorder");
});
emailInp.addEventListener("focusout", () => validateEmail());
emailInp.addEventListener("focusin", () =>
  removePreviousWarning("removeVaild")
);

passwordInp.addEventListener("focusout", () => addWarningPasswordMsg());
passwordInp.addEventListener("focusin", () => {
  removePreviousWarning("removePassword");
  passwordInp.classList.remove("redBorder");
});

rePasswordInp.addEventListener("focusin", () => {
  removePreviousWarning("removeRepassword");
  rePasswordInp.classList.remove("redBorder");
});

loginForm?.addEventListener("submit", function (e) {
  e.preventDefault();
  performLogin();
});
loginForm?.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    performLogin();
  }
});
signUpForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  performSignUp();
});
signUpForm?.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    performSignUp();
  }
});
emailInp.addEventListener("invalid", (e) => {
  e.preventDefault();
});
passwordEye.addEventListener("click", togglePasswordView);
rePasswordEye?.addEventListener("click", togglePasswordView);
