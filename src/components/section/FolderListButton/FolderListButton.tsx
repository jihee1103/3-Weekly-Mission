import { MouseEvent } from 'react';
import styles from './FolderListButton.module.css';
import { Id } from '@/pages/folder';

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
    folderName === buttonName
      ? `${styles['list-button']} ${styles['active']}`
      : styles['list-button'];
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
