import { useState } from 'react';
import styled from 'styled-components';
import FolderTitle from './FolderTitle';

const FolderContainer = styled.div`
  width: 1060px;
  margin-bottom: 24px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
`;

const FolderButton = styled.button`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: #fff;
  color: #000;
  font-family: Pretendard;
`;

const FolderMoreButton = styled.button`
  width: 16px;
  height: 16px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Folder = ({ folderData }) => {
  const [currentFolder, setCurrentFolder] = useState('');

  const handleCurrentFolder = (name) => {
    setCurrentFolder(name);
  };

  return (
    <>
      <FolderContainer>
        <div>
          <div>
            {folderData.map((folder) => {
              return (
                <FolderButton
                  type="button"
                  key={folder.id}
                  onClick={() => {
                    handleCurrentFolder(folder.name);
                  }}
                >
                  {folder.name}
                </FolderButton>
              );
            })}
          </div>
          <FolderMoreButton>
            <img src={`${process.env.PUBLIC_URL}/images/add.svg`} alt="폴더 더보기 사진" />
          </FolderMoreButton>
        </div>
      </FolderContainer>
      <FolderTitle currentFolder={currentFolder} />
    </>
  );
};

export default Folder;
