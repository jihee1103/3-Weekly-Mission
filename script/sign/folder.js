const 임시로그아웃버튼 = document.querySelector('.임시로그아웃버튼');
임시로그아웃버튼.addEventListener('click', () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    location.href = '/';
});