import {
    passwordTypeControl,
    isEmailLengthExist,
    validateEmailRegex,
    hideErrorMessage,
    showErrorMessage,
    isPasswordLengthExist,
} from "./signCommon.js";
import { API } from "../constants.js";
import { setLocalStorage } from "../auth/authCommon.js";
const formElement = document.querySelector("#form");
const emailInputElement = document.querySelector("#email");
const passwordInputElement = document.querySelector("#password");
const emailErrorMessageContainer = document.querySelector("#email_error");
const passwordErrorMessageContainer = document.querySelector("#pw_error");

// 눈 아이콘과 input type 변경해주는 event 전달
const handleInputTypeClick = (e) => {
    passwordTypeControl(e);
};

const handleEmailFocusOut = (e) => {
    // 이메일 focus out 기능 구현
    const emailValue = e.target.value;

    try {
        if (!isEmailLengthExist(emailValue)) {
            // email 입력이 되어있지 않은 경우 에러 표시
            throw new Error("이메일을 입력해주세요.");
        }

        if (!validateEmailRegex(emailValue)) {
            // 이메일 형식이 아닐 경우 에러 표시
            throw new Error("올바른 이메일 주소가 아닙니다.");
        }
        hideErrorMessage(emailInputElement, emailErrorMessageContainer);
    } catch (error) {
        showErrorMessage(
            emailInputElement,
            emailErrorMessageContainer,
            error.message
        );
    }
};

const handlePasswordFocusOut = (e) => {
    // 비밀번호 focus out 기능 구현
    const passwordValue = e.target.value;
    try {
        if (!isPasswordLengthExist(passwordValue)) {
            // 비밀번호 값이 없을 경우 에러 표시
            throw new Error("비밀번호를 입력해주세요.");
        }
        hideErrorMessage(passwordInputElement, passwordErrorMessageContainer);
    } catch (error) {
        showErrorMessage(
            passwordInputElement,
            passwordErrorMessageContainer,
            error.message
        );
    }
};

const handleSubmit = async (e) => {
    // submit 버튼 기능 구현
    const emailValue = emailInputElement.value;
    const passwordValue = passwordInputElement.value;

    e.preventDefault();

    try {
        const response = await axios.post(
            API + "api/sign-in",
            { email: emailValue, password: passwordValue },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const result = response.data;
        if (result.data.accessToken) {
            setLocalStorage("accessToken", result.data.accessToken);
            window.location.href = "/folder.html";
        }
    } catch (error) {
        if (error.response.status === 400) {
            emailInputElement.focus();
            alert("이메일 혹은 비밀번호를 확인해 주세요.");
        }
    }
};

emailInputElement.addEventListener("focusout", handleEmailFocusOut);
passwordInputElement.addEventListener("focusout", handlePasswordFocusOut);
formElement.addEventListener("submit", handleSubmit);
formElement.addEventListener("click", handleInputTypeClick);
