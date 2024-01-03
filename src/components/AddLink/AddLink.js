import "./AddLink.css";

function AddLink() {
  return (
    <div className="container-add-link">
      <div className="add-link">
        <div className="add-link-input">
          <img
            className="link-icon"
            src="./images/link.svg"
            alt="클립 아이콘"
          />
          <input className="link-input" placeholder="링크를 추가해 보세요" />
        </div>
        <button className="cta-add">추가하기</button>
      </div>
    </div>
  );
}

export default AddLink;
