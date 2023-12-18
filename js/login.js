const MYEMAIL = 'test@codeit.com';
const MYPASSWORD = 'Codeit101';
const $login = document.querySelector('.login');
const $email = document.querySelector('#email');
const $password = document.querySelector('#pw');
const $email_input = document.querySelector('.email');
const $password_input = document.querySelector('.password');
const $eye = document.querySelector('.eye');
const $form = document.querySelector('#login_form');

// 로그인이 완료되면 홈으로 이동
function checkInfo(){
  if( $email.value === MYEMAIL && $password.value === MYPASSWORD ){
    alert('로그인 성공!');
    window.location.href = "/";
  } else if( $email.value !== MYEMAIL || $password.value !== MYPASSWORD ){
    alert('이메일 또는 비밀번호를 확인해주세요.');
  }
}

// 이메일 형식이 안 맞으면('@'가 포함되지않을때) 에러 메세지 출력
// 이메일 값이 비어있으면 에러 메세지 출력 
function isValidEmail(e) {  
  const $message_email = document.createElement("div");
  $message_email.classList.add('errorComment');
  if ((!$email.value.includes('@') && e.target.value !== "") && e.target.value !== MYEMAIL) {
    $message_email.textContent = "올바른 이메일 주소가 아닙니다.";
    e.target.classList.remove('writing');
    e.target.classList.add('error');
    if($email_input.lastElementChild == $email){
      $email_input.append($message_email)
    } 
  } else if (e.target.value == "") {
    $message_email.textContent = "이메일을 입력해주세요";
    e.target.classList.remove('writing');
    e.target.classList.add('error');
    if($email_input.lastElementChild == $email){
      $email_input.append($message_email)
    } 
  } 
  

}

// 비밀번호 형식이 안맞으면(대문자가 포함되지 않을때) 에러 메세지 출력
function isValidPassword(e){
  const $message_pw = document.createElement("div");
  $message_pw.classList.add('errorComment');
  if ((!$password.value.includes('C') && e.target.value !== "") || e.target.value !== MYPASSWORD) {
    $message_pw.textContent = "비밀번호를 확인해주세요.";
    e.target.classList.remove('writing');
    e.target.classList.add('error');
    console.log('1');
    if($password_input.lastElementChild == $eye){
      $password_input.append($message_pw);
    } 
  } else if (e.target.value == "") {
    $message_pw.textContent = "비밀번호를 입력해주세요.";
    e.target.classList.remove('writing');
    e.target.classList.add('error');
    if($password_input.lastElementChild == $eye){
      $password_input.append($message_pw);
    } 
  } else {
    $password.className = 'writing';
    e.target.className = 'writing';
    $password_input.removeChild($password_input.lastElementChild);
  }
}

function addEffect(e) {
  e.target.classList.remove('normal');
  e.target.classList.add('writing');
}

$login.addEventListener('click',checkInfo);

$email.addEventListener('focusout',isValidEmail);
$password.addEventListener('focusout',isValidPassword);

$email.addEventListener('focusin',addEffect);
$password.addEventListener('focusin',addEffect);

$form.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    checkInfo();
  }
})