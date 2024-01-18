import { useState } from 'react';
import styled from 'styled-components';
import checkedIcon from '../../asset/check.svg';

export default function AddLinkToFolder({
  folderList,
  addLinkUrl,
  selectedLinkUrl,
}) {
  const [selectedFolderId, setSelectedFolderId] = useState(0);
  const handleFolderListClick = (id) => {
    setSelectedFolderId(id);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title>폴더에 추가</Title>
        <Url>{selectedLinkUrl || addLinkUrl}</Url>
      </TitleContainer>
      <FolderListContainer>
        {folderList.map((item) => (
          <FolderList
            key={item.id}
            onClick={() => handleFolderListClick(item.id)}
            $isSelected={item.id === selectedFolderId}
          >
            <FolderName $isSelected={item.id === selectedFolderId}>
              {item.name}
            </FolderName>
            <FolderCount>{item.link.count}개 링크</FolderCount>
            {item.id === selectedFolderId ? (
              <CheckedIcon src={checkedIcon} />
            ) : null}
          </FolderList>
        ))}
      </FolderListContainer>
      <AddLinkButton>추가하기</AddLinkButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #373740;
`;
const Url = styled.p`
  line-height: 22px;
  text-align: center;
  width: 100%;
  color: #9fa6b2;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
const FolderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  cursor: pointer;
  height: 172px;
  overflow: auto;
`;
const AddLinkButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
const FolderName = styled.span`
  line-height: 24px;
  color: ${(props) => (props.$isSelected ? '#6d6afe' : '#373740')};
`;
const FolderCount = styled.span`
  color: #9fa6b2;
`;
const FolderList = styled.div`
  display: flex;
  width: 264px;
  padding: 8px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  gap: 8px;
  background-color: ${(props) => (props.$isSelected ? '#F0F6FF' : '#fff')};
  &:hover {
    background-color: #f0f6ff;
    ${FolderName} {
      color: #6d6afe;
    }
  }
`;
const CheckedIcon = styled.img`
  margin-left: auto;
`;
