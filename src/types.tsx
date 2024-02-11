import { RefObject } from "react";
import { UserFolder, UserLink } from "./api";

export interface AllSee {
  id: undefined;
  name: "전체";
}

export interface LinkSearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface FolderListProps {
  onSelectFolder: (folder: UserFolder | AllSee) => void;
  selectedFolder: UserFolder | AllSee;
}

export interface FolderNameProps {
  selectedFolder: UserFolder | AllSee;
}

export interface FolderContentCardProps {
  items: UserLink[] | undefined;
}

export interface CardProps {
  item: UserLink;
}
