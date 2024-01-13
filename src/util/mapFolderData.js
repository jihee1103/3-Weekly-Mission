import { getElapsedTime } from "./getElapsedTime";

export const mapFolderData = (folder) => {
  if (!folder) return []; //폴더 없으면 빈 배열 반환하게 보험

  const { name, owner, links } = folder;

  const mapLinks = (link) => {
    const { id, createdAt, url, imageSource, title, description } = link;

    const createdAtDate = new Date(createdAt);
    const formattedCreatedAt = `${createdAtDate.getFullYear()}. ${
      createdAtDate.getMonth() + 1
    }. ${createdAtDate.getDate()}`;

    return {
      id,
      url,
      imageSource,
      alt: `${title} 의 대표 이미지`,
      elapsedTime: getElapsedTime(createdAt),
      description,
      createdAt: formattedCreatedAt,
    };
  };

  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    links: links?.map(mapLinks) ?? [],
  };
};
