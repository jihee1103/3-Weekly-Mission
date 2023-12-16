const inputEmail = document.querySelector("#inputEmail");
const inputPw = document.querySelector("#inputPw");
const emailError = document.querySelector("#email_err");
const pwError = document.querySelector("#pw_err");
const signinBtn = document.querySelector("#signinBtn");

function checkEmail() {
    const email_format =
        /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!inputEmail.value) {
        emailError.textContent = "이메일을 입력해주세요.";
        inputEmail.className = "error-box";
    } else if (!email_format.test(inputEmail.value)) {
        emailError.textContent = "올바른 이메일 주소가 아닙니다.";
        inputEmail.className = "error-box";
    } else {
        emailError.textContent = " ";
        inputEmail.className = "inputbox";
    }
}

function checkPassword() {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
    if (!inputPw.value) {
        pwError.textContent = "비밀번호를 입력해주세요.";
        inputPw.className = "error-box";
    } else if (!passwordRegex.test(inputPw.value)) {
        pwError.textContent =
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        inputPw.className = "error-box";
    } else {
        pwError.textContent = " ";
        inputPw.className = "inputbox";
    }
}

function signIn() {
    if (
        inputEmail.value === "test@codeit.com" &&
        inputPw.value === "codeit101"
    ) {
        location.href = "/folder";
    } else {
        emailError.textContent = "이메일을 확인해주세요.";
        pwError.textContent = "비밀번호를 확인해주세요.";
    }
}

inputEmail.addEventListener("focusout", checkEmail);
inputPw.addEventListener("focusout", checkPassword);
signinBtn.addEventListener("click", signIn);
