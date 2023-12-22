const checkSignInHandler = function () {
    if (localStorage.getItem("accessToken")) location.href = './folder.html'
}

export { checkSignInHandler }