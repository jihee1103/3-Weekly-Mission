const CODEIT_API = "https://bootcamp-api.codeit.kr/api";

const getData = async function (afterAPI) {
  try {
    const response = await fetch(`${CODEIT_API}${afterAPI}`);
    const data = await response.json();
    return data;
  } catch {
    throw Error("데이터를 불러오지 못했습니다.");
  }
};

export default getData;

// /users/1/folders
// /sample/user
// /users/1/links
// /users/1/links?folderId={해당 폴더 ID}
