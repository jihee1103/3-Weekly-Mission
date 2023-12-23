const signPasswordHandler = function (event, elementShowingError) {
    const password = event.target.value;
    const confirmPasswordAlphabet = new RegExp("[A-Za-z]")
    const confirmPasswordNumber = new RegExp("[0-9]")
    if (!password) {
        elementShowingError.textContent = '비밀번호를 확인해주세요';
    } else if (password.length < 8 || !confirmPasswordAlphabet.test(password) || !confirmPasswordNumber.test(password)) { // 비밀번호 유효성 검사
        elementShowingError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
    } else {
        elementShowingError.textContent = '';
    }
}



export { signPasswordHandler }