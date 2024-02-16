export interface FolderNameData {
  id: string;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export interface FolderData {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
}

export interface FolderPageState {
  foldersNameData: FolderNameData[];
  allFolderData: FolderData[];
  selectedFolderName: string;
  handleClickFilterFolder: (folderName: string) => Promise<void>;
}

export interface User1Data {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
export interface FolderNameApiResponse {
  data: FolderNameData[];
}

export interface FolderDataApiResponse {
  data: FolderData[];
}

export interface User1DataApiResponse {
  data: User1Data[];
}
