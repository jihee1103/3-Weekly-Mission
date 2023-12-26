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

window.onload = function () {
  // 로컬 스토리지에서 accessToken 가져오기
  const storedToken = localStorage.getItem("accessToken");

  // accessToken이 존재하는 경우
  if (storedToken) {
    // "/folder" 페이지로 리디렉션
    window.location.href = "/folder";
  }
};

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
  removePreviousWarningSpanTag("emailSpan");
  removePreviousWarningSpanTag("vaildEmailSpan");
  removePreviousWarningSpanTag("removeRepassword");
  removePreviousWarningSpanTag("emailSpan");
  removePreviousWarningSpanTag("passwordSpan");

  performSignUp();
});
$signUpForm.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    removePreviousWarningSpanTag("emailSpan");
    removePreviousWarningSpanTag("vaildEmailSpan");
    removePreviousWarningSpanTag("removeRepassword");
    removePreviousWarningSpanTag("emailSpan");
    removePreviousWarningSpanTag("passwordSpan");

    performSignUp();
  }
});
$emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
});
$passwordEye.addEventListener("click", togglePasswordView);
$rePasswordEye.addEventListener("click", togglePasswordView);
