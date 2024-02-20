import { FolderData, CardData, UserData } from "./types";

const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export const getUserData = async (): Promise<UserData> => {
  const res = await fetch(`${API_BASE_URL}/api/sample/user`);
  return res.json();
};

export const getFolderData = async (): Promise<FolderData> => {
  const res = await fetch(`${API_BASE_URL}/api/sample/folder`);
  return res.json();
};

export const getFolderList = async (): Promise<FolderData[]> => {
  const res = await fetch(`${API_BASE_URL}/api/users/1/folders`);
  return res.json();
};

export const getAllCardData = async (): Promise<CardData[]> => {
  const res = await fetch(`${API_BASE_URL}/api/users/1/links`);
  return res.json();
};

export const getCardDataById = async (id: string): Promise<CardData[]> => {
  const res = await fetch(`${API_BASE_URL}/api/users/1/links?folderId=${id}`);
  return res.json();
};

export const getFolderUserData = async (): Promise<UserData> => {
  const res = await fetch(`${API_BASE_URL}/api/users/1`);
  return res.json();
};
