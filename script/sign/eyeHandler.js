const eyeHandler = function (input, eyeoff) {
    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
    } else {
        input.setAttribute('type', 'text');
    }
    eyeoff.classList.toggle('on');
};

export { eyeHandler };
