import "./addlinkbar-style.css";

export function AddLinkBar() {
  return (
    <div className="add-link-input-section">
      <div className="add-input-section">
        <input
          className="add-bar"
          type="text"
          placeholder="링크를 추가해 보세요."
        ></input>
        <button className="add-button">추가하기</button>
      </div>
    </div>
  );
}
