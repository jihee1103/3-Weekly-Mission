import styled from 'styled-components';

interface Props {
  folderName: string;
}

export default function DeleteFolder({ folderName }: Props) {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>폴더 삭제</Title>
        <Name>{folderName}</Name>
      </TitleContainer>
      <Button>삭제하기</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #373740;
`;
const Name = styled.span`
  line-height: 22px;
  color: #9fa6b2;
`;

const Button = styled.button`
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
