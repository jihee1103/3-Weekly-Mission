const eyeOffHandler = function (input, eyeoff) { // eye-on,off 함수
    if (input.getAttribute('type') === 'text') {// eye-off
        input.setAttribute('type', 'password');
        eyeoff.innerHTML = '<img src="img/eye-off.svg" alt="eye-off" name="password">';
    } else {// eye-on
        input.setAttribute('type', 'text');
        eyeoff.innerHTML = '<img src="img/eye-on.svg" alt="eye-on" name="password">';
    }
}

export { eyeOffHandler };