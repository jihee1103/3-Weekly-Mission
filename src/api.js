const API_BASE_URL = "https://bootcamp-api.codeit.kr";
export async function getUserId() {
  const response = await fetch(`${API_BASE_URL}/api/sample/user`, {
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });

  return await response.json();
}

export async function getUserFolder() {
  const response = await fetch(`${API_BASE_URL}/api/sample/folder`, {
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });

  return await response.json();
}
