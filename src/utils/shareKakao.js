import camelcaseKeys from 'camelcase-keys';

const shareKakao = (links, folderName, shareUrl) => {
  if (links.length < 3) {
    alert('폴더에 2개 이상의 링크가 있어야 합니다.');
    return;
  }
  const { Kakao } = window;

  const linkContent = links.map((link) => {
    const newLink = camelcaseKeys(link);
    return {
      title: newLink.title,
      description: newLink.description,
      imageUrl: newLink.imageSource,
      link: {
        mobileWebUrl: newLink.url,
        webUrl: newLink.url,
      },
    };
  });

  Kakao.Share.sendDefault({
    objectType: 'list',
    headerTitle: folderName,
    headerLink: {
      mobileWebUrl: shareUrl,
      webUrl: shareUrl,
    },
    contents: linkContent.slice(0, 3),
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      {
        title: '앱으로 보기',
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
    ],
  });
};

export default shareKakao;
