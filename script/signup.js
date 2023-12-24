const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPw");
const inputPasswordConfirm = document.querySelector("#inputPwConfirm");
const emailError = document.querySelector("#email_err");
const passwordError = document.querySelector("#pw_err");
const passwordConfirmError = document.querySelector("#pwConfirm_err");
const signupForm = document.querySelector("form");
const inputPasswordIcon = document.querySelector("#inputPwIcon");
const inputPasswordComfirmIcon = document.querySelector("#inputPwComfirmIcon");

if (localStorage.accessToken) {
    location.href = "/folder";
}

console.log(localStorage);
async function checkEmailConflict() {
    const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/check-email",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: inputEmail.value,
            }),
        }
    );
    if (response.status === 409) {
        emailError.textContent = "이미 사용 중인 이메일입니다.";
        return false;
    }
}

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
    checkEmailConflict();

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
    }
    if (!passwordRegex.test(inputPassword.value)) {
        passwordError.textContent =
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        inputPassword.className = "error-box";
        return false;
    }
    if (inputPassword.value && passwordRegex.test(inputPassword.value)) {
        passwordError.textContent = " ";
        inputPassword.className = "inputbox";
        return true;
    }
}

function passwordConfirm() {
    if (!inputPasswordConfirm.value) {
        passwordConfirmError.textContent = "비밀번호를 입력해주세요.";
        inputPasswordConfirm.className = "error-box";
        return false;
    }
    if (inputPasswordConfirm.value !== inputPassword.value) {
        passwordConfirmError.textContent = "비밀번호가 일치하지 않아요.";
        return false;
    }
    passwordConfirmError.textContent = " ";
    inputPasswordConfirm.className = "inputbox";
    return true;
}

async function signUp(event) {
    event.preventDefault();

    if (
        checkEmail() === true &&
        checkPassword() === true &&
        passwordConfirm() === true
    ) {
        const response = await fetch(
            "https://bootcamp-api.codeit.kr/api/sign-up",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value,
                }),
            }
        );
        if (response.status === 200) {
            const result = await response.json();
            localStorage.setItem("accessToken", result.data.accessToken);
            location.href = "/folder";
        }
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

inputPasswordIcon.addEventListener("click", () => {
    showPasswordToggle(inputPasswordIcon, inputPassword);
});

inputPasswordComfirmIcon.addEventListener("click", () => {
    showPasswordToggle(inputPasswordComfirmIcon, inputPasswordConfirm);
});

inputEmail.addEventListener("focusout", checkEmail);
inputPassword.addEventListener("focusout", checkPassword);
inputPasswordConfirm.addEventListener("focusout", passwordConfirm);

signupForm.addEventListener("submit", signUp);
