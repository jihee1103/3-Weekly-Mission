import { getElapsedTime } from "./getElapsedTime";

export const mapLinksData = (link) => {
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
