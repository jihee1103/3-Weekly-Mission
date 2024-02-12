import { MouseEvent } from 'react';
import './FolderListButton.css';
import { Id } from '../../../pages/FolderPage/FolderPage';

interface Props {
  folderName: string;
  onClickFolder: (name: string, id: Id) => void;
  buttonName: string;
  id?: number;
}

export default function FolderListButton({
  folderName,
  onClickFolder,
  buttonName,
  id = undefined,
}: Props) {
  const className =
    folderName === buttonName ? 'list-button active' : 'list-button';
  const onClick = (e: MouseEvent) => {
    if (e.currentTarget.textContent) {
      onClickFolder(e.currentTarget.textContent, id);
    }
  };

  return (
    <button className={className} onClick={onClick}>
      {buttonName}
    </button>
  );
}
