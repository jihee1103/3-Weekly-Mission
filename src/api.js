export { getUserId, getUserFolder };

async function getUserId() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user",
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  );
  const body = await response.json();
  return body;
}

async function getUserFolder() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder",
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  );
  const body = await response.json();
  return body;
}
