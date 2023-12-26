import { COOKIE_EXPIRATION_DATE } from './constants.js';
export default class SignModel {
  setTokenCookie(token, days) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  }

  saveTokenInCookie(response) {
    const accessData = response.json();
    const token = accessData.token;
    this.setTokenCookie(token, COOKIE_EXPIRATION_DATE);
  }

  hasToken() {
    const cookies = document.cookie.split(';');
    return cookies.some((cookie) => {
      const trimmedCookie = cookie.trim();
      return trimmedCookie.startsWith('token=');
    });
  }
}
