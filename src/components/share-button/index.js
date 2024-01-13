/* eslint-disable */

import { useEffect } from 'react';
import './style.css';

const { Kakao } = window;

const KakaoShareButton = () => {
  const realUrl = 'https://lambent-phoenix-89fde9.netlify.app';
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('5439ad585811de1328d7f0fd91da374d');
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl: '',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <button
        className="grey-btn"
        onClick={() => {
          shareKakao();
        }}
      >
        카카오톡 공유하기
      </button>
    </>
  );
};

export default KakaoShareButton;
