const inputEmail = document.querySelector("#inputEmail");
const inputPw = document.querySelector("#inputPw");
const inputPwConfirm = document.querySelector("#inputPwConfirm");
const emailError = document.querySelector("#email_err");
const pwError = document.querySelector("#pw_err");
const pwConfirmError = document.querySelector("#pwConfirm_err");
const signupBtn = document.querySelector("#signupBtn");
const inputPwIcon = document.querySelector("#inputPwIcon");
const inputPwComfirmIcon = document.querySelector("#inputPwComfirmIcon");

let emailValid = false;
let passwordValid = false;
let passwordConfirmValid = false;

function checkEmail() {
    const email_format =
        /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!inputEmail.value) {
        emailError.textContent = "이메일을 입력해주세요.";
        inputEmail.className = "error-box";
    } else if (!email_format.test(inputEmail.value)) {
        emailError.textContent = "올바른 이메일 주소가 아닙니다.";
        inputEmail.className = "error-box";
    } else if (inputEmail.value === "test@codeit.com") {
        emailError.textContent = "이미 사용 중인 이메일입니다.";
    } else {
        emailError.textContent = " ";
        inputEmail.className = "inputbox";
        emailValid = true;
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
    } else if (inputPw.value && passwordRegex.test(inputPw.value)) {
        pwError.textContent = " ";
        inputPw.className = "inputbox";
        passwordValid = true;
    }
}

function passwordConfirm() {
    if (!inputPwConfirm.value) {
        pwConfirmError.textContent = "비밀번호를 입력해주세요.";
        inputPwConfirm.className = "error-box";
    } else if (inputPwConfirm.value !== inputPw.value) {
        pwConfirmError.textContent = "비밀번호가 일치하지 않아요.";
    } else {
        pwConfirmError.textContent = " ";
        inputPwConfirm.className = "inputbox";
        passwordConfirmValid = true;
    }
}

function signUp() {
    if (
        emailValid === true &&
        passwordValid === true &&
        passwordConfirmValid === true
    ) {
        location.href = "/folder";
    } else if (emailValid === false) {
        emailError.textContent = "이메일을 확인해주세요.";
        inputEmail.className = "error-box";
    } else if (passwordValid === false) {
        pwError.textContent = "비밀번호를 확인해주세요.";
        inputPw.className = "error-box";
    } else if (passwordConfirmValid === false) {
        pwConfirmError.textContent = "비밀번호를 확인해주세요.";
        inputPwConfirm.className = "error-box";
    }
}

function showPasswordToggle(element_icon, element_input) {
    const img_path = "../images/eye-off.png";

    if (element_input.type == "text") {
        element_input.type = "password";
        element_icon.src = "../images/eye-off.png";
    } else {
        element_input.type = "text";
        element_icon.src = "../images/eye-on.png";
    }
}

inputPwIcon.addEventListener("click", () => {
    showPasswordToggle(inputPwIcon, inputPw);
});

inputPwComfirmIcon.addEventListener("click", () => {
    showPasswordToggle(inputPwComfirmIcon, inputPwConfirm);
});

inputEmail.addEventListener("focusout", checkEmail);
inputPw.addEventListener("focusout", checkPassword);
inputPwConfirm.addEventListener("focusout", passwordConfirm);

signupBtn.addEventListener("click", signUp);
