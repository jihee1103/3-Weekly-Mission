const shareKakao = (links, folderName, shareUrl) => {
  const { Kakao } = window;

  const linkContent = links.map((link) => ({
    title: link.title,
    description: link.description,
    imageUrl: link.imageSource,
    link: {
      mobileWebUrl: link.url,
      webUrl: link.url,
    },
  }));

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
