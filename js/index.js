//데이터
const emailInput = document.querySelector("#signup-email");
const passwordInput = document.querySelector("#signup-password");
const inputs = document.querySelectorAll(".input");
const errorMessage = document.querySelectorAll(".message");

//이메일 에러
function validEmail(e) {
  const email = e.target.value;
  if (email.length === 0) {
    errorMessage[0].textContent = "이메일을 입력해주세요.";
    errorMessage[0].classList.add("error");
    emailInput.classList.add("error-border");
  } else if (!email.includes("@")) {
    errorMessage[0].textContent = "올바른 이메일 주소가 아닙니다.";
    emailInput.classList.add("error-border");
    inputs[0].lastElementChild.classList.add("error-font");
  } else {
    emailInput.classList.remove("error-border");
    errorMessage[0].remove();
  }
}

emailInput.addEventListener("focusout", validEmail);
