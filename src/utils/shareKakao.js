const shareKakao = (links, title, url) => {
  const { Kakao } = window;

  const linkContent = links.map((item) => ({
    title: item.title,
    description: item.description,
    imageUrl: item.imageSource,
    link: {
      mobileWebUrl: item.url,
      webUrl: item.url,
    },
  }));

  Kakao.Share.sendDefault({
    objectType: 'list',
    headerTitle: title,
    headerLink: { mobileWebUrl: url, webUrl: url },
    contents: linkContent.slice(0, 3),
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      {
        title: '앱으로 보기',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
};

export default shareKakao;
