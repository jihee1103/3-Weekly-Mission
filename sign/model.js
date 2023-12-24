export default class SignModel {
  constructor() {
    this.accessToken = null;
  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  getAccessToken() {
    return this.accessToken;
  }
}
