import { ERROR_MESSAGES, API, EMAIL_REGEX } from '../constants.js';

const getErrorMessage = (errCode) => ERROR_MESSAGES[errCode] ?? '알 수 없는 에러가 발생했습니다.';
const getAPI = (apiCode) => API[apiCode];

export default class SignInController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    if (this.model.hasToken()) {
      location.href = '/folder.html';
      return;
    }

    this.view.emailInput.addEventListener('focusout', () => this.handleEmailInputFocusout());
    this.view.passwordInput.addEventListener('focusout', () => this.handlePasswordInputFocusout());
    this.view.eyeIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => this.view.handleEyeIconClick(e));
    });
    this.view.formElement.addEventListener('submit', (e) => this.handleFormSubmit(e));
  }

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

  handlePasswordInputFocusout() {
    const passwordValue = this.view.passwordInput.value;

    if (passwordValue.length === 0) {
      this.view.showErrorMessage(this.view.passwordInput, getErrorMessage('PASSWORD_REQUIRED'));
      return false;
    }

    this.view.removeErrorMessage(this.view.passwordInput);
    return true;
  }

  async handleFormSubmit(e) {
    e.preventDefault();

    const emailValue = this.view.emailInput.value;
    const passwordValue = this.view.passwordInput.value;
    const user = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const signInResponse = await fetch(getAPI('SIGN_IN_API'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!signInResponse.ok) {
        this.view.showErrorMessage(this.view.emailInput, getErrorMessage('EMAIL_CHECK_FAILED'));
        this.view.showErrorMessage(
          this.view.passwordInput,
          getErrorMessage('PASSWORD_CHECK_FAILED'),
        );
        return;
      }

      this.model.saveTokenInCookie(signInResponse);
      location.href = '/folder.html';
    } catch (error) {
      console.error('SIGN_IN_ERROR:', error.message);
      alert(getErrorMessage('SIGN_IN_FAILED'));
    }
  }
}
