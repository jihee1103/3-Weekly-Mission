import {
  CHECK_EMAIL,
  CHECK_PASSWORD,
  RIGHT_EMAIL,
  USED_EMAIL,
  WRONG_PASSWORD,
} from "./constant.js";
import {
  emailInput,
  pwdInputs,
  eyeIcons,
  errorMsgs,
  signupForm,
} from "./tags.js";
import toggleIcon from "./toggleIcon.js";
import { isValidEmail, isValidPwd } from "./validation.js";

/* 눈모양 아이콘 누르면 비밀번호 보이기 */
eyeIcons.forEach((el, idx) =>
  el.addEventListener("click", () => toggleIcon(el, pwdInputs[idx]))
);

/* 이메일 및 비밀번호 유효성 검사 */
emailInput.addEventListener("focusout", () => {
  const isExistEmail = emailInput.value === RIGHT_EMAIL;
  /* "test@codeit.com"로 회원가입 시도 시 오류 메세지 */
  if (isExistEmail) {
    emailInput.classList.toggle("invalid-border", isExistEmail);
    errorMsgs[0].textContent = USED_EMAIL;
  } else {
    isValidEmail(emailInput, errorMsgs[0]);
  }
});

pwdInputs[0].addEventListener("focusout", () =>
  isValidPwd(pwdInputs[0], errorMsgs[1])
);

/* 비밀번호 확인 입력값이 비밀번호 입력값과 같은 지 검사 */
pwdInputs[1].addEventListener("focusout", () => {
  const checkPassword = pwdInputs[0].value !== pwdInputs[1].value;
  if (checkPassword) {
    pwdInputs[1].classList.toggle("invalid-border", checkPassword);
    errorMsgs[2].textContent = checkPassword ? WRONG_PASSWORD : "";
  } else {
    isValidPwd(pwdInputs[1], errorMsgs[2]);
  }
});

/* 유효한 회원가입 시도 시 페이지 이동 */
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isEmptyInput =
    emailInput.value.length === 0 || pwdInputs[0].value.length === 0;
  const isEmptyError = [...errorMsgs].some((el) => el.textContent.length > 0);

  if (!isEmptyInput && !isEmptyError) {
    /* input이 비어있지 않으면서 오류 메시지가 없으면 회원가입 성공 */
    window.location.href = "folder.html";
  } else {
    emailInput.classList.add("invalid-border");
    pwdInputs[0].classList.add("invalid-border");
    pwdInputs[1].classList.add("invalid-border");
    errorMsgs[0].textContent = CHECK_EMAIL;
    errorMsgs[1].textContent = CHECK_PASSWORD;
    errorMsgs[2].textContent = CHECK_PASSWORD;
  }
});
