import { API } from '../constant';

export const getUser = async () => {
  try {
    const response = await fetch(API.USER);
    const result = await response.json();

    const formattedData = {
      ...result,
      image_source: result.profileImageSource,
    };

    return formattedData;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getProfile = async () => {
  try {
    const response = await fetch(API.PROFILE);
    const result = await response.json();
    return result;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getSampleFolder = async () => {
  try {
    const response = await fetch(API.FOLDER_SAMPLE);
    const result = await response.json();

    const formattedData = result.folder.links.map(link => ({
      ...link,
      created_at: link.createdAt,
      image_source: link.imageSource,
    }));

    const sampleFolderResult = {
      ...result.folder,
      links: formattedData,
    };
    return sampleFolderResult;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getFolder = async () => {
  try {
    const response = await fetch(API.FOLDER);
    const result = await response.json();
    return result;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getFolderByFolderId = async folderId => {
  try {
    const response = await fetch(
      folderId === 'all' ? API.FOLDER : API.FOLDER + `?folderId=${folderId}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error: ${error}`);
    return [];
  }
};

export const getFilter = async () => {
  try {
    const response = await fetch(API.FILTER);
    const result = await response.json();
    return result;
  } catch (error) {
    return `Error: ${error}`;
  }
};
