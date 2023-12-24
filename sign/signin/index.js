import SignModel from '../model.js';
import SignView from '../view.js';
import SignInController from './controller.js';

window.addEventListener('DOMContentLoaded', () => {
  const signInModel = new SignModel();
  const signInView = new SignView();
  new SignInController(signInModel, signInView);
});
