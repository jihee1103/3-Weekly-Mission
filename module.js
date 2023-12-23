export{remove_error, error_event, email_valid, password_valid, eye_change}

//이메일 정규식
const email_reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//패스워드 정규식
const password_reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;


//에러 지우는것
const remove_error = function(remove_border, remove_text){
  remove_border.classList.remove('input_line');
  remove_text.innerText ="";
};

//에러 생기면 알려주는것
 const error_event = function(span_el, input_border, error_text){
  input_border.classList.add('input_line');
  span_el.innerText = error_text;
}

//이메일 정규식 확인
  function email_valid(email_input) {
    return new RegExp(email_reg).test(email_input);
  }
//패스워드 정규식 확인
  function password_valid(password_input){
    return new RegExp(password_reg).test(password_input)
  }

  // 눈모양 바꾸기
  function eye_change(input, image_btn){
    if(input.type === 'password'){
      input.type = 'text'
      image_btn.src= " ../images/eye-on.svg";
      return;
    }
      input.type = 'password';
      image_btn.src= " ../images/eye-off.svg";
  }