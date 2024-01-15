<<<<<<< HEAD
export const kakaoJSAppKey = "3566425d9a15039db9fa79a19d5fa8f8";

=======
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4
async function getUser() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const body = await response.json();

  return body;
}

async function getUserById(id) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${id}`
  );
  const body = await response.json();

  return body;
}

async function getFolder() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const body = await response.json();

  return body;
}

<<<<<<< HEAD
async function getFoldersById(id = 1) {
=======
async function getFoldersById(id) {
>>>>>>> 9b307a156bb098fc51e9b682be2b2e1a9b771ed4
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${id}/folders`
  );
  const body = await response.json();

  return body;
}

async function getLinksById(id = undefined) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links${
      id ? `?folderId=${id}` : ""
    }`
  );
  const body = await response.json();

  return body;
}

export { getUser, getUserById, getFolder, getFoldersById, getLinksById };
