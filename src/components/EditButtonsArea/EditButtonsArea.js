import "./EditButtonsArea.css";

const EditButtonsArea = () => {
  return (
    <div className="editButtonsArea">
      <div className="editButton">
        <img
          className="editButtonIcon"
          src={process.env.PUBLIC_URL + `/assets/share.png`}
          alt="공유 버튼"
        />
        <p className="editButtonName">공유</p>
      </div>
      <div className="editButton">
        <img
          className="editButtonIcon"
          src={process.env.PUBLIC_URL + `/assets/pen.png`}
          alt="이름 변경 버튼"
        />
        <p className="editButtonName">이름 변경</p>
      </div>
      <div className="editButton">
        <img
          className="editButtonIcon"
          src={process.env.PUBLIC_URL + `/assets/delete.png`}
          alt="삭제 버튼"
        />
        <p className="editButtonName">삭제</p>
      </div>
    </div>
  );
};

export default EditButtonsArea;
