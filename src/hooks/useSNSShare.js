import { useEffect } from 'react';

const useSNSShare = ({ title, url }) => {
  // ① encodeURI(): 인터넷 주소에서 사용하는 :, ;, /, =, ?, & 등을 제외하고 인코딩하는 함수
  // ② encodeURIComponent(): 모든 문자를 인코딩하는 함수, 전체 URI를 구성하는 부분 인코딩에 적합, 매개변수를 인코딩 하려는 경우
  // ③ 인코딩: 데이터를 다른 포맷(형식)으로 변환. 사용할 수 없는 문자를 사용할 수 있는 특수 문자 조합으로 표현

  /**
   * @see {@link https://become-a-developer.tistory.com/63} - Parameter 'href' should represent a valid URL 에러 뜰 시.  URL을 읽어들일 수 없음 에러 뜰 시
   */
  const shareToFacebook = () => {
    // const sharedLink = encodeURIComponent(window.location.href);
    const sharedLink = encodeURIComponent(url);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const shareToKakaotalk = () => {
    if (window.Kakao === undefined) {
      return;
    }

    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'text',
      text: title,
      link: {
        mobileWebUrl: url, // 나중에 폴더 포함한 주소 링크 넣기
        webUrl: url,
      },
    });
  };

  const copyFolderUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      console.log('Content copied to clipboard');
    } catch (e) {
      console.error('Failed to copy');
    }
  };

  // const shareToNavigator = ({ text, url }) => {
  //   const sharedData = {
  //     text,
  //     url,
  //   };

  //   try {
  //     if (navigator.canShare && navigator.canShare(sharedData)) {
  //       navigator
  //         .share(sharedData)
  //         .then(() => {
  //           console.log('🚀 ~ .then ~ 성공');
  //         })
  //         .catch(() => {
  //           console.log('취소');
  //         });
  //     }
  //   } catch (e) {
  //     console.error('실패');
  //   }
  // };

  useEffect(() => {
    // ✅ clipboard.js 라이브러리
    // navigator.permissions.query({ name: 'write-on-clipboard' }).then((result) => {
    // chrome용
    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      // eslint-disable-next-line eqeqeq
      if (result.state == 'granted' || result.state == 'prompt') {
        // eslint-disable-next-line no-alert
        console.log('Write access granted!');
      }
    });

    const script = document.createElement('script');

    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js';
    script.integrity = 'sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8';
    script.crossOrigin = 'anonymous';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return {
    shareToFacebook,
    shareToKakaotalk,
    copyFolderUrl,
  };
};

export { useSNSShare };
