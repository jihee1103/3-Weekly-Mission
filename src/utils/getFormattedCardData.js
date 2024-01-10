import camelcaseKeys from 'camelcase-keys';

const getFormattedCardData = (data) => {
  const formattedData = camelcaseKeys(data, { deep: true });
  return formattedData;
};

export default getFormattedCardData;

// // 깊은 복사
// let formattedData = JSON.parse(JSON.stringify(data));
// formattedData = formattedData.folder.links.map((link) => {
//   const formattedLink = { ...link, created_at: link.createdAt, image_source: link.imageSource };
//   delete formattedLink.createdAt;
//   delete formattedLink.imageSource;
//   return formattedLink;
// });
// return formattedData;
