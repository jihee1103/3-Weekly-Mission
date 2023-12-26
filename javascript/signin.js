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

$loginForm.addEventListener("submit", function (e) {
  removePreviousWarningSpanTag("emailSpan");
  removePreviousWarningSpanTag("passwordSpan");
  e.preventDefault();
  performLogin();
});
$loginForm.addEventListener("keypress", function (e) {
  removePreviousWarningSpanTag("emailSpan");
  removePreviousWarningSpanTag("passwordSpan");
  if (e.key === "Enter") {
    e.preventDefault();
    performLogin();
  }
});

$emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
});
$passwordEye.addEventListener("click", togglePasswordView);
