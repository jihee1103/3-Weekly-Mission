import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FolderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  cursor: pointer;
`;
export default function FolderTitle({ item, onClick }) {
  const [folderName, setFolderName] = useState('');

  useEffect(() => {
    setFolderName(item.name);
  }, [item.name]);

  const handleClick = () => {
    onClick();
  };

  return <FolderItem onClick={handleClick}>{folderName}</FolderItem>;
}
