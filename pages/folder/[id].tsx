import instance from "../../lib/axios";
import { ProfileId } from "./type";

export default async function ProfileApi(): Promise<ProfileId> {
  try {
    const response = await instance.get("users/1");
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}
