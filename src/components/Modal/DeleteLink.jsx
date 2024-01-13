import styled from 'styled-components';

export default function DeleteLink({ selectedLinkUrl }) {
  return (
    <DeleteLinkWrapper>
      <DeleteLinkTitleContainer>
        <DeleteLinkTitle>링크 삭제</DeleteLinkTitle>
        <DeleteLinkName>{selectedLinkUrl}</DeleteLinkName>
      </DeleteLinkTitleContainer>
      <DeleteLinkButton>삭제하기</DeleteLinkButton>
    </DeleteLinkWrapper>
  );
}

const DeleteLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const DeleteLinkTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const DeleteLinkTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #373740;
`;
const DeleteLinkName = styled.span`
  line-height: 22px;
  color: #9fa6b2;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const DeleteLinkButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #ff5b56;
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
