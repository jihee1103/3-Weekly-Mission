async function getUser() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
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

export { getUser, getFolder };
