import { API } from '../constant';

export const getUserData = async () => {
  try {
    const response = await fetch(API.USER);
    const result = await response.json();
    return result;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getFolderData = async () => {
  try {
    const response = await fetch(API.FOLDER);
    const result = await response.json();
    return result;
  } catch (error) {
    return `Error: ${error}`;
  }
};
