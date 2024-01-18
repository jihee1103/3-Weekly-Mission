const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export async function getMyFolders() {
  const API_BASE_URL_FOLDER = `${API_BASE_URL}/api/users/1/folders`;
  const response = await fetch(API_BASE_URL_FOLDER)
  return await response.json();
}

export async function getOwner() {
  const API_BASE_URL_OWNER = `${API_BASE_URL}/api/sample/folder`;
  const response = await fetch(API_BASE_URL_OWNER)
  return await response.json();
}

export async function getLinks(id) {  
  const API_BASE_URL_LINKS = `${API_BASE_URL}/api/users/1/links${ id ? `?folderId=${id}` : " "}`
  const response = await fetch(API_BASE_URL_LINKS)
  return await response.json();
}