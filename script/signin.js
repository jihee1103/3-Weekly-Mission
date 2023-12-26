import { storeAccessToken, checkAccessToken } from "./common.js";
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPw");
const emailError = document.querySelector("#email_err");
const passwordError = document.querySelector("#pw_err");
const signinForm = document.querySelector("form");

const inputPwIcon = document.querySelector("#inputPwIcon");

checkAccessToken();

function checkEmail() {
    const EMAIL_REGEX =
        /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!inputEmail.value) {
        emailError.textContent = "이메일을 입력해주세요.";
        inputEmail.className = "error-box";
        return false;
    }
    if (!EMAIL_REGEX.test(inputEmail.value)) {
        emailError.textContent = "올바른 이메일 주소가 아닙니다.";
        inputEmail.className = "error-box";
        return false;
    }
    emailError.textContent = " ";
    inputEmail.className = "inputbox";
    return true;
}

function checkPassword() {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
    if (!inputPassword.value) {
        passwordError.textContent = "비밀번호를 입력해주세요.";
        inputPassword.className = "error-box";
        return false;
    } else if (!passwordRegex.test(inputPassword.value)) {
        passwordError.textContent =
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        inputPassword.className = "error-box";
        return false;
    }
    passwordError.textContent = " ";
    inputPassword.className = "inputbox";
    return true;
}

async function signIn(event) {
    event.preventDefault();

    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: inputEmail.value,
            password: inputPassword.value,
        }),
    });
    if (response.ok === true) {
        const result = await response.json();
        // localStorage.setItem("accessToken", result.data.accessToken);
        storeAccessToken(result);
        location.href = "/folder";
    } else {
        emailError.textContent = "이메일을 확인해주세요.";
        passwordError.textContent = "비밀번호를 확인해주세요.";
    }
}

function showPasswordToggle(elementIcon, elementInput) {
    const img_path = "../images/eye-off.png";

    if (elementInput.type == "text") {
        elementInput.type = "password";
        elementIcon.src = "../images/eye-off.png";
    } else {
        elementInput.type = "text";
        elementIcon.src = "../images/eye-on.png";
    }
}

inputPwIcon.addEventListener("click", () => {
    showPasswordToggle(inputPwIcon, inputPassword);
});

inputEmail.addEventListener("focusout", checkEmail);
inputPassword.addEventListener("focusout", checkPassword);
signinForm.addEventListener("submit", signIn);
