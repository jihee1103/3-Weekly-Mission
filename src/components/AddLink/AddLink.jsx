import styled from 'styled-components';
import linkIcon from '../../asset/link.svg';

export default function AddLink({
  toggleModal,
  updateModalName,
  updateAddLinkUrl,
  addLinkUrl,
  resetSelectedLinkUrl,
}) {
  const handleInputValue = (e) => {
    updateAddLinkUrl(e.currentTarget.value);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    resetSelectedLinkUrl();
    toggleModal();
    updateModalName(e.currentTarget.id);
  };
  return (
    <AddLinkForm>
      <Label htmlFor="linkInput">
        <IconInputWrapper>
          <LinkIcon src={linkIcon} />
          <AddLinkInput
            id="linkInput"
            value={addLinkUrl}
            placeholder="링크를 추가해 보세요."
            onChange={handleInputValue}
          />
        </IconInputWrapper>
        <AddButton id="addLinkButton" onClick={handleButtonClick}>
          추가하기
        </AddButton>
      </Label>
    </AddLinkForm>
  );
}

const AddLinkForm = styled.form``;
const Label = styled.label`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  position: relative;
  @media (max-width: 1199px) {
    & {
      width: 704px;
    }
  }
  @media (max-width: 767px) {
    & {
      padding: 8px 10px;
      width: 325px;
    }
  }
`;
const IconInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
`;
const LinkIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  @media (max-width: 767px) {
    & {
      margin-right: 8px;
    }
  }
`;
const AddLinkInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 0;
  &::placeholder {
    color: #9fa6b2;
    line-height: 24px;
  }
  @media (max-width: 767px) {
    & {
      font-size: 14px;
    }
  }
`;
const AddButton = styled.button`
  width: 81px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  font-size: 14px;
  color: #f5f5f5;
  font-weight: 600;
  line-height: 17px;
  cursor: pointer;
`;
