import { ERROR_MESSAGES, EMAIL_REGEX, API } from '../constants.js';

const getErrorMessage = (errCode) => ERROR_MESSAGES[errCode] ?? '알 수 없는 에러가 발생했습니다.';
const getAPI = (apiCode) => API[apiCode];

export default class SignInController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.checkAccessTokenAndRedirect();
    this.view.emailInput.addEventListener('focusout', () => this.handleEmailInputFocusout());
    this.view.emailInput.addEventListener('keydown', () => this.handleEmailInputKeydown());
    this.view.passwordInput.addEventListener('focusout', () => this.handlePasswordInputFocusout());
    this.view.passwordInput.addEventListener('keydown', () => this.handlePasswordInputKeydown());
    this.view.eyeIcons.forEach((button) => {
      button.addEventListener('click', (e) => this.view.handleVisibilityIconClick(e));
    });
    this.view.formElement.addEventListener('submit', (e) => this.handleFormSubmit(e));
  }

  // 이메일 이벤트 핸들링
  handleEmailInputFocusout() {
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

  handleEmailInputKeydown(e) {
    if (e.key === 'Enter') {
      this.handleEmailInputFocusout();
    }
  }

  // 비밀번호 이벤트 핸들링
  handlePasswordInputFocusout() {
    const passwordValue = this.view.passwordInput.value;

    if (passwordValue.length === 0) {
      this.view.showErrorMessage(this.view.passwordInput, getErrorMessage('PASSWORD_REQUIRED'));
      return false;
    }

    this.view.removeErrorMessage(this.view.passwordInput);
    return true;
  }

  handlePasswordInputKeydown(e) {
    if (e.key === 'Enter') {
      this.handlePasswordInputFocusout();
    }
  }

  // access token 저장
  async saveAccessTokenToModel(response) {
    const accessData = await response.json();
    const accessToken = accessData.token;
    this.model.setAccessToken(accessToken);
  }

  // accessToken 보유 확인
  checkAccessTokenAndRedirect() {
    const accessToken = this.model.getAccessToken();
    if (accessToken) {
      location.href = '/folder.html';
      return;
    }
  }

  // 로그인 처리
  async handleFormSubmit(e) {
    e.preventDefault();

    const emailValue = this.view.emailInput.value;
    const passwordValue = this.view.passwordInput.value;
    const user = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const response = await fetch(getAPI('SIGN_IN_API'), {
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
        return;
      }

      this.saveAccessTokenToModel(response);
      location.href = '/folder.html';
    } catch (error) {
      console.error('로그인 에러:', error.message);
      alert(getErrorMessage('SIGN_IN_FAILED'));
    }
  }
}
