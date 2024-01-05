const API_BASE_URL_FOLDER = 'https://bootcamp-api.codeit.kr/api/sample/folder';

export async function getFolders() {
  const response = await fetch(API_BASE_URL_FOLDER)
  const folders = await response.json();
  return folders;
}