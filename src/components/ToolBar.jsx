import "./ToolBar.css";

const ToolBar = function () {
  return (
    <div className="ToolBar">
      <div className="text">유용한 글</div>
      <div className="tools">
        <div className="tool">
          <img src="/img/share_icon.svg" />
          공유
        </div>
        <div className="tool">
          <img src="/img/pen_icon.svg" />
          이름 변경
        </div>
        <div className="tool">
          <img src="/img/delete_icon.svg" />
          삭제
        </div>
      </div>
    </div>
  );
};
export default ToolBar;
