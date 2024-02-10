import { UserFolder, UserLink } from "./api";

export interface AllSee {
  id: undefined;
  name: "전체";
}

export interface FolderListProps {
  onSelectFolder: (folder: UserFolder | AllSee) => void;
  selectedFolder: UserFolder | AllSee;
}

export interface FolderNameProps {
  selectedFolder: UserFolder | AllSee;
}

export interface FolderContentCardProps {
  selectedFolder: UserFolder | AllSee;
}

export interface CardProps {
  item: UserLink;
}
