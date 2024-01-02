export async function getUserId() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user",
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  );

  return await response.json();
}

export async function getUserFolder() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder",
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  );

  return await response.json();
}
