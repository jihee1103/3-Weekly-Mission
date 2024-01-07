import "./AddLinkInput.css";

const AddLinkInput = () => {
  return (
    <div className="addLink">
      <input
        className="addLinkInput"
        placeholder="링크를 검색해 보세요."
      ></input>
      <img
        className="LinkIcon"
        src={process.env.PUBLIC_URL + `/assets/link.png`}
        alt="링크 아이콘"
      />
      <button className="addButton">추가하기</button>
    </div>
  );
};
export default AddLinkInput;
