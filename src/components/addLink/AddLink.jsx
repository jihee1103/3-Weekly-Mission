import "./AddLink.css";

const AddLink = function () {
  return (
    <div className="background">
      <div className="AddLink">
        <div className="InputImage">
          <input className="AddLinkInput" placeholder="링크를 추가해 보세요" />
          <img className="AddLinkImage" src="/img/link_icon.svg" alt="검색" />
        </div>
        <button className="AddLinkCta">추가하기</button>
      </div>
    </div>
  );
};

export default AddLink;
