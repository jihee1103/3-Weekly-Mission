import { ERROR_MESSAGES, EMAIL_REGEX, PASSWORD_REGEX, API } from '../constants.js';

const getErrorMessage = (errCode) => ERROR_MESSAGES[errCode] ?? '알 수 없는 에러가 발생했습니다.';
const getAPI = (apiCode) => API[apiCode];

export default class SignUpController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.emailInput.addEventListener('focusout', () => this.handleSignInEmailInputFocusout());
    this.view.emailInput.addEventListener('keydown', () => this.handleSignInEmailInputKeydown());
    this.view.passwordInput.addEventListener('focusout', () =>
      this.handleSignInPasswordInputFocusout(),
    );
    this.view.passwordInput.addEventListener('keydown', () =>
      this.handleSignInPasswordInputKeydown(),
    );
    this.view.passwordRepeatInput.addEventListener('focusout', () =>
      this.handlePasswordRepeatInputFocusout(),
    );
    this.view.passwordRepeatInput.addEventListener('keydown', () =>
      this.handleSignInPasswordRepeatInputKeydown(),
    );
    this.view.eyeIcons.forEach((button) => {
      button.addEventListener('click', (e) => this.view.handleVisibilityIconClick(e));
    });
    this.view.formElement.addEventListener('submit', (e) => this.handleSignUpFormSubmit(e));
  }

  // 이메일 이벤트 핸들링
  handleSignInEmailInputFocusout() {
    const emailValue = this.view.emailInput.value;

    if (!emailValue) {
      this.view.showErrorMessage(this.view.emailInput, getErrorMessage('EMAIL_REQUIRED'));
      return false;
    }

    if (!EMAIL_REGEX.test(emailValue)) {
      this.view.showErrorMessage(this.view.emailInput, getErrorMessage('INVALID_EMAIL'));
      return false;
    }

    this.view.removeErrorMessage(this.view.emailInput);
    return true;
  }

  handleSignInEmailInputKeydown(e) {
    if (e.key === 'Enter') {
      this.handleSignInEmailInputFocusout();
    }
  }

  // 비밀번호 이벤트 핸들링
  handleSignInPasswordInputFocusout() {
    const passwordValue = this.view.passwordInput.value;

    if (!passwordValue) {
      this.view.showErrorMessage(this.view.passwordInput, getErrorMessage('PASSWORD_REQUIRED'));
      return false;
    }

    if (PASSWORD_REGEX.test(passwordValue) && passwordValue.length >= 8)
      this.view.removeErrorMessage(this.view.passwordInput);
    return true;
  }

  handleSignInPasswordInputKeydown(e) {
    if (e.key === 'Enter') {
      this.handleSignInPasswordInputFocusout();
    }
  }

  // 비밀번호 확인 이벤트 핸들링
  handlePasswordRepeatInputFocusout() {
    const passwordRepeatValue = this.view.passwordRepeatInput.value;

    if (!passwordRepeatValue) {
      this.view.showErrorMessage(
        this.view.passwordRepeatInput,
        getErrorMessage('PASSWORD_REPEAT_REQUIRED'),
      );
      return false;
    }

    if (passwordRepeatValue !== this.view.passwordInput.value) {
      this.view.showErrorMessage(
        this.view.passwordRepeatInput,
        getErrorMessage('INVALID_PASSWORD_REPEAT'),
      );
      return false;
    }

    this.view.removeErrorMessage(this.view.passwordRepeatInput);
    return true;
  }

  handleSignInPasswordRepeatInputKeydown(e) {
    if (e.key === 'Enter') {
      this.handleSignInPasswordRepeatInputFocusout();
    }
  }

  // 토큰 생성 및 submit 허용
  async createAccessTokenAndAllowSubmit(response) {
    const data = await response.json();
    const token = data.token;
    localStorage.setItem('accessToken', token);
    location.href = '/folder.html';
  }

  // 회원가입 처리
  async handleSignUpFormSubmit(e) {
    e.preventDefault();

    const emailValue = this.view.emailInput.value;
    const passwordValue = this.view.passwordInput.value;

    const userEmail = {
      email: emailValue,
    };
    const user = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const checkEmailResponse = await fetch(getAPI('CHECK_REGISTERED_EMAIL_API'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userEmail),
      });

      if (checkEmailResponse.status === 409) {
        this.view.showErrorMessage(this.view.emailInput, getErrorMessage('DUPLICATE_EMAIL'));
        return;
      }

      const response = await fetch(getAPI('SIGN_UP_API'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        this.view.showErrorMessage(this.view.emailInput, getErrorMessage('EMAIL_CHECK_FAILED'));
        this.view.showErrorMessage(
          this.view.passwordInput,
          getErrorMessage('PASSWORD_CHECK_FAILED'),
        );
        this.view.showErrorMessage(
          this.view.passwordRepeatInput,
          getErrorMessage('PASSWORD_REPEAT_CHECK_FAILED'),
        );
        return;
      }
      this.createAccessTokenAndAllowSubmit(response);
    } catch (error) {
      console.error('회원가입 에러:', error.message);
      alert(getErrorMessage('SIGN_UP_FAILED'));
    }
  }
}
