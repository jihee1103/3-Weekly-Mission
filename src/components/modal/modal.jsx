const Modal = styled.div`
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background-color: #fff;

  &:hover {
    border-color: #6d6afe;
  }
`;

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background-color: #fff;

  border-radius: 8px;
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%));
`;

const ModalEdit = function () {
  return (
    <Modal>
      <h2>폴더 이름 변경</h2>
      <input placeholder="내용 입력" />
      <Button >변경하기</Button>
    </Modal>
  );
};
