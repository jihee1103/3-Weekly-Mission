const $login = document.querySelector('.login');
const $email = document.querySelector('#email');
const $password = document.querySelector('#pw');
const $re_password = document.querySelector('#re-pw');
const $email_input = document.querySelector('.email');
const $re_password_input = document.querySelector('.re-password');
const $form = document.querySelector('#login_form');
const $eye2 = document.querySelector('.eye');

function checkInfo(){
  // 이메일 작성 && (비밀번호 && 비밀번호 확인) 이면 로그인 하기 
  if (($email.value.includes('@') && $email.value !== "") && ($password.value === $re_password.value) ){
    alert('회원가입 완료!');
    window.location.href = "/";
  } else {
    alert('다시 입력해주세요.')
  }
  }


// 이메일 형식이 안 맞으면('@'가 포함되지않을때) 에러 메세지 출력
// 이메일 값이 비어있으면 에러 메세지 출력 
function isValidEmail(e) {  
  const $message_email = document.createElement("div");
  $message_email.classList.add('errorComment');
  if ((!$email.value.includes('@') && e.target.value !== "")) {
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
// 비밀번호 값이 비었으면 에러 메세지 출력
function isValidPassword(e){
  const $message_pw = document.createElement("div");
  $message_pw.classList.add('errorComment');
  if (e.target.value !== $password.value) {
    $message_pw.textContent = "비밀번호가 다릅니다.";
    $re_password_input.append($message_pw);
    e.target.classList.remove('writing');
    e.target.classList.add('error');
    $password.classList.remove('writing');
    $password.classList.add('error');
  } else {
    $password.className = 'writing';
    e.target.className = 'writing';
    $re_password_input.removeChild($re_password_input.lastElementChild);
  }
    
}

function addEffect(e) {
  e.target.classList.remove('normal');
  e.target.classList.add('writing');
}

$login.addEventListener('click',checkInfo);

$email.addEventListener('focusout',isValidEmail);
$re_password.addEventListener('focusout',isValidPassword);

$email.addEventListener('focusin',addEffect);
$password.addEventListener('focusin',addEffect);
$re_password.addEventListener('focusin',addEffect);

$form.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    checkInfo();
  }
})