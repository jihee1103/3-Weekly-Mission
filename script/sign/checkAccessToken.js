const checkAccessToken = function () {
    if (localStorage.getItem('accessToken')) location.href = './folder.html';
};

export { checkAccessToken };
