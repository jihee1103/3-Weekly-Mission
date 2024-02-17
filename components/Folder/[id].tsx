import axiosInstance from "../../lib/axios";
import { FolderId, LinkId, ProfileId } from "./type";

export async function ProfileApi(): Promise<ProfileId> {
  try {
    const response = await axiosInstance.get("users/1");
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export async function GetFolderId(): Promise<FolderId[]> {
  try {
    const response = await axiosInstance.get("users/1/folders");
    return response.data.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}

export async function ShowAll(): Promise<LinkId[]> {
  try {
    const response = await axiosInstance.get("users/1/links");
    return response.data.data;
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
}
