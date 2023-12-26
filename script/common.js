function storeAccessToken(result) {
    localStorage.setItem("accessToken", result.data.accessToken);
}

function checkAccessToken() {
    if (localStorage.getItem("accessToken") !== null) {
        location.href = "/folder";
    }
}

export { storeAccessToken, checkAccessToken };
