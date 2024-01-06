import { useState } from 'react';
import styled from 'styled-components';
import FolderTitle from './FolderTitle/FolderTitle';

const FolderContainer = styled.div`
  width: 1060px;
  margin-bottom: 24px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  @media (max-width: 1123px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 100%;
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

  &:focus {
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 5px;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-primary-color, #6d6afe);
  }
`;

const FolderMoreButton = styled.button`
  width: 16px;
  height: 16px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Folder = ({ folderData, HandleOverViewFolderCardData, HandleFolderCardData }) => {
  const [currentFolder, setCurrentFolder] = useState('전체');

  const handleCurrentFolder = (name) => {
    setCurrentFolder(name);
  };

  return (
    <>
      <FolderContainer>
        <div>
          <div>
            <FolderButton
              type="button"
              onClick={() => {
                handleCurrentFolder('전체');
                HandleOverViewFolderCardData();
              }}
            >
              전체
            </FolderButton>
            {folderData.map((folder) => {
              return (
                <FolderButton
                  type="button"
                  key={folder.id}
                  onClick={() => {
                    handleCurrentFolder(folder.name);
                    HandleFolderCardData(folder.id);
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
