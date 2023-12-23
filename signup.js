const eInput = document.getElementById('email');
const pInput = document.getElementById('password');
const pDupInput = document.getElementById('password-dup');
const pwErrMsg = document.getElementById('password-err-msg');
const signupbtn = document.querySelector('#signupbtn');

const eChecker = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/; 
    //@을 기준으로 앞 구간이 알파벳 or 숫자 조합으로 이루어져 있는지 체크, 뒷 구간이 알파벳 or 숫자 조합으로 이루어져 있는지 체크, 뒷 구간에서 . 뒷 구간이 알파벳 or 숫자 조합으로 이루어져 있는지 체크
const pChecker = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;



function emailCheck(email) {
    if(eChecker.test(email) === false) {
        return false; 
    } else { 
        return true; 
    }
}

function printEmailMsg(e){
    if(eInput.value == ''){
        eInput.placeholder = '이메일을 입력해주세요';
        return false;
    } else {
        // console.log(emailCheck(input.value));
        if(emailCheck(eInput.value) == false) {
            eInput.value = '';
            eInput.placeholder = '올바른 이메일이 아닙니다.';
            return false;
        }
        if(eInput.value == 'test@codeit.com'){
            eInput.value = '';
            eInput.placeholder = '이미 사용 중인 이메일입니다.'
            return false;
        }
    }
    return true;
}


function passwordCheck(password){
    if(pChecker.test(password) === false){
        return false;
    }
    return true;
}

function printPasswordMsg(e){
    if(passwordCheck(pInput.value) == false ) {
        pInput.value = '';
        pInput.placeholder = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        return false;
    }
    return true;
}

function pwDup() {
    const pwValue = pInput.value;
    const pwDup = pDupInput.value;

    if (pwValue !== pwDup) {
        pwErrMsg.style.display = 'block';
        pDupInput.classList.add('focus-border-red');
        return false;
    } else {
        pwErrMsg.style.display = 'none';
        pDupInput.classList.remove('focus-border-red');
        return true;
    }
}

signupbtn.addEventListener('click', vaildSubmit);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        vaildSubmit();
    }
});
function vaildSubmit(e) {
    if (e) {
        e.preventDefault();
    }

    const isEmailValid = printEmailMsg();
    const isPasswordValid = printPasswordMsg();
    const isPasswordDupValid = pwDup();
    console.log(isEmailValid+' '+isPasswordValid+' '+isPasswordDupValid);

    if (isEmailValid && isPasswordValid && isPasswordDupValid) {
        console.log('들어오니~~?2');
        window.location.href = "/folder";
    }
}



eInput.addEventListener('focusout', printEmailMsg);
pInput.addEventListener('focusout', printPasswordMsg);
pDupInput.addEventListener('focusout', pwDup);