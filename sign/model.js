export default class SignModel {
  constructor() {
    this.accessToken;
  }

  setAccessToken(token) {
    this.accessToken = token;
  }

  getAccessToken() {
    return this.accessToken;
  }
}
