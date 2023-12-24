import SignModel from '../model.js';
import SignView from '../view.js';
import SignInController from './controller.js';

window.addEventListener('DOMContentLoaded', () => {
  const signUpModel = new SignModel();
  const signUpView = new SignView();
  new SignInController(signUpModel, signUpView);
});
