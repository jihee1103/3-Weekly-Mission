import "./AddLink.css";

const AddLink = function () {
  return (
    <div className="background">
      <div className="AddLink">
        <div className="InputImage">
          <input className="AddLinkInput" />
          <img className="AddLinkImage" src="/img/link_icon.svg" />
        </div>
        <button className="AddLinkCta">추가하기</button>
      </div>
    </div>
  );
};

export default AddLink;
