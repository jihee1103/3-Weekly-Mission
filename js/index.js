import { $mv_login, $mv_signup } from './common.js';

$mv_login.addEventListener('click', function(){
  const tokenIsValid = localStorage.getItem('accessToken')
  if(tokenIsValid){
    window.location.href = "/folder.html";
  } else {
    window.location.href = "/login.html";
  }
});

$mv_signup.addEventListener('click', function(){
  const tokenIsValid = localStorage.getItem('accessToken')
  if(tokenIsValid){
    window.location.href = "/folder.html";
  } else {
    window.location.href = "/signup.html";
  }
});