export interface FolderData {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string | null;
    };
    links: Link[];
  };
}
interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string | null;
  imageSource: string | null;
}

export interface CardData {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
}

export interface UserData {
  id: number;
  name: string | null;
  email: string | null;
  profileImageSource: string | null;
}
