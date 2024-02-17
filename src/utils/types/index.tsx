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

// intersection 네이밍 서칭 (IFolder)
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

export interface SharedPageState {
  userData: SampleUserData | null;
  folderData: SampleFolderData | null;
}

export interface SampleUserData {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface SampleFolderData {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: [
    {
      id: number;
      createdAt: string;
      url: string;
      title: string;
      description: string;
      imageSource: string;
    }
  ];
  count: number;
}

export interface User1Data {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface ModalContextType {
  openModal: (type: string) => void;
  closeModal: () => void;
}

export interface FolderIdData {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
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

export interface SampleUserDataApiResponse {
  data: SampleUserData;
}

export interface SampleFolderDataApiResponse {
  folder: SampleFolderData;
}

export interface FolderIdApiResponse {
  data: FolderIdData[];
}
