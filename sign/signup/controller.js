import { ERROR_MESSAGES, API, EMAIL_REGEX, PASSWORD_REGEX } from '../constants.js';

export default class SignUpController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    if (this.model.hasToken()) {
      location.replace('/folder.html');
      return;
    }

    this.view.emailInput.addEventListener('focusout', () => this.handleEmailInputFocusout());
    this.view.passwordInput.addEventListener('focusout', () => this.handlePasswordInputFocusout());
    this.view.passwordConfirmInput.addEventListener('focusout', () =>
      this.handlePasswordConfirmInputFocusout(),
    );
    this.view.eyeIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => this.view.handleEyeIconClick(e));
    });
    this.view.formElement.addEventListener('submit', (e) => this.handleFormSubmit(e));
  }

  handleEmailInputFocusout() {
    const emailValue = this.view.emailInput.value;

    if (!emailValue) {
      this.view.showEmailErrorMessage(ERROR_MESSAGES.EMAIL_REQUIRED);
      return false;
    }

    if (!EMAIL_REGEX.test(emailValue)) {
      this.view.showEmailErrorMessage(ERROR_MESSAGES.INVALID_EMAIL);
      return false;
    }

    this.view.removeEmailErrorMessage();
    return true;
  }

  handlePasswordInputFocusout() {
    const passwordValue = this.view.passwordInput.value;

    if (!passwordValue) {
      this.view.showPasswordErrorMessage(ERROR_MESSAGES.PASSWORD_REQUIRED);
      return false;
    }

    if (PASSWORD_REGEX.test(passwordValue) && passwordValue.length >= 8) {
      this.view.showPasswordErrorMessage(ERROR_MESSAGES.INVALID_PASSWORD);
    }

    this.view.removePasswordErrorMessage();
    return true;
  }

  handlePasswordConfirmInputFocusout() {
    const passwordConfirmValue = this.view.passwordConfirmInput.value;

    if (!passwordConfirmValue) {
      this.view.showPasswordConfirmErrorMessage(ERROR_MESSAGES.PASSWORD_CONFIRM_REQUIRED);
      return false;
    }

    if (passwordConfirmValue !== this.view.passwordInput.value) {
      this.view.showPasswordConfirmErrorMessage(ERROR_MESSAGES.INVALID_PASSWORD_CONFIRM);
      return false;
    }

    this.view.removePasswordConfirmErrorMessage();
    return true;
  }

  async handleFormSubmit(e) {
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
      const emailDuplicateCheckResponse = await fetch(API.EMAIL_DUPLICATE_CHECK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userEmail),
      });

      if (emailDuplicateCheckResponse.status === 409) {
        this.view.showEmailErrorMessage(ERROR_MESSAGES.DUPLICATE_EMAIL);
        return;
      }

      const signUpResponse = await fetch(API.SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!signUpResponse.ok) {
        this.view.showEmailErrorMessage(ERROR_MESSAGES.EMAIL_CHECK_FAILED);
        this.view.showPasswordErrorMessage(ERROR_MESSAGES.PASSWORD_CHECK_FAILED);
        this.view.showPasswordConfirmErrorMessage(ERROR_MESSAGES.PASSWORD_CONFIRM_CHECK_FAILED);
        return;
      }

      this.model.saveTokenInCookie(signUpResponse);
      location.replace('/folder.html');
    } catch (error) {
      console.error('회원가입 에러:', error.message);
      alert(ERROR_MESSAGES.SIGN_UP_FAILED);
    }
  }
}
