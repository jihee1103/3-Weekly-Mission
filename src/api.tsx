const API_BASE_URL = "https://bootcamp-api.codeit.kr";

export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface SampleFolder {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    links: {
      id: number;
      createdAt: string;
      url: string;
      title: string;
      description: string;
      imageSource?: string;
    }[];
  };
}

export interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface UserFolder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export interface UserLink {
  id: string;
  created_at: string;
  url: string;
  updated_at: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export async function getUserId(): Promise<SampleUser> {
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

export async function getUserFolders(userId: number): Promise<UserFolder[]> {
  const response = await fetch(`${API_BASE_URL}/api/users/${userId}/folders`, {
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });
  const { data } = await response.json();

  return data;
}

export async function getUserProfile(userId: number): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
    method: "GET",
    headers: {
      accept: "*/*",
    },
  });
  const { data } = await response.json();
  return data[0];
}

export async function getUserLinks(
  userId: number,
  folderId: number | undefined
): Promise<UserLink[]> {
  const response = await fetch(
    `${API_BASE_URL}/api/users/${userId}/links${
      folderId ? `?folderId=${folderId}` : ""
    }`,
    {
      method: "GET",
      headers: {
        accept: "*/*",
      },
    }
  );
  const { data } = await response.json();
  return data;
}
