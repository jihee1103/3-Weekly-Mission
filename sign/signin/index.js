import SignModel from './model.js';
import SignView from '../view.js';
import SignInController from './controller.js';

window.addEventListener('DOMContentLoaded', () => {
  // 인스턴스 생성 및 연결
  const signInModel = new SignModel();
  const signInView = new SignView();
  new SignInController(signInModel, signInView);
});
