const shareToKakao = (kakaoSdk, modal) => {
  if (kakaoSdk) {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(`${process.env.REACT_APP_KAKAO_JS_KEY}`); // 카카오에서 제공받은 javascript key를 넣어줌
      }

      kakao.Link.sendDefault({
        // 링크 공유 중 여러가지 타입
        objectType: 'feed',
        content: {
          title: modal.data.folderName,
          description: modal.data.sharingUrl,
          imageUrl: '이미지 url',
          link: {
            mobileWebUrl: modal.data.sharingUrl,
            webUrl: modal.data.sharingUrl,
          },
        },
        buttons: [
          {
            title: modal.data.folderName,
            link: {
              mobileWebUrl: modal.data.sharingUrl,
              webUrl: modal.data.sharingUrl,
            },
          },
        ],
      });
    }
  }
};

export default shareToKakao;
