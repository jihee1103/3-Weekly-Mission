const END_POINT_LOGIN = process.env.REACT_APP_END_POINT_LOGIN;
const END_POINT_FOLDER = process.env.REACT_APP_END_POINT_FOLDER;

export const logIn = async () => {
  const result = await fetch(END_POINT_LOGIN);
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result.json();
}

export const getFolderList = async () => {
  const result = await fetch(END_POINT_FOLDER);
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result.json();
}