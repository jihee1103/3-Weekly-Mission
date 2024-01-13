import imageData from "../assets/imageData";

export const shareKakao = (url, folderName) => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init("32adc3f02c72c6c7bb61effc65a716ec");
  }

  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "Linkbrary",
      description: `${folderName} 페이지`,
      imageUrl:
        "https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr",
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: url,
        webUrl: url,
      },
    },
  });
};
