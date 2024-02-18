import { UserFolder, UserLink } from "../api/api";

export interface LinkSearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface FolderListProps {
  onSelectFolder: (
    folder: UserFolder | Pick<UserFolder, "id" | "name">
  ) => void;
  selectedFolder: UserFolder | Pick<UserFolder, "id" | "name">;
}

export interface FolderNameProps {
  selectedFolder: UserFolder | Pick<UserFolder, "id" | "name">;
}

export interface FolderContentCardProps {
  items: UserLink[] | undefined;
}

export interface CardProps {
  item: UserLink;
}

export interface ModalProps {
  closeModal: React.MouseEventHandler<HTMLImageElement | HTMLButtonElement>;
  selectedModalName?: string;
  selectedModalItem?: UserLink;
}
