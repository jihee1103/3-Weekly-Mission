async function UserId() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user",
    {
      method: "GET",
      headers: {
        accept: "*/*", // 모든 미디어 타입 허용
      },
    }
  );
  const body = await response.json();
  return body;
}

async function UserFolder() {
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

export { UserId, UserFolder };
