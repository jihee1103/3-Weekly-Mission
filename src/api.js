const api = "https://bootcamp-api.codeit.kr/api";

export const getSampleUser = async () => {
  const response = await fetch(`${api}/sample/user`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
};

export const getSampleFolder = async () => {
  const response = await fetch(`${api}/sample/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
};
