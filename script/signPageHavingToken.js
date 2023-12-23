const signPageHavingToken = function () {

    // defer 속성을 사용 + DOMContentLoaded를 사용하는 것이 페이지 로드시 가장빠르게 토큰을 확인하는 방법일듯?...
    window.addEventListener('DOMContentLoaded', (e) => {
        if (localStorage.getItem("accessToken")) location.href = './folder.html'
    });
}

export { signPageHavingToken };