import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line
    Kakao: any;
  }
}

const useKakaoInit = () => {
  const { Kakao } = window;
  const kakaoApiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(kakaoApiKey);
  }, []);
};

export default useKakaoInit;
