import camelcaseKeys from 'camelcase-keys';

const shareKakao = (userId, folderId, links, folderName) => {
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
      mobileWebUrl: `${process.env.REACT_APP_HOST}/shared?user=${userId}&folder=${folderId}`,
      webUrl: `${process.env.REACT_APP_HOST}/shared?user=${userId}&folder=${folderId}`,
    },
    contents: linkContent.slice(0, 3),
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: `${process.env.REACT_APP_HOST}/shared?user=${userId}&folder=${folderId}`,
          webUrl: `${process.env.REACT_APP_HOST}/shared?user=${userId}&folder=${folderId}`,
        },
      },
      {
        title: '앱으로 보기',
        link: {
          mobileWebUrl: `${process.env.REACT_APP_HOST}/shared?user=${userId}&folder=${folderId}`,
          webUrl: `${process.env.REACT_APP_HOST}/shared?user=${userId}&folder=${folderId}`,
        },
      },
    ],
  });
};

export default shareKakao;
