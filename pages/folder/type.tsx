export interface ProfileId {
  data: UserId[];
}

type UserId = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export interface FolderId {
  map(
    arg0: (item: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}
