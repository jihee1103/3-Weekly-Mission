const signPageEnterKey = function (btnHandler) {
    return window.addEventListener('keyup', (event) => { if (event.key === 'Enter') btnHandler() });
}

export { signPageEnterKey }