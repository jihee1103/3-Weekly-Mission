export async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();

  return body;
}

export async function getUser() {
  const url = "https://bootcamp-api.codeit.kr/api/sample/user";
  const response = await fetchJson(url);
  return response;
}

export async function getShredCardList() {
  const url = "https://bootcamp-api.codeit.kr/api/sample/folder";
  const response = await fetchJson(url);
  return response;
}
